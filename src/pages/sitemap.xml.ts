import { commands } from '../data/generated/commands';

const SITE = 'https://cheatsheet.villaarreola.com';

const staticPages = [
  { loc: `${SITE}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${SITE}/privacy`, priority: '0.5', changefreq: 'monthly' },
  { loc: `${SITE}/terms`, priority: '0.5', changefreq: 'monthly' },
];

function getSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}

export function GET() {
  const commandEntries = commands.map((cmd) => {
    const slug = getSlug(cmd.title);
    const lastmod = cmd.updated_at
      ? new Date(cmd.updated_at).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0];

    return `  <url>
    <loc>${SITE}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const staticEntries = staticPages.map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries.join('\n')}
${commandEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
