import type { Metadata } from "next"
import Link from "next/link"

import { ArrowLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { features, techStack } from "./_constants"

export const metadata: Metadata = {
  title: "Project Documentation",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Project Documentation</h1>
          <p className="text-muted-foreground">Internal documentation for features and technology stack</p>
        </div>

        <section aria-labelledby="tech-stack-heading" className="mb-12">
          <h2 id="tech-stack-heading" className="text-2xl font-semibold mb-6">
            Technology Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((group) => (
              <div key={group.category} className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {item.version}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section aria-labelledby="features-heading" className="mb-12">
          <h2 id="features-heading" className="text-2xl font-semibold mb-6">
            Features
          </h2>
          <div className="grid gap-4">
            {features.map((group) => (
              <div key={group.category} className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-semibold mb-3 text-muted-foreground">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section aria-labelledby="structure-heading">
          <h2 id="structure-heading" className="text-2xl font-semibold mb-6">
            Project Structure
          </h2>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <pre className="text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre">
              {`src/
├── app/
│   ├── _components/            # Feature components (page-scoped)
│   │   ├── navigation/         #   Navbar, Footer, MobileNav
│   │   ├── hero/               #   Hero, HeroBackground, FloatingBlob, SocialLinks
│   │   ├── about/              #   About, AboutImage, AboutInfo, TestimonialCard
│   │   ├── stats/              #   Stats, AnimatedCounter, GrowthChart
│   │   ├── skills/             #   Skills, SkillBar, GalleryGrid
│   │   ├── projects/           #   Projects, ProjectFilters, ProjectGrid, ProjectCard
│   │   └── contact/            #   Contact, ContactInfoCards, ContactForm
│   ├── _hooks/                 # Page-scoped hooks
│   │   ├── use-scroll.ts
│   │   ├── use-mouse-position.ts
│   │   ├── use-animated-counter.ts
│   │   ├── use-project-filter.ts
│   │   └── use-form-submission.ts
│   ├── api/
│   │   └── content/
│   │       └── route.ts        # GET /api/content - returns all content from DB
│   ├── layout.tsx              # Root layout + generateMetadata (from DB)
│   ├── page.tsx                # Homepage (fetches from DB, provides ContentProvider)
│   ├── not-found.tsx           # 404 page
│   ├── error.tsx               # Error boundary
│   ├── docs/
│   │   └── page.tsx            # Hidden documentation page
│   └── globals.css             # Tailwind + theme variables + animations + @utility gradients
├── components/
│   └── ui/                     # Shared shadcn/ui primitives
├── context/
│   └── content-context.tsx     # React Context for DB content
├── db/
│   ├── schema.ts               # Drizzle ORM table definitions (9 tables)
│   ├── index.ts                # DB connection (better-sqlite3 + drizzle)
│   ├── queries.ts              # All database query functions
│   └── seed.ts                 # Seed script (clears then inserts data)
├── hooks/
│   └── use-store.ts            # Shared nanostores React hook
├── lib/
│   ├── stores/                 # nanostores (theme, navigation)
│   └── utils.ts                # cn() utility
└── types/
    ├── index.ts                # TypeScript interfaces (Project, Skill, Stat, etc.)
    └── api.ts                  # API response types (ApiContent, ApiAbout, etc.)`}
            </pre>
          </div>
        </section>

        <Separator className="my-12" />

        <section aria-labelledby="commands-heading">
          <h2 id="commands-heading" className="text-2xl font-semibold mb-6">
            Available Commands
          </h2>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="space-y-3">
              {[
                { cmd: "npm run dev", desc: "Start development server with Turbopack" },
                { cmd: "npm run build", desc: "Production build (lints, type-checks, generates static pages)" },
                { cmd: "npm run start", desc: "Start production server" },
                { cmd: "npm run lint", desc: "Run ESLint" },
                { cmd: "npm run lint:fix", desc: "Auto-fix ESLint issues" },
                { cmd: "npm run format", desc: "Format all files with Prettier" },
                { cmd: "npm run format:check", desc: "Check formatting without changing files" },
                { cmd: "npm run db:push", desc: "Push Drizzle schema to SQLite database" },
                { cmd: "npm run db:seed", desc: "Seed database with portfolio content" },
                { cmd: "npm run db:reset", desc: "Drop database, push schema, and seed" },
              ].map(({ cmd, desc }) => (
                <div key={cmd} className="flex flex-wrap items-start gap-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded shrink-0">{cmd}</code>
                  <span className="text-sm text-muted-foreground">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
