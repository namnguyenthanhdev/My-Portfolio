import content from "@/data/content"

export async function getSiteConfig() {
  return content.site
}

export async function getNavItems() {
  return content.site.nav
}

export async function getAbout() {
  const { id, headline, bio, image } = content.about
  return { id, headline, bio, image, education: undefined }
}

export async function getStats() {
  return content.stats.map((s) => ({ ...s, value: String(s.value) }))
}

export async function getChartData() {
  return content.chartData
}

export async function getSkills() {
  return content.skills
}

export async function getProjects() {
  return content.projects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    tags: JSON.stringify(p.tags),
    githubUrl: p.githubUrl || null,
    urls: JSON.stringify(p.urls),
    category: p.category,
    order: parseInt(p.id),
    details: p.details ? JSON.stringify(p.details) : null,
    techStack: p.techStack ? JSON.stringify(p.techStack) : null,
  }))
}

export async function getGallery() {
  return content.gallery
}

export async function getTestimonials() {
  return content.testimonials.map((t) => ({
    id: t.id,
    name: t.name,
    role: t.role,
    text: t.text,
    image: t.image,
    email: "",
    order: t.order,
  }))
}

export async function getAllContent() {
  return content
}
