import type { NavItem, Project, Skill, Stat } from "@/types"

export interface ApiSiteConfig {
  id: number
  name: string
  title: string
  description: string
  url: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  twitter: string
  nav: NavItem[]
}

export interface ApiAbout {
  id: number
  headline: string
  bio: string[]
  image: string
  education?: string
}

export interface ApiChartRow {
  id: number
  year: string
  projects: number
  clients: number
  articles: number
}

export interface ApiGallery {
  id: number
  src: string
  order: number
}

export interface ApiTestimonial {
  id: number
  name: string
  role: string
  text: string
  image: string
  order: number
}

export interface ApiContent {
  site: ApiSiteConfig
  about: ApiAbout
  stats: Stat[]
  chartData: ApiChartRow[]
  skills: Skill[]
  projects: Project[]
  gallery: ApiGallery[]
  testimonials: ApiTestimonial[]
}
