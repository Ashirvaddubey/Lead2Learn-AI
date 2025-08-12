## AI Funnel Prototype

An AI-powered marketing funnel prototype built with Next.js, Tailwind CSS, and a rich component set. It showcases multiple funnel stages (landing, warming, conversion, actions), analytics, and UX patterns.

### Live Demo
- Production: [lead2learn-5ltk63dpr-ashirvaddubeys-projects.vercel.app](https://lead2learn-5ltk63dpr-ashirvaddubeys-projects.vercel.app)

### Tech Stack
- **Framework**: Next.js 15, React 19
- **Styling**: Tailwind CSS v4, `tailwindcss-animate`, `geist`
- **UI**: Radix UI primitives, custom components in `components/ui`, `lucide-react`
- **Forms & Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Charts & Carousels**: `recharts`, `embla-carousel-react`
- **Toasts & Themes**: `sonner`, `next-themes`
- **AI Integration**: OpenRouter API with Claude 3.5 Sonnet for personalized recommendations

### Quick Start
```bash
# Install dependencies
pnpm install --no-frozen-lockfile

# Start dev server
pnpm run dev
```

### Key Features
- **AI-Powered Recommendations**: OpenRouter API integration for personalized career guidance
- **Multi-Stage Funnel**: Landing, warming, conversion, and action pages
- **Interactive Quiz System**: Lead qualification with AI-driven insights
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Project Structure
```
app/                 # Next.js App Router
components/          # Page components and UI primitives
hooks/               # Custom React hooks
lib/                 # Utilities
```

### Deployment
- **Vercel**: Auto-deploys from GitHub main branch
- **Build Command**: `pnpm run build`
- **Install Command**: `pnpm install --no-frozen-lockfile`

### License
No license specified. Add one if you intend to distribute.

