// pages/feed.xml.ts
import { GetServerSideProps } from 'next';
import { categories } from '@/lib/data';

function generateRssFeed() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://amazon-reviews.example.com';

  const feedItems = categories.map(category => ({
    title: `New Products Added: ${category.name}`,
    description: category.description,
    link: `${domain}/${category.slug}`,
    pubDate: new Date().toUTCString(),
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Amazon Reviews Hub - Latest Products</title>
    <link>${domain}</link>
    <description>Discover the best Amazon products ranked by customer ratings and reviews</description>
    <language>en-us</language>
    <image>
      <url>${domain}/og-image.jpg</url>
      <title>Amazon Reviews Hub</title>
      <link>${domain}</link>
    </image>
    ${feedItems
      .map(
        item => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid>${item.link}</guid>
    </item>
    `
      )
      .join('')}
  </channel>
</rss>`;
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
  const feed = generateRssFeed();

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.write(feed);
  res.end();

  return {
    props: {},
  };
};

const FeedPage = () => {
  return null;
};

export default FeedPage;
