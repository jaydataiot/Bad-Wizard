export async function onRequest(context) {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url>
    <loc>https://workers.dev</loc>
    <lastmod>2026-07-31</lastmod>
  </url>
</urlset>`;

  return new Response(sitemapXml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
