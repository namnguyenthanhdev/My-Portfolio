export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string | null
  urls: ProjectLink[]
  category: string
}

export interface Skill {
  name: string
  icon: string
  proficiency: "expert" | "proficient" | "familiar"
}

export interface Stat {
  label: string
  value: number
  suffix: string
  icon: string
  color: string
}

export interface NavItem {
  title: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
