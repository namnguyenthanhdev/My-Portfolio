import { db } from "@/db"
import * as schema from "@/db/schema"
import { asc } from "drizzle-orm"

export async function getSiteConfig() {
  const result = db.select().from(schema.siteConfig).limit(1).all()
  return result[0] || null
}

export async function getNavItems() {
  return db.select().from(schema.navItems).orderBy(asc(schema.navItems.order)).all()
}

export async function getAbout() {
  const result = db.select().from(schema.about).limit(1).all()
  return result[0] || null
}

export async function getStats() {
  return db.select().from(schema.stats).orderBy(asc(schema.stats.order)).all()
}

export async function getChartData() {
  return db.select().from(schema.chartData).orderBy(asc(schema.chartData.year)).all()
}

export async function getSkills() {
  return db.select().from(schema.skills).orderBy(asc(schema.skills.order)).all()
}

export async function getProjects() {
  return db.select().from(schema.projects).orderBy(asc(schema.projects.order)).all()
}

export async function getGallery() {
  return db.select().from(schema.gallery).orderBy(asc(schema.gallery.order)).all()
}

export async function getTestimonials() {
  return db.select().from(schema.testimonials).orderBy(asc(schema.testimonials.order)).all()
}

export async function getAllContent() {
  const [siteConfig, navItems, about, stats, chartData, skills, projects, gallery, testimonials] = await Promise.all([
    getSiteConfig(),
    getNavItems(),
    getAbout(),
    getStats(),
    getChartData(),
    getSkills(),
    getProjects(),
    getGallery(),
    getTestimonials(),
  ])

  return {
    site: { ...siteConfig, nav: navItems },
    about: about ? { ...about, bio: JSON.parse(about.bio) } : null,
    stats: stats.map((s) => ({ ...s, value: Number(s.value) })),
    chartData,
    skills,
    projects: projects.map((p) => ({
      ...p,
      tags: JSON.parse(p.tags),
      urls: JSON.parse(p.urls),
      details: p.details ? JSON.parse(p.details) : [],
      techStack: p.techStack ? JSON.parse(p.techStack) : [],
    })),
    gallery,
    testimonials,
  }
}
