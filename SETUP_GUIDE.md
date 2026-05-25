# Amazon Reviews Hub - Setup & Deployment Guide

## Project Overview

This is a production-ready Next.js website for Amazon product reviews with full SEO optimization, sorted by customer ratings and review count, featuring affiliate links.

## Tech Stack

- **Framework**: Next.js 14 (Server-Side Rendering for SEO)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Data Source**: Amazon Product Advertising API (mock data included)
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Prerequisites

- Node.js 18+ and npm
- Amazon Associates account
- Domain name (optional but recommended)

## Installation & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.local .env.local  # Edit with your values

# 3. Run development server
npm run dev

# Visit http://localhost:3000
```

## Configuration

### Environment Variables (.env.local)

```
NEXT_PUBLIC_DOMAIN=https://your-domain.com
AMAZON_API_KEY=your_key_here
AMAZON_PARTNER_TAG=your-tag-20
```

### Amazon Associates Integration

1. Sign up: https://associates.amazon.com
2. Get your Partner Tag (e.g., "your-tag-20")
3. Replace `AMAZON_PARTNER_TAG` in `.env.local`
4. Update `generateAffiliateLink()` in `lib/amazonApi.ts`

### Using Real Amazon API

Replace mock data in `lib/amazonApi.ts`:

```javascript
// Instead of mockProducts, use:
const response = await axios.get(
  'https://api.example.amazon/ProductAdvertising',
  {
    params: {
      Operation: 'ItemSearch',
      Keywords: subcategorySlug,
      SearchIndex: 'All',
      PartnerTag: process.env.AMAZON_PARTNER_TAG,
    },
    headers: {
      'Authorization': `Bearer ${process.env.AMAZON_API_KEY}`,
    },
  }
);
```

## SEO Features Implemented

✅ **Server-Side Rendering (SSR)** - Next.js renders pages on the server
✅ **Unique Meta Tags** - Per-page titles, descriptions, keywords
✅ **Structured Data** - JSON-LD schema markup for products and collections
✅ **Open Graph Tags** - Better social sharing
✅ **Sitemap** - Auto-generated at `/sitemap.xml`
✅ **RSS Feed** - Content distribution at `/feed.xml`
✅ **robots.txt** - Crawler instructions
✅ **Canonical URLs** - Prevent duplicate content issues
✅ **Mobile Responsive** - Mobile-first design
✅ **Fast Loading** - Image optimization and lazy loading
✅ **Breadcrumbs** - Help users and search engines navigate
✅ **Internal Linking** - Proper navigation structure

## File Structure

```
amazon-reviews/
├── pages/                 # Next.js pages (routes)
│   ├── index.tsx         # Home page
│   ├── [category].tsx    # Category pages (dynamic)
│   ├── sitemap.xml.ts    # Sitemap generation
│   └── feed.xml.ts       # RSS feed
├── components/            # React components
│   ├── Layout.tsx        # Main layout wrapper
│   └── ProductCard.tsx   # Product display component
├── lib/                   # Utilities and helpers
│   ├── data.ts           # Categories and types
│   ├── amazonApi.ts      # Amazon API integration
│   └── seo.ts            # SEO metadata generation
├── styles/               # CSS modules
│   ├── globals.css       # Global styles
│   ├── Layout.module.css # Layout styles
│   ├── Home.module.css   # Home page styles
│   ├── Category.module.css # Category page styles
│   └── ProductCard.module.css # Product card styles
├── public/               # Static files
│   └── robots.txt        # Search engine crawler rules
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Building & Deployment

### Local Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Deploy to Other Platforms

**AWS Amplify:**
```bash
amplify init
amplify add hosting
amplify publish
```

**Netlify:**
- Connect GitHub repo
- Build: `npm run build`
- Publish: `.next`

**Traditional Node Hosting:**
```bash
npm run build
npm start
```

## Customization

### Adding Categories

Edit `lib/data.ts`:

```typescript
export const categories: Category[] = [
  {
    id: '13',
    name: 'New Category',
    slug: 'new-category',
    description: 'Category description',
    image: 'https://image-url.jpg',
  },
  // ...
];
```

### Adding Subcategories

```typescript
export const subCategories: SubCategory[] = [
  {
    id: '13-1',
    categoryId: '13',
    name: 'Subcategory',
    slug: 'subcategory',
    description: 'Description',
  },
  // ...
];
```

### Customizing Styles

All styles use CSS variables in `styles/globals.css`. Modify colors, fonts, spacing:

```css
:root {
  --color-primary: #FF9900;  /* Change Amazon orange */
  --color-text: #232F3E;     /* Change text color */
  --font-sans: 'Your Font';  /* Change typography */
}
```

## Performance Optimization

The site includes:
- **Image optimization** - Next.js Image component
- **Code splitting** - Automatic per-page bundles
- **CSS optimization** - CSS modules eliminate unused styles
- **Lazy loading** - Products load on demand
- **Caching** - Static generation with ISR (Incremental Static Regeneration)

## SEO Best Practices Checklist

- [ ] Set up Google Search Console
- [ ] Set up Google Analytics
- [ ] Submit sitemap in Search Console
- [ ] Monitor Core Web Vitals
- [ ] Fix crawl errors in Search Console
- [ ] Create content around target keywords
- [ ] Build quality backlinks
- [ ] Ensure mobile usability
- [ ] Fix any 404 errors
- [ ] Set up proper redirects

## Google Search Console

1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Upload sitemap: `yoursite.com/sitemap.xml`
4. Verify site ownership
5. Monitor search performance

## Common Issues & Solutions

**Issue**: Products not showing
- Check `lib/amazonApi.ts` mock data
- Verify Amazon API credentials
- Check browser console for errors

**Issue**: SEO tags not updating
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Hard refresh browser (Ctrl+Shift+R)

**Issue**: Affiliate links not tracking
- Verify `AMAZON_PARTNER_TAG` in env variables
- Check Amazon Associates dashboard
- Ensure you're using correct tag format

## Security

- Use environment variables for sensitive data
- Don't commit `.env.local` to git
- Validate all user inputs
- Use HTTPS in production
- Set proper security headers (included in next.config.js)

## Monitoring & Analytics

Add Google Analytics to track user behavior:

1. Create GA4 property
2. Add tracking ID to `.env.local`
3. Implement tracking code in `_app.tsx` or `_document.tsx`

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Amazon Associates: https://associates.amazon.com
- Google Search Console: https://search.google.com/search-console
- Schema.org: https://schema.org

## License

This project is ready for production use. Modify as needed for your specific use case.

---

**Last Updated**: 2024
**Next.js Version**: 14.0+
