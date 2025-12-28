const { Client } = require('@notionhq/client');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DB;
const OUTPUT_DIR = path.join('src', 'data', 'generated');

const notion = new Client({ auth: NOTION_TOKEN });

// Función para generar el archivo de comandos
async function generateCommandsFile(commands) {
  const commandsContent = `// Este archivo es generado automáticamente desde Notion
// NO editar manualmente - los cambios se sobrescribirán

export interface Command {
  id: string;
  title: string;
  command: string;
  description: string;
  category: string;
  tags: string[];
  examples?: string[];
  dangerous?: boolean;
  platform?: string;
  syntax?: string;
  parameters?: Array<{
    param: string;
    description: string;
    example: string;
  }>;
  output?: string;
  notes?: string;
  references?: string[];
  created_at: string;
  updated_at: string;
}

export const commands: Command[] = ${JSON.stringify(commands, null, 2)};

// Convertir categorías de strings a objetos para compatibilidad con componentes
export const categories = [
  { id: 'all', name: 'Todos los comandos', color: 'gray', count: commands.length },
  ...([...new Set(commands.map(cmd => cmd.category))].sort().map(category => ({
    id: category.toLowerCase().replace(/\\s+/g, '-'),
    name: category,
    color: getCategoryColor(category),
    count: commands.filter(cmd => cmd.category === category).length
  })))
];

// Función para asignar colores a categorías
function getCategoryColor(category: string): string {
  const colorMap: { [key: string]: string } = {
    'dns': 'blue',
    'linux': 'green',
    'security': 'red',
    'network': 'indigo',
    'database': 'purple',
    'web': 'orange',
    'git': 'teal',
    'docker': 'cyan'
  };
  
  return colorMap[category.toLowerCase()] || 'gray';
}

export function getCommandById(id: string): Command | undefined {
  return commands.find(cmd => cmd.id === id);
}

export function getCommandsByCategory(category: string): Command[] {
  if (category === 'all') return commands;
  return commands.filter(cmd => cmd.category === category);
}

export function searchCommands(query: string): Command[] {
  const searchTerm = query.toLowerCase();
  return commands.filter(cmd => 
    cmd.title.toLowerCase().includes(searchTerm) ||
    cmd.command.toLowerCase().includes(searchTerm) ||
    cmd.description.toLowerCase().includes(searchTerm) ||
    cmd.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
`;

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUTPUT_DIR, 'commands.ts'), commandsContent);
  console.log(`✅ Archivo de comandos generado en ${OUTPUT_DIR}/commands.ts`);
}

// Función para extraer parámetros de texto markdown
function extractParameters(content) {
  const paramRegex = /\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|/g;
  const parameters = [];
  let match;

  while ((match = paramRegex.exec(content)) !== null) {
    parameters.push({
      param: match[1].trim(),
      description: match[2].trim(),
      example: match[3].trim()
    });
  }

  return parameters;
}

// Función para extraer ejemplos de código
function extractExamples(content) {
  const codeBlockRegex = /```(?:bash|shell)?\s*\n([\s\S]*?)\n```/g;
  const examples = [];
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    const code = match[1].trim();
    if (code && !code.includes('Salida esperada') && !code.includes('Output')) {
      examples.push(code);
    }
  }

  return examples;
}

// Función para extraer salida esperada
function extractOutput(content) {
  const outputRegex = /```(?:bash|shell)?\s*\n([\s\S]*?)\n```/g;
  const outputs = [];
  let match;

  while ((match = outputRegex.exec(content)) !== null) {
    const code = match[1].trim();
    if (code.includes('Salida esperada') || code.includes('Output') || code.includes('[*]')) {
      outputs.push(code);
    }
  }

  return outputs.length > 0 ? outputs[0] : '';
}

// Función para extraer notas/tips
function extractNotes(content) {
  const notesRegex = /### \*\*💡 Notas \/ Tips\*\*\s*\n\s*([\s\S]*?)(?=\n###|\n---|\n$)/;
  const match = content.match(notesRegex);
  return match ? match[1].trim() : '';
}

// Función para extraer referencias
function extractReferences(content) {
  const refRegex = /- \[([^\]]+)\]\(([^)]+)\)/g;
  const references = [];
  let match;

  while ((match = refRegex.exec(content)) !== null) {
    references.push(match[1]);
  }

  return references;
}

// Función para extraer sintaxis básica
function extractSyntax(content) {
  const syntaxRegex = /```(?:bash|shell)?\s*\n([\s\S]*?)\n```/;
  const match = content.match(syntaxRegex);
  return match ? match[1].trim() : '';
}

// Función principal para sincronizar comandos
async function syncCommandsFromNotion() {
  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.error('❌ Variables de entorno NOTION_TOKEN y NOTION_DB son requeridas');
    process.exit(1);
  }

  try {
    console.log('🔄 Sincronizando comandos desde Notion...');
    
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          { property: 'Status', status: { equals: 'Done' } },
          { property: 'Title', title: { is_not_empty: true } },
        ],
      },
      sorts: [
        { property: 'Title', direction: 'ascending' },
      ],
    });

    const commands = [];
    const validIds = [];

    for (const page of response.results) {
      try {
        const properties = page.properties;
        
        // Extraer propiedades básicas
        const title = properties.Title?.title?.[0]?.plain_text || 'Sin título';
        const command = properties.command?.rich_text?.[0]?.plain_text || '';
        const description = properties.Description?.rich_text?.[0]?.plain_text || '';
        const category = properties.Category?.multi_select?.map(tag => tag.name).join(', ') || 'General';
        const tags = properties.Tags?.select?.name ? [properties.Tags.select.name] : [];
        const dangerous = properties.Dangerous?.select?.name === 'YES';
        const platform = 'Unix'; // No hay propiedad Platform en la base de datos

        // Obtener contenido completo de la página
        const { NotionToMarkdown } = require('notion-to-md');
        const n2m = new NotionToMarkdown({ notionClient: notion });
        const md = await n2m.pageToMarkdown(page.id);
        const content = n2m.toMarkdownString(md).parent;

        // Extraer información adicional del contenido
        const parameters = extractParameters(content);
        const examples = extractExamples(content);
        const output = extractOutput(content);
        const notes = extractNotes(content);
        const references = extractReferences(content);
        const syntax = extractSyntax(content);

        const commandObj = {
          id: page.id,
          title,
          command,
          description,
          category,
          tags,
          examples,
          dangerous,
          platform,
          syntax,
          parameters,
          output,
          notes,
          references,
          created_at: page.created_time,
          updated_at: page.last_edited_time,
        };

        commands.push(commandObj);
        validIds.push(page.id);
        
        console.log(`✅ ${title} - ${category}`);

      } catch (error) {
        console.error(`❌ Error procesando página ${page.id}:`, error.message);
      }
    }

    // Generar archivo de comandos
    await generateCommandsFile(commands);
    
    console.log(`\n🎉 Sincronización completada:`);
    console.log(`   📊 Total de comandos: ${commands.length}`);
    console.log(`   📁 Categorías: ${[...new Set(commands.map(cmd => cmd.category))].length}`);
    console.log(`   🏷️  Tags únicos: ${[...new Set(commands.flatMap(cmd => cmd.tags))].length}`);

  } catch (error) {
    console.error('❌ Error en la sincronización:', error);
    process.exit(1);
  }
}

// Ejecutar sincronización
syncCommandsFromNotion();
