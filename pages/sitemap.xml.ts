// pages/sitemap.xml.ts
import { GetServerSideProps } from 'next';
import { categories, subCategories } from '@/lib/data';

function generateSiteMap() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://amazon-reviews.example.com';

  const categoryUrls = categories.map(category => ({
    loc: `${domain}/${category.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const subCategoryUrls = subCategories.map(subcat => {
    const category = categories.find(cat => cat.id === subcat.categoryId);
    return {
      loc: `${domain}/${category?.slug}/${subcat.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.7',
    };
  });

  const urls = [
    {
      loc: domain,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0',
    },
    ...categoryUrls,
    ...subCategoryUrls,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(({ loc, lastmod, changefreq, priority }) => {
          return `
        <url>
          <loc>${escapeXml(loc)}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const SiteMapPage = () => {
  return null;
};

export default SiteMapPage;
