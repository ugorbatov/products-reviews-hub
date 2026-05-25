# Deployment Instructions

This guide covers deploying your Amazon Reviews Hub to various platforms.

## Quick Deployment Comparison

| Platform | Setup Time | Cost | Ease | Recommendation |
|----------|-----------|------|------|-----------------|
| **Vercel** | 2 min | Free tier available | ⭐⭐⭐⭐⭐ | **Best for Next.js** |
| **Netlify** | 5 min | Free tier available | ⭐⭐⭐⭐ | Great alternative |
| **AWS Amplify** | 10 min | Free tier available | ⭐⭐⭐ | More complex |
| **Heroku** | 5 min | Paid ($7+/mo) | ⭐⭐⭐⭐ | Good reliability |
| **DigitalOcean** | 15 min | Paid ($5+/mo) | ⭐⭐⭐ | VPS control |

---

## 🎯 Vercel (Recommended)

Vercel is the company behind Next.js and provides the best integration.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/amazon-reviews.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Environment variables will be auto-configured
   - Click "Deploy"

3. **Set Environment Variables**
   - Project Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_DOMAIN = your-domain.com
     AMAZON_API_KEY = your_key
     AMAZON_PARTNER_TAG = your-tag-20
     ```

4. **Custom Domain**
   - Settings → Domains
   - Add your domain
   - Update DNS records

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production domain
vercel --prod
```

---

## 📦 Netlify

### Using Git Integration

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub
   - Authorize and select repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables:
     ```
     NEXT_PUBLIC_DOMAIN=your-domain.com
     AMAZON_API_KEY=your_key
     AMAZON_PARTNER_TAG=your-tag-20
     ```

4. **Deploy**
   - Netlify auto-deploys on push
   - Monitor in "Deploys" tab

### Using Netlify CLI

```bash
# Install
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Connect to git
netlify init
```

---

## 🚀 AWS Amplify

```bash
# Install Amplify CLI
npm i -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting
# Select: "Hosting with Amplify Console"
# Environment: "prod"

# Deploy
amplify publish
```

---

## 🐘 Heroku

### Using Git

```bash
# Install Heroku CLI
# macOS: brew tap heroku/brew && brew install heroku
# Windows/Linux: Download from heroku.com/cli

# Login
heroku login

# Create app
heroku create amazon-reviews-hub

# Set environment variables
heroku config:set NEXT_PUBLIC_DOMAIN=your-domain.com
heroku config:set AMAZON_API_KEY=your_key
heroku config:set AMAZON_PARTNER_TAG=your-tag-20

# Deploy
git push heroku main

# View logs
heroku logs --tail

# Custom domain
heroku domains:add www.your-domain.com
```

---

## 🌊 DigitalOcean

### Create Droplet + Deploy

1. **Create Droplet**
   - Size: $5/month (1GB RAM)
   - OS: Ubuntu 22.04
   - Region: Closest to users

2. **SSH into Droplet**
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone & Deploy**
   ```bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/amazon-reviews.git
   cd amazon-reviews
   npm install
   npm run build
   ```

5. **Use PM2 for Process Management**
   ```bash
   npm i -g pm2
   pm2 start "npm start" --name amazon-reviews
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   ```
   
   Edit `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   ```bash
   sudo systemctl restart nginx
   ```

7. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Docker Deployment

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run

```bash
# Build
docker build -t amazon-reviews .

# Run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_DOMAIN=your-domain.com \
  -e AMAZON_API_KEY=your_key \
  -e AMAZON_PARTNER_TAG=your-tag-20 \
  amazon-reviews

# Visit http://localhost:3000
```

### Deploy to Docker Hub

```bash
docker login
docker tag amazon-reviews YOUR_USERNAME/amazon-reviews
docker push YOUR_USERNAME/amazon-reviews
```

---

## Post-Deployment Checklist

- [ ] Domain points to your site
- [ ] HTTPS/SSL working
- [ ] Environment variables set correctly
- [ ] Home page loads without errors
- [ ] Products display correctly
- [ ] Affiliate links working
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] robots.txt accessible (`/robots.txt`)
- [ ] Mobile responsive
- [ ] Analytics working (if configured)

---

## SEO Setup After Deployment

1. **Google Search Console**
   - Add property at https://search.google.com/search-console
   - Verify ownership
   - Submit sitemap
   - Monitor for errors

2. **Google Analytics**
   - Create property at https://analytics.google.com
   - Add GA4 tracking ID to code
   - Track user behavior

3. **Monitor Performance**
   - Core Web Vitals
   - Crawl stats
   - Search appearance

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clean and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Verify variable names match `.env.local`
- Check platform dashboard for correct values
- Restart deployment after changing variables

### Static Files Not Loading
- Verify `public/` folder exists
- Check Next.js config image domains
- Rebuild and redeploy

### API Rate Limit Errors
- Implement caching in `lib/amazonApi.ts`
- Add rate limiting logic
- Consider upgrading Amazon API plan

---

## Monitoring & Maintenance

### Key Metrics to Monitor
- Page load time
- Core Web Vitals
- Error rates
- Uptime
- Traffic patterns

### Regular Tasks
- Check Google Search Console for errors (weekly)
- Monitor affiliate earnings
- Review analytics (weekly)
- Update product data (daily/weekly)
- Security patches (as needed)

---

## Questions?

1. Check platform's documentation
2. Review Next.js deployment guide: https://nextjs.org/docs/deployment
3. Check Error logs on your hosting platform
4. Review SETUP_GUIDE.md in project root
