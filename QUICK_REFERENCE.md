# Quick Reference - Commands & Links

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npx tsc --noEmit
```

## 📤 Deployment Quick Steps

```bash
# 1. Push to GitHub (after creating repo)
git remote add origin https://github.com/jayanthuppara/jayanth-portfolio.git
git branch -M main
git push -u origin main

# 2. Deploy to Vercel (either option)
# Option A: Web dashboard at https://vercel.com/new
# Option B: Via CLI
npm i -g vercel
vercel
```

## 📁 File Locations

| Component | Path |
|-----------|------|
| Hero | `src/components/Hero.tsx` |
| Navigation | `src/components/Navigation.tsx` |
| Footer | `src/components/Footer.tsx` |
| Home Page | `app/page.tsx` |
| Layout | `app/layout.tsx` |
| Styles | `app/globals.css` |
| Colors | `app/globals.css` (CSS vars) |

## 🔗 Important Links

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Lucide Icons:** https://lucide.dev

## 🎨 Color Codes

```css
/* Primary Colors */
--primary: #3b82f6;        /* Blue 600 */
--secondary: #a855f7;      /* Purple 600 */
--accent: #06b6d4;         /* Cyan 500 */

/* Background & Text */
--background: #0f172a;     /* Slate 950 */
--foreground: #f1f5f9;     /* Slate 100 */
```

## 🔧 Environment Variables

Create `.env.local` (copy from `.env.example`):

```env
NEXT_PUBLIC_SITE_URL=https://jayanth-portfolio.vercel.app
NEXT_PUBLIC_GITHUB_URL=https://github.com/jayanthuppara
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/jayanthuppara
NEXT_PUBLIC_EMAIL=jayanth@example.com
```

## 📝 Git Workflow

```bash
# Create a new branch for a feature
git checkout -b feature/component-name

# Make changes, then commit
git add .
git commit -m "Add component-name"

# Push to GitHub
git push origin feature/component-name

# Create Pull Request on GitHub for review

# Merge to main, then deploy
```

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails with "Module not found" | Check `tsconfig.json` paths, ensure `@/*` maps to `./src/*` |
| Port 3000 in use | Change port: `npm run dev -- -p 3001` |
| Tailwind styles not applied | Restart dev server, clear `.next` folder |
| Dark mode toggle not working | Will be implemented Day 2 with localStorage |

## 📊 Project Stats

- **Total Files:** 23 (excluding node_modules)
- **Components:** 3
- **TypeScript Files:** 8
- **CSS Lines:** ~120
- **Package Size:** ~450MB (node_modules)
- **Build Time:** ~1.5 seconds
- **Bundle Size:** <100KB (optimized)

## 🎯 Daily Checklist

### Day 1 ✅ (Complete)
- [x] Project initialized
- [x] Components built
- [x] Styling applied
- [x] Documentation written
- [x] Build tested successfully

### Day 2 (TODO)
- [ ] Create GitHub repo
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Verify live URL
- [ ] Add Recruiter Quick View

## 💻 Useful Commands

```bash
# Check for TypeScript errors
npx tsc

# Format code (add later)
npx prettier --write .

# Lint (add later)
npx eslint .

# Run tests (add later)
npm test

# Clean build cache
rm -rf .next && npm run build

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## 🌐 URLs (After Deployment)

- **Live Site:** https://jayanth-portfolio.vercel.app (will be live after deploy)
- **GitHub Repo:** https://github.com/jayanthuppara/jayanth-portfolio (after push)
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Settings:** https://github.com/settings/profile

## ⚡ Performance Tips

- Images use `next/image` for optimization
- Code splitting automatic with Next.js
- Static generation by default
- CSS-in-JS (Tailwind) compiled to static CSS
- No external stylesheets loaded

## 🔐 Security

- No API keys in code (use `.env.local` and `.env.example`)
- Environment variables prefixed with `NEXT_PUBLIC_` are client-side safe
- Secrets go in `.env.local` (git-ignored)
- .gitignore properly configured

---

**Save this file for quick access during development!**

Last Updated: Day 1 Complete
