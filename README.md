# Amazon Reviews Hub

A production-ready, SEO-optimized Next.js website that showcases Amazon products ranked by customer ratings and reviews. Features affiliate links, automatic sitemap generation, and structured data markup.

## 🚀 Features

### SEO Optimization
- **Server-Side Rendering (SSR)** - Pages render on the server for perfect SEO
- **Structured Data** - JSON-LD schema markup for products and collections
- **Meta Tags** - Unique titles, descriptions, keywords per page
- **Sitemap & RSS** - Auto-generated sitemaps and RSS feeds
- **Open Graph** - Better social sharing with preview images
- **Mobile Responsive** - Mobile-first design for Google rankings
- **Breadcrumbs** - Proper navigation hierarchy
- **Canonical URLs** - Prevent duplicate content penalties

### Product Features
- **Smart Sorting** - Products automatically sorted by rating and review count
- **12+ Categories** - Electronics, Home & Kitchen, Fashion, Sports, Beauty, and more
- **Subcategories** - Organized browsing with 15+ subcategories
- **Affiliate Links** - Amazon Associate integration for monetization
- **Product Cards** - Beautiful, responsive product displays
- **Real-time Data** - Integration ready for Amazon Product Advertising API

### Performance
- **Image Optimization** - Automatic Next.js image optimization
- **Lazy Loading** - Products load on demand
- **Code Splitting** - Minimal JavaScript per page
- **Static Generation** - Fast page loads with ISR (Incremental Static Regeneration)
- **CSS Modules** - Zero CSS conflicts with scoped styling

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Framework**: Next.js 14 (SSR/SSG)
- **Styling**: CSS Modules + Global CSS
- **Data**: Amazon Product Advertising API (mock data included)
- **Deployment**: Vercel, Netlify, or any Node.js hosting

## 🎯 Quick Start

### 1. Installation

```bash
# Clone or download the project
cd amazon-reviews

# Install dependencies
npm install

# Configure environment
cp .env.local .env.local
# Edit .env.local with your values
```

### 2. Configuration

Create `.env.local`:
```env
NEXT_PUBLIC_DOMAIN=https://your-domain.com
AMAZON_API_KEY=your_key
AMAZON_PARTNER_TAG=your-tag-20
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 4. Deploy

**Vercel (1 minute):**
```bash
npm install -g vercel
vercel
```

**Other Platforms:**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
amazon-reviews/
├── pages/              # Next.js routes
│   ├── index.tsx      # Home page
│   ├── [category].tsx # Dynamic category pages
│   ├── sitemap.xml.ts # SEO sitemap
│   └── feed.xml.ts    # RSS feed
├── components/         # Reusable React components
│   ├── Layout.tsx     # Main layout
│   └── ProductCard.tsx # Product display
├── lib/                # Utilities
│   ├── data.ts        # Categories & types
│   ├── amazonApi.ts   # Amazon integration
│   └── seo.ts         # SEO helpers
├── styles/            # CSS modules
├── public/            # Static files
└── SETUP_GUIDE.md    # Detailed setup instructions
```

## 🔧 Configuration Guide

### Amazon Associates Integration

1. **Sign up**: https://associates.amazon.com
2. **Get Partner Tag**: e.g., `your-tag-20`
3. **Add to `.env.local`**:
   ```env
   AMAZON_PARTNER_TAG=your-tag-20
   ```

### Add Real Amazon Data

Replace mock data in `lib/amazonApi.ts` with real API calls:

```typescript
// Use Amazon Product Advertising API
const response = await axios.get('https://api.amazon.com/...', {
  params: {
    Keywords: subcategorySlug,
    PartnerTag: process.env.AMAZON_PARTNER_TAG,
  },
  headers: {
    'Authorization': `Bearer ${process.env.AMAZON_API_KEY}`,
  },
});
```

### Customize Categories

Edit `lib/data.ts` to add/remove categories and subcategories:

```typescript
export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Best electronics...',
    image: 'https://...',
  },
  // Add more categories
];
```

### Customize Colors

Edit `styles/globals.css`:

```css
:root {
  --color-primary: #FF9900;      /* Amazon orange */
  --color-text: #232F3E;         /* Text color */
  --color-surface: #F5F5F5;      /* Background color */
  --font-sans: 'Segoe UI', ...;  /* Font family */
}
```

## 🌐 SEO Setup Checklist

After deployment:

- [ ] Set custom domain
- [ ] Add to Google Search Console
- [ ] Submit sitemap (`/sitemap.xml`)
- [ ] Add Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Add internal links between categories
- [ ] Create blog posts around keywords
- [ ] Build quality backlinks
- [ ] Test mobile usability
- [ ] Fix any crawl errors

## 📊 Pages Generated

The site automatically creates:

- `Home page` - Category showcase
- `Category pages` - One per category (12+)
- `Subcategory pages` - Sorted products
- `/sitemap.xml` - For search engines
- `/robots.txt` - Crawler instructions
- `/feed.xml` - RSS feed for distribution

## 💰 Monetization

- **Affiliate Links**: Each product links to Amazon with your Associate tag
- **Commission Tracking**: Monitor earnings in Amazon Associates dashboard
- **Passive Income**: Earn when users click and purchase

## 🚀 Deployment Platforms

### Vercel (Recommended)
```bash
vercel deploy
```
- Auto-scaling
- Free tier available
- Built for Next.js

### Netlify
- Connect GitHub repo
- Build: `npm run build`
- Deploy: `.next` folder

### Traditional Hosting
```bash
npm run build
npm start
```

## 📈 Performance Metrics

Target Core Web Vitals:
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

Monitor in:
- Google PageSpeed Insights
- Google Search Console
- Web Vitals library

## 🔒 Security

- Environment variables for secrets
- No hardcoded API keys
- HTTPS recommended
- Security headers included
- Input validation ready

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Amazon Associates](https://associates.amazon.com)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org](https://schema.org)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)

## 🤝 Support

For questions or issues:
1. Check `SETUP_GUIDE.md` for detailed instructions
2. Review `lib/amazonApi.ts` for API integration
3. Check Next.js docs for framework questions
4. Verify `.env.local` configuration

## 📝 License

Ready for production use. Modify as needed for your business.

---

**Last Updated**: January 2024
**Next.js**: 14.0+
**Node.js**: 18+

Built with ❤️ for affiliate marketers and product reviewers.
