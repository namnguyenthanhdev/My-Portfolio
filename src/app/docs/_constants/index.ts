
export const techStack = [
  {
    category: "Framework",
    items: [{ name: "Next.js 15", version: "15.3.3", description: "App Router, React Server Components, API routes" }],
  },
  {
    category: "Language",
    items: [{ name: "TypeScript", version: "5.x", description: "Type-safe development with strict mode" }],
  },
  {
    category: "Styling",
    items: [
      { name: "TailwindCSS v4", version: "4.x", description: "Utility-first CSS with @theme and @utility directives" },
      { name: "shadcn/ui", version: "latest", description: "Accessible UI components built on Radix UI" },
      { name: "tw-animate-css", version: "latest", description: "Animation utilities for Tailwind" },
      { name: "clsx + tailwind-merge", version: "latest", description: "Conditional class merging utility" },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "Drizzle ORM", version: "latest", description: "Type-safe ORM with SQLite dialect" },
      { name: "better-sqlite3", version: "latest", description: "Synchronous SQLite3 bindings for Node.js" },
      { name: "drizzle-kit", version: "latest", description: "Database schema management and migrations" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "nanostores", version: "latest", description: "Atomic state management with React bindings" },
      { name: "@nanostores/react", version: "latest", description: "React integration for nanostores" },
    ],
  },
  {
    category: "Animation",
    items: [
      { name: "framer-motion", version: "latest", description: "Scroll-triggered, parallax, and layout animations" },
    ],
  },
  {
    category: "Charts",
    items: [{ name: "Recharts", version: "latest", description: "Composable charting library for area/line charts" }],
  },
  {
    category: "Icons",
    items: [{ name: "lucide-react", version: "latest", description: "Consistent icon library" }],
  },
  {
    category: "Tooling",
    items: [
      { name: "ESLint", version: "9.x", description: "Linting with Next.js + TypeScript rules" },
      { name: "Prettier", version: "3.x", description: "Code formatting with import sorting" },
      { name: "eslint-plugin-prettier", version: "latest", description: "Runs Prettier as an ESLint rule" },
      {
        name: "@trivago/prettier-plugin-sort-imports",
        version: "latest",
        description: "Auto-sorts imports by pattern",
      },
    ],
  },
]

export const features = [
  {
    category: "Core Features",
    items: [
      "Single-page portfolio layout with smooth scroll navigation",
      "Responsive design (mobile-first) with hamburger menu",
      "Dark/Light theme toggle with system preference detection",
      "Theme persistence via localStorage",
      "SEO-optimized metadata with OpenGraph and Twitter cards (fetched from DB)",
      "Static site generation for optimal performance",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "SQLite database for local data storage (src/db/portfolio.db)",
      "Drizzle ORM for type-safe database queries",
      "9 tables: site_config, nav_items, about, stats, chart_data, skills, projects, gallery, testimonials",
      "REST API at GET /api/content - returns all portfolio content as JSON",
      "Server-side data fetching in page.tsx via getAllContent()",
      "Seed script (npm run db:seed) with delete-before-insert to prevent duplicates",
      "DB management scripts: db:push, db:seed, db:reset",
    ],
  },
  {
    category: "Sections",
    items: [
      "Hero - Colorful gradient background with mouse-follow parallax, CTA buttons",
      "About - Split layout with image, bio, contact info, and testimonials",
      "Stats - Animated counters with growth chart (Recharts)",
      "Skills - Animated progress bars with coding gallery images",
      "Projects - Filterable card grid with category tabs and hover overlays",
      "Contact - Split layout with info cards and styled form",
      "Footer - Social links with navigation",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Feature components nested inside app/_components/ (using _components convention)",
      "Page-level hooks in app/_hooks/ (shared across the page)",
      "ContentProvider React Context for passing DB data to all client components",
      "All components consume data via useContent() - zero hardcoded data",
      "Server Component (page.tsx) fetches from DB, wraps children in ContentProvider",
      "Shared UI primitives in components/ui/ (shadcn)",
      "Shared hooks in hooks/ (use-store for nanostores)",
      "Shared lib logic in lib/ (stores, utils)",
      "TypeScript interfaces for all data models (types/api.ts, types/index.ts)",
      "Image optimization with Next.js Image component",
    ],
  },
  {
    category: "Code Quality",
    items: [
      "ESLint with Next.js core-web-vitals + TypeScript strict rules",
      "Prettier formatting (no semicolons, 120 char width, double quotes, 2-space indent)",
      "Automatic import sorting via @trivago plugin",
      "Scripts: npm run lint, lint:fix, format, format:check",
    ],
  },
  {
    category: "Performance",
    items: [
      "Static generation (SSG) - all pages pre-rendered at build time",
      "First Load JS: ~281 kB",
      "Font optimization with next/font (self-hosted Geist)",
      "Image optimization with automatic WebP/AVIF conversion",
      "Code splitting and tree-shaking",
    ],
  },
]