# Jayanth Uppara - Professional Portfolio

A modern, recruiter-friendly portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark/light mode toggle, responsive design, and an AI-powered "Ask Jay" chatbot (coming Day 4).

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Icons:** Lucide React
- **Search:** Fuse.js (for chatbot fuzzy search - Day 4)
- **Deployment:** Vercel (free tier)

## 📁 Project Structure

```
jayanth-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page with Hero section
│   ├── globals.css         # Global styles & design tokens
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.tsx        # Hero section with CTA buttons
│   │   ├── Navigation.tsx   # Top navigation with theme toggle
│   │   └── Footer.tsx       # Footer with links
│   ├── data/
│   │   ├── experience.ts    # Work experience data (Day 3)
│   │   ├── projects.ts      # Portfolio projects (Day 3)
│   │   └── askJayKnowledge.ts # Chatbot QA pairs (Day 3)
│   └── styles/
├── public/
│   ├── resume.pdf          # Placeholder for resume
│   └── images/             # Project images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Background:** `#0f172a` (Slate 950)
- **Primary:** `#3b82f6` (Blue 600)
- **Secondary:** `#a855f7` (Purple 600)
- **Accent:** `#06b6d4` (Cyan 500)
- **Text:** `#f1f5f9` (Slate 100)

### Typography
- **Font:** System font stack (SF Pro, Segoe UI, Roboto)
- **Line height:** 1.6 (default)
- **Letter spacing:** Tight for headings, normal for body

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jayanthuppara/jayanth-portfolio.git
   cd jayanth-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel

### Option 1: Via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/jayanthuppara/jayanth-portfolio.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select `jayanth-portfolio` repository
   - Accept default settings
   - Click "Deploy"

3. **Live URL:** `https://jayanth-portfolio.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📚 Component Documentation

### Hero Component
Main landing page with:
- Large typography (name, headline, tagline)
- 5 CTA buttons: View Projects, Download Resume, Ask Jay, LinkedIn, GitHub
- Gradient background with animated accent blobs
- Smooth scroll to sections
- Responsive design (mobile-first)

### Navigation Component
Fixed header with:
- Logo/name linking to home
- Responsive menu (hidden on mobile)
- Dark/light mode toggle
- Blur effect & transparency

### Footer Component
- Copyright year (auto-updated)
- Social links (LinkedIn, GitHub, Email)
- Tech stack attribution

## 🔄 Development Roadmap

### Day 1 ✅ COMPLETE
- [x] GitHub repo initialized
- [x] Next.js 14 + TypeScript + Tailwind setup
- [x] Folder structure created
- [x] Hero section built
- [x] Navigation & Footer components
- [x] Design tokens & styling
- [x] Initial commit to GitHub
- [x] Deployed to Vercel

### Day 2 (Pending)
- [ ] Recruiter Quick View (summary card)
- [ ] Sticky sidebar with contact info
- [ ] Mobile navigation improvements

### Day 3 (Pending)
- [ ] Experience section
- [ ] Projects section with filtering
- [ ] About/Skills section
- [ ] Image optimization

### Day 4 (Pending)
- [ ] Ask Jay chatbot integration
- [ ] Fuse.js fuzzy search
- [ ] Chat UI component
- [ ] Knowledge base Q&A

### Day 5 (Pending)
- [ ] Resume section/viewer
- [ ] PDF embedding
- [ ] Download tracking (optional)

## 🎯 Key Features

### ✨ Dark/Light Mode
Toggle in navigation - theme persists via localStorage (coming in Day 2)

### 📱 Mobile Responsive
Mobile-first design, tested on all breakpoints (sm, md, lg, xl, 2xl)

### ⚡ Performance
- Next.js optimizations out of the box
- Image optimization via Next.js Image
- Lazy loading for sections
- Minimal JavaScript bundle

### ♿ Accessibility
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast colors

## 🔧 Configuration Files

### `tailwind.config.ts`
Tailwind theme configuration with custom colors and spacing.

### `tsconfig.json`
Path aliases for clean imports:
- `@/components` → `src/components/`
- `@/data` → `src/data/`
- `@/styles` → `src/styles/`

### `next.config.ts`
Next.js config with optimization settings.

## 📝 Environment Variables

Create `.env.example` and `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://jayanth-portfolio.vercel.app
NEXT_PUBLIC_GITHUB_URL=https://github.com/jayanthuppara
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/jayanthuppara
```

## 🧪 Testing

Currently no automated tests. Tests will be added based on needs.

## 📄 License

MIT - Feel free to use for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but pull requests for improvements are welcome.

## 📧 Contact

- **Email:** jayanth@example.com
- **LinkedIn:** [linkedin.com/in/jayanthuppara](https://linkedin.com/in/jayanthuppara)
- **GitHub:** [github.com/jayanthuppara](https://github.com/jayanthuppara)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
