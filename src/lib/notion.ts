import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// Configuración
const NOTION_TOKEN = import.meta.env.NOTION_TOKEN;
const DATABASE_ID = import.meta.env.NOTION_DB;

// Cliente de Notion
const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// Tipos para comandos
export interface NotionCommand {
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

// Función principal para obtener comandos desde Notion
export async function fetchCommandsFromNotion(): Promise<NotionCommand[]> {
  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.warn('⚠️ Variables de entorno de Notion no configuradas');
    return [];
  }

  try {
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

    const commands: NotionCommand[] = [];

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

        // Extraer ejemplos si existen
        const examplesText = properties.Examples?.rich_text?.[0]?.plain_text || '';
        const examples = examplesText ? examplesText.split('\n').filter(ex => ex.trim()) : [];

        commands.push({
          id: page.id,
          title,
          command,
          description,
          category,
          tags,
          examples,
          dangerous,
          platform,
          created_at: page.created_time,
          updated_at: page.last_edited_time,
        });

      } catch (error) {
        console.error(`❌ Error procesando página ${page.id}:`, error);
      }
    }

    console.log(`✅ ${commands.length} comandos obtenidos desde Notion`);
    return commands;

  } catch (error) {
    console.error('❌ Error obteniendo comandos desde Notion:', error);
    return [];
  }
}

// Función para obtener un comando específico por ID
export async function getCommandById(id: string): Promise<NotionCommand | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const properties = page.properties as any;
    
    return {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || 'Sin título',
      command: properties.Command?.rich_text?.[0]?.plain_text || '',
      description: properties.Description?.rich_text?.[0]?.plain_text || '',
      category: properties.Category?.select?.name || 'General',
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      dangerous: properties.Dangerous?.checkbox || false,
      platform: properties.Platform?.select?.name || 'Unix',
      created_at: page.created_time,
      updated_at: page.last_edited_time,
    };
  } catch (error) {
    console.error(`❌ Error obteniendo comando ${id}:`, error);
    return null;
  }
}

// Función para obtener categorías únicas
export async function getCategoriesFromNotion(): Promise<string[]> {
  const commands = await fetchCommandsFromNotion();
  const categories = [...new Set(commands.map(cmd => cmd.category))];
  return categories.sort();
}
