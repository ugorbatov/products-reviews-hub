# Quick Reference Card

## 🚀 5-Minute Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local with your credentials
cat > .env.local << EOF
NEXT_PUBLIC_DOMAIN=https://your-domain.com
AMAZON_PARTNER_TAG=your-tag-20
AMAZON_API_KEY=your_key
EOF

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 📋 Essential Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm start                # Run production build

# Deployment
vercel                   # Deploy to Vercel (fastest)
npm run build && npm start  # Local production test

# Clean
rm -rf .next node_modules && npm install
```

---

## 📁 Key Files You'll Edit

| File | Purpose | Edit When |
|------|---------|-----------|
| `.env.local` | API credentials | Setting up Amazon |
| `lib/data.ts` | Categories & products | Adding categories |
| `styles/globals.css` | Colors & fonts | Customizing design |
| `lib/amazonApi.ts` | API integration | Using real Amazon data |
| `lib/seo.ts` | Meta tags | Changing SEO text |

---

## 🔗 Important Links

| Service | URL | Purpose |
|---------|-----|---------|
| **Amazon Associates** | https://associates.amazon.com | Get Partner Tag |
| **Vercel Deploy** | https://vercel.com | Deploy site |
| **Google Search Console** | https://search.google.com/search-console | Monitor SEO |
| **Google Analytics** | https://analytics.google.com | Track traffic |
| **PageSpeed Insights** | https://pagespeed.web.dev | Check speed |

---

## 🎨 Customization Quick Tips

### Change Amazon Orange Color
File: `styles/globals.css`
```css
--color-primary: #FF9900;  /* Change to your color */
```

### Add New Category
File: `lib/data.ts`
```typescript
{
  id: '13',
  name: 'New Category',
  slug: 'new-category',
  description: 'Description',
  image: 'https://image.jpg',
}
```

### Change Homepage Title
File: `pages/index.tsx`
```typescript
<h1>Your Custom Title Here</h1>
```

---

## 🔍 SEO Checklist (Post-Deploy)

- [ ] Domain pointing to site
- [ ] HTTPS working
- [ ] Homepage loads without errors
- [ ] Mobile responsive (test on phone)
- [ ] Affiliate links working
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] robots.txt accessible: `/robots.txt`
- [ ] Add to Google Search Console
- [ ] Submit sitemap to GSC
- [ ] Add Google Analytics tracking
- [ ] Test page speed: pagespeed.web.dev

---

## 📊 Pages Structure

```
/                           → Home (all categories)
/electronics                → Electronics category
/electronics/smartphones    → Smartphones subcategory
/sitemap.xml               → SEO sitemap
/robots.txt                → Crawler rules
/feed.xml                  → RSS feed
```

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Products not showing | Check mock data in `lib/amazonApi.ts` |
| Styles not loading | Clear `.next` folder: `rm -rf .next` |
| API errors | Check `.env.local` has all variables |
| Links not working | Verify URLs in `lib/data.ts` |
| Meta tags not updating | Rebuild: `npm run build` |

---

## 💡 Pro Tips

1. **Use GitHub**: Push code to GitHub for easy deployment to Vercel
2. **Monitor Search Console**: Check for crawl errors weekly
3. **Update Content**: Add new products and descriptions regularly
4. **Build Backlinks**: Write guest posts with links to your site
5. **Test Mobile**: Always test on your phone before deploying

---

## 📈 Expected Timeline

| Time | Milestone |
|------|-----------|
| **Day 1** | Site live, indexed by Google |
| **Week 1** | First keywords appearing in results |
| **Month 1** | 10-20 keywords ranking (position 50+) |
| **Month 3** | Visible progress in Google |
| **Month 6** | 20-30 keywords in top 50 |
| **Year 1** | Consistent top 10 rankings |

---

## 🎯 Affiliate Link Format

Your affiliate links look like:
```
https://www.amazon.com/dp/ASIN?tag=your-tag-20
```

Replace `your-tag-20` with your actual Partner Tag from Amazon Associates.

---

## 📞 Quick Support

1. **Setup issues?** → Read `SETUP_GUIDE.md`
2. **Deploy questions?** → Read `DEPLOYMENT.md`
3. **SEO help?** → Read `SEO_GUIDE.md`
4. **API integration?** → Check `lib/amazonApi.ts` comments
5. **Stuck?** → Check `PROJECT_SUMMARY.md` file structure

---

## ✨ What You Get

- ✅ 12+ product categories
- ✅ Full SEO optimization
- ✅ Mobile responsive design
- ✅ Affiliate link system
- ✅ Auto-generated sitemap
- ✅ RSS feed
- ✅ Professional UI
- ✅ Production ready

---

## 🚀 Deploy in 2 Minutes

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set environment variables in Vercel dashboard
# 4. Done! Visit your site
```

---

## 💰 Monetization Timeline

| Phase | Action | Time |
|-------|--------|------|
| **Phase 1** | Create site, optimize SEO | Month 1-2 |
| **Phase 2** | Get first rankings | Month 3-4 |
| **Phase 3** | Earn first commissions | Month 5-6 |
| **Phase 4** | Scale to multiple categories | Month 6+ |

Affiliate commissions typically take 30-60 days to appear after first sales.

---

## 🎓 Learning Path

1. **Day 1**: Deploy site (follow DEPLOYMENT.md)
2. **Week 1**: Set up Google Search Console
3. **Week 2**: Configure Google Analytics
4. **Week 3**: Customize categories and colors
5. **Week 4**: Start building backlinks
6. **Month 2**: Write quality content
7. **Month 3**: Monitor rankings and optimize

---

## 🔒 Security Checklist

- [ ] `.env.local` in `.gitignore` ✓ (already done)
- [ ] No API keys in code ✓ (already done)
- [ ] HTTPS enabled on deployment ✓ (automatic on Vercel)
- [ ] Environment variables set in hosting platform
- [ ] Regular security updates for dependencies

---

## 📱 Mobile Testing

Test your site on phone:
1. Deploy to Vercel
2. Visit site on mobile
3. Test all buttons and links
4. Verify images load fast
5. Check responsive design

Use DevTools in Chrome (F12) to simulate mobile.

---

**You're all set! 🎉**

Start with `README.md` → `SETUP_GUIDE.md` → `DEPLOYMENT.md` → `SEO_GUIDE.md`

Good luck! 🚀
