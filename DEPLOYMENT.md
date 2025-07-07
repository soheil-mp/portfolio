# Portfolio Deployment Guide

## Overview
This React portfolio is configured for deployment to GitHub Pages with both manual and automated deployment options.

## 🚀 Quick Deployment (Recommended)

### Option 1: Automated Deployment with GitHub Actions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup tab-based portfolio with routing"
   git push origin master
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to `Settings` > `Pages`
   - Under "Build and deployment":
     - Source: `GitHub Actions`
   - Save your changes

3. **Your site will be live at:**
   ```
   http://soheil.codes
   ```

The GitHub Actions workflow will automatically:
- Build your React app
- Deploy to GitHub Pages
- Update on every push to master/main branch

### Option 2: Manual Deployment

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy
```

This will:
- Build your React app (`npm run build`)
- Deploy to the `gh-pages` branch
- Make your site live at the GitHub Pages URL

## 🛠️ Configuration Details

### Package.json Settings
```json
{
  "homepage": "http://soheil.codes",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Router Configuration
- Uses `HashRouter` for better GitHub Pages compatibility
- Routes are accessible via hash navigation (e.g., `/#/about`)
- Fallback 404.html handles direct URL access

### Available Routes
- `/` - Home (Hero + highlights)
- `/about` - About page
- `/skills` - Skills showcase
- `/projects` - Projects portfolio
- `/experience` - Professional timeline
- `/certifications` - Certifications
- `/contact` - Contact information

## 🔧 Troubleshooting

### Common Issues

1. **White screen after deployment:**
   - Check that `homepage` in package.json matches your GitHub Pages URL
   - Ensure all assets use relative paths

2. **Routes not working:**
   - Verify you're using `HashRouter` (not `BrowserRouter`)
   - Check that the 404.html file is in the `public` folder

3. **Build fails:**
   - Run `npm run build` locally to check for errors
   - Ensure all dependencies are listed in package.json

### Local Development
```bash
# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npx serve -s build
```

### Custom Domain (Optional)
To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Update the `homepage` in package.json to your custom domain
3. Configure DNS settings with your domain provider

## 📊 Performance Optimizations

The portfolio includes:
- Lazy loading animations
- Optimized image handling
- Smooth page transitions
- Responsive design
- Accessibility features

## 🔄 Updating Content

To update portfolio content:

1. **Projects:** Edit `src/components/Projects.js`
2. **Experience:** Edit `src/components/Experience.js`
3. **Skills:** Edit `src/components/Skills.js`
4. **About:** Edit `src/components/About.js`
5. **Contact:** Edit `src/components/Contact.js`

After making changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin master
```

The site will automatically redeploy via GitHub Actions.

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Adaptive tab navigation
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Fast loading on mobile devices

---

**Live Site:** http://soheil.codes
**Repository:** https://github.com/soheil-mp/portfolio
