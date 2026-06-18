import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createJiti } from 'jiti';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const jiti = createJiti(import.meta.url);
const { courses } = jiti(resolve(rootDir, 'src/mocks/coursesData.ts'));
const { blogPosts } = jiti(resolve(rootDir, 'src/mocks/blogData.ts'));

const siteUrl = process.env.SITE_URL || 'https://proitkeys.com';
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/courses', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.7', changefreq: 'monthly' },
  { path: '/career-success-services', priority: '0.7', changefreq: 'monthly' },
  { path: '/career-placement-support', priority: '0.7', changefreq: 'monthly' },
  { path: '/corporate-training-solutions', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/programs', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
];

const courseRoutes = courses.map((course) => ({
  path: `/courses/${course.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

const urls = [...staticRoutes, ...courseRoutes, ...blogRoutes]
  .map(({ path, priority, changefreq }) => `  <url>
    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir(resolve(rootDir, 'public'), { recursive: true });
await writeFile(resolve(rootDir, 'public/sitemap.xml'), sitemap);
await writeFile(resolve(rootDir, 'public/robots.txt'), robots);

console.log(`Generated sitemap with ${staticRoutes.length + courseRoutes.length + blogRoutes.length} URLs.`);
