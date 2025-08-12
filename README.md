## AI Funnel Prototype

An AI-powered marketing funnel prototype built with Next.js, Tailwind CSS, and a rich component set. It showcases multiple funnel stages (landing, warming, conversion, actions), analytics, and UX patterns.

### Live Demo
- Production: [lead2learn-5ltk63dpr-ashirvaddubeys-projects.vercel.app](https://lead2learn-5ltk63dpr-ashirvaddubeys-projects.vercel.app)

### Tech stack
- **Framework**: Next.js 15, React 19
- **Styling**: Tailwind CSS v4, `tailwindcss-animate`, `geist`
- **UI**: Radix UI primitives, custom components in `components/ui`, `lucide-react`
- **Forms & Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Charts & Carousels**: `recharts`, `embla-carousel-react`
- **Toasts & Themes**: `sonner`, `next-themes`

### Requirements
- Node.js >= 18
- pnpm >= 10 (recommended). If pnpm isn’t installed, enable it via Corepack:

```bash
corepack enable
corepack use pnpm@latest
```

### Getting started
1) Install dependencies:

```bash
pnpm install --no-frozen-lockfile
```

2) Start the dev server:

```bash
pnpm run dev
```

App runs at `http://localhost:3000`.

### Build, start, and lint
```bash
# Production build
pnpm run build

# Start production server (after build)
pnpm start

# Lint
pnpm run lint
```

### Project scripts (from `package.json`)
```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start"
  }
}
```

### Project structure (key paths)
```
app/                 # Next.js App Router pages/layouts
components/          # Feature and page-level components
  ui/                # Reusable UI primitives (Radix bindings, etc.)
hooks/               # Custom React hooks
lib/                 # Utilities
public/              # Static assets
styles/              # Global styles
```

### Notable pages/components
- `components/landing-page.tsx`
- `components/lead-warming-page.tsx`
- `components/conversion-page.tsx`
- `components/action-page.tsx`
- `components/tools-analytics.tsx`
- `components/funnel-overview.tsx`
- `components/improvement-plan.tsx`
- `components/copywriting-examples.tsx`
- `components/login-page.tsx`
- `components/prototype-demo.tsx`

### Troubleshooting
- "Outdated lockfile" with pnpm: use `pnpm install --no-frozen-lockfile`.
- Peer dependency warnings (e.g., `vaul` with React 19): generally safe to ignore for local dev; update packages if needed.
- Port already in use: stop the running process or set a new port: `PORT=3001 pnpm run dev` (set env accordingly on Windows PowerShell: `$env:PORT=3001; pnpm run dev`).

### License
No license specified. Add one if you intend to distribute.

