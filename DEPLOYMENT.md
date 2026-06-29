# PhotoForge Deployment Guide

This document explains how to deploy PhotoForge to GitHub Pages and Vercel.

## 🚀 Automatic Deployments (GitHub Actions)

Both deployment options are now set up with GitHub Actions for automatic deployment on every push to `main`.

### GitHub Pages
- **Workflow:** `.github/workflows/deploy-gh-pages.yml`
- **Trigger:** Push to `main` branch
- **URL:** `https://xnon2135-hash.github.io/App/`
- **Status:** Go to Actions tab to see deployment status

### Vercel
- **Workflow:** `.github/workflows/deploy-vercel.yml`
- **Trigger:** Push to `main` branch
- **URL:** Will be provided by Vercel
- **Setup required:** See section below

---

## 📦 GitHub Pages Setup

### ✅ Already Configured
- Base path is set to `/App/`
- GitHub Actions workflow is ready
- `gh-pages` dependency added to `package.json`

### Manual Deployment (optional)
```bash
npm install
npm run deploy:gh
```

This builds and deploys to the `gh-pages` branch manually.

### Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Set **Source** to **Deploy from a branch**
3. Select **gh-pages** branch
4. Your app will be live at: `https://xnon2135-hash.github.io/App/`

---

## ✨ Vercel Setup

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up/login with GitHub

### 2. Import Your Repository
- Click **New Project**
- Select your GitHub organization/account
- Search for **App** repository
- Click **Import**

### 3. Configure Build Settings
- **Framework Preset:** Other → Vite
- **Build Command:** `npm run build` (or leave blank)
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 4. Environment Variables (Optional)
- No environment variables needed for this project

### 5. Deploy
- Click **Deploy**
- Vercel will build and deploy automatically
- You'll get a live URL

### Automatic Deployments (via GitHub Actions)
To enable automatic deployments:

1. Get your Vercel tokens:
   ```bash
   # Go to https://vercel.com/account/tokens
   ```

2. Add GitHub Secrets to your repository:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add these secrets:
     - `VERCEL_TOKEN` - Your Vercel token
     - `VERCEL_ORG_ID` - Your Vercel org ID
     - `VERCEL_PROJECT_ID` - Your Vercel project ID

3. Push to `main` and the workflow will deploy automatically

---

## 🔍 Check Deployment Status

### GitHub Pages
1. Go to your repository
2. Click **Actions**
3. Look for **Deploy to GitHub Pages** workflow
4. Check the latest run status

### Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. View deployment history and logs

---

## 📝 Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🆘 Troubleshooting

### GitHub Pages not updating
- Check the Actions tab for workflow errors
- Ensure `gh-pages` branch exists
- Verify Settings → Pages shows correct source

### Vercel deployment failing
- Check build logs in Vercel dashboard
- Ensure `package.json` and build files are committed
- Try redeploying from Vercel dashboard

### App not loading correctly
- If using GitHub Pages, app must be accessed at `/App/` path
- Clear browser cache
- Check browser console for errors

---

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
