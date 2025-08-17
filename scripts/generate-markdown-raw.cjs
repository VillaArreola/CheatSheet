const { Client } = require('@notionhq/client');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DB;
const PUBLIC_DIR = path.join('public', 'comando');

const notion = new Client({ auth: NOTION_TOKEN });

// Función para generar una página markdown individual usando contenido raw
function generateMarkdownPage(title, rawContent) {
  const fileName = title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  
  // Agregar frontmatter para usar el layout de comandos
  const markdownContent = `---
layout: ../../layouts/cheatlayout.astro
title: ${title}
---

${rawContent}`;

  return { fileName, content: markdownContent };
}

// Función principal para generar páginas markdown
async function generateMarkdownPages() {
  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.error('❌ Variables de entorno NOTION_TOKEN y NOTION_DB son requeridas');
    process.exit(1);
  }

  try {
    console.log('🔄 Generando páginas markdown desde Notion (contenido raw)...');
    
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

    await fs.mkdir(PUBLIC_DIR, { recursive: true });

    for (const page of response.results) {
      try {
        const properties = page.properties;
        const title = properties.Title?.title?.[0]?.plain_text || 'Sin título';

        // Obtener contenido completo de la página en markdown raw
        const { NotionToMarkdown } = require('notion-to-md');
        const n2m = new NotionToMarkdown({ notionClient: notion });
        const md = await n2m.pageToMarkdown(page.id);
        const rawContent = n2m.toMarkdownString(md).parent;

        // Generar página markdown usando el contenido raw
        const { fileName, content: markdownContent } = generateMarkdownPage(title, rawContent);
        const publicFilePath = path.join(PUBLIC_DIR, `${fileName}.md`);
        
        await fs.writeFile(publicFilePath, markdownContent);
        console.log(`✅ ${title} - ${fileName}.md`);

      } catch (error) {
        console.error(`❌ Error procesando página ${page.id}:`, error.message);
      }
    }

    console.log(`\n🎉 Generación de páginas completada:`);
    console.log(`   📁 Directorio: ${PUBLIC_DIR}`);

  } catch (error) {
    console.error('❌ Error generando páginas:', error);
    process.exit(1);
  }
}

// Ejecutar generación
generateMarkdownPages();
