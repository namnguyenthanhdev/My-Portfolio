"use client"

import { createContext, useContext, useMemo } from "react"

import type { ApiContent } from "@/types/api"

const ContentContext = createContext<ApiContent | null>(null)

export const ContentProvider = ({ children, value }: { children: React.ReactNode; value: ApiContent }) => (
  <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
)

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) throw new Error("useContent must be used within ContentProvider")
  return context
}

export const useLocalizedContent = (ct: Record<string, unknown>) => {
  const content = useContent()

  return useMemo(() => {
    const nav = ct.nav as Record<string, string>
    const stats = ct.stats as Record<string, string>
    const projects = ct.projects as Record<string, { title?: string; description?: string; category?: string; details?: string[] }>
    const testimonials = ct.testimonials as Record<string, { name?: string; role?: string; text?: string }>
    const site = ct.site as { title: string; description: string }
    const about = ct.about as { headline: string; bio: string[] }

    const navItems = content.site.nav.map((item, i) => {
      const keys = ["about", "skills", "products", "contact"] as const
      return { ...item, title: nav[keys[i]] || item.title }
    })

    const s = content.stats.map((s, i) => {
      const keys = ["rowsVirtualized", "renderSpeed", "recordsExported", "paginated", "userStates", "manualWork"] as const
      return { ...s, label: stats[keys[i]] || s.label }
    })

    const p = content.projects.map((p) => {
      const t = projects[p.id] || {}
      return {
        ...p,
        title: t.title || p.title,
        description: t.description || p.description,
        category: t.category || p.category,
        details: t.details || p.details,
      }
    })

    const tl = content.testimonials.map((t) => {
      const tr = testimonials[String(t.id)] || {}
      return {
        ...t,
        name: tr.name || t.name,
        role: tr.role || t.role,
        text: tr.text || t.text,
      }
    })

    return {
      ...content,
      site: {
        ...content.site,
        title: site.title,
        description: site.description,
        nav: navItems,
      },
      about: content.about ? { ...content.about, headline: about.headline, bio: about.bio } : null,
      stats: s,
      projects: p,
      testimonials: tl,
    }
  }, [content, ct])
}
