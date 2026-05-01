# Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `jayanth-portfolio`
3. Make it **Public** (for portfolio visibility)
4. Do NOT initialize with README, .gitignore, or license (we have these already)
5. Click "Create repository"

## Step 2: Push to GitHub

Run these commands in the project directory:

```bash
# Add your GitHub repo as origin
git remote add origin https://github.com/jayanthuppara/jayanth-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel Web Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com/new)
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Select "jayanth-portfolio" repository
5. Click "Import"
6. In "Project Settings":
   - Framework: Next.js ✓ (auto-detected)
   - Root Directory: ./
7. Click "Deploy"
8. Wait for build to complete (~2-3 minutes)

### Option B: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **jayanth-portfolio**
   - Which directory? **.//**
   - Want to override settings? **No**

## Step 4: Verify Deployment

After deployment completes, you'll see:
```
✓ Deployed to https://jayanth-portfolio.vercel.app
```

Visit this URL to verify the site is live!

## Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., jayanth.dev)
4. Update DNS settings with Vercel's nameservers

## Troubleshooting

### Build fails with "Module not found"
- Ensure `tsconfig.json` has correct path mapping: `"@/*": ["./src/*"]`
- Clear `.next` folder: `rm -rf .next && npm run build`

### Changes not reflecting after push
- Vercel should auto-deploy on every push to `main`
- Check "Deployments" tab in Vercel dashboard for build logs

### Dark mode not persisting
- This will be implemented in Day 2
- Currently defaults to dark theme

## Next Steps

After deployment:

1. **Day 2:** Add Recruiter Quick View and mobile navigation
2. **Day 3:** Add Experience, Projects, and Skills sections
3. **Day 4:** Integrate Ask Jay chatbot with Fuse.js
4. **Day 5:** Add Resume viewer and download

---

**Live URL:** `https://jayanth-portfolio.vercel.app`

**GitHub:** `https://github.com/jayanthuppara/jayanth-portfolio`
