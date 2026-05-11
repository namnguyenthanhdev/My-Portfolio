"use client"

import { useState } from "react"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import type { Project } from "@/types"
import { ProjectDetailModal } from "./project-grid"

interface Metric {
  value: string
  label: string
  before: string
  after: string
}

interface CaseStudy {
  projectId?: string
  name: string
  goal: string
  role: string
  team: string
  problem: string
  solution: string
  result: string
  metrics: Metric[]
  techStack: string[]
  techDecision: { tech: string; reason: string }
}

interface FeaturedProject {
  caseStudy: CaseStudy
  project: Project | null
  firstWord: string
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

function matchCaseToProject(caseStudy: CaseStudy, projects: Project[]): Project | null {
  if (caseStudy.projectId) {
    return projects.find((p) => p.id === caseStudy.projectId) || null
  }
  const keyword = caseStudy.name.split(" ")[0].toLowerCase()
  return projects.find((p) => p.title.toLowerCase().includes(keyword)) || null
}

function ImpactMetric({ metric }: { metric: Metric }) {
  return (
    <div className="text-center p-5">
      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}</div>
      <div className="text-xs text-white/60 mb-3">{metric.label}</div>
      <div className="flex items-center justify-center gap-1.5 text-xs">
        <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 line-through">
          {metric.before}
        </span>
        <ArrowRight className="w-3 h-3 text-white/40" />
        <span className="px-1.5 py-0.5 rounded bg-white/20 text-white font-medium">
          {metric.after}
        </span>
      </div>
    </div>
  )
}

function parseDetails(details: unknown): { title: string; points: string[] }[] {
  const arr: string[] = Array.isArray(details) ? details : []
  const sections: { title: string; points: string[] }[] = []
  let current: { title: string; points: string[] } | null = null
  for (const item of arr) {
    if (item.endsWith(":") && !item.startsWith(" ")) {
      current = { title: item.replace(":", ""), points: [] }
      sections.push(current)
    } else if (current) {
      current.points.push(item)
    }
  }
  return sections
}

function FeaturedProjectCard({ featured, index }: { featured: FeaturedProject; index: number }) {
  const t = useT()
  const cs = featured.caseStudy
  const rawDetails = featured.project?.details
  const experienceSections = parseDetails(rawDetails)
  const projectUrls: { label: string; url: string }[] = Array.isArray(featured.project?.urls)
    ? featured.project.urls
    : []
  const productName = featured.project?.title || cs.name

  return (
    <motion.div {...fadeUp(0.1 * index)}>
      <div className="lg:grid lg:grid-cols-[1.2fr_1.8fr] lg:gap-10 lg:items-start">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-32 space-y-5">
          {featured.project?.image && (
            <div className="rounded-xl overflow-hidden border border-border/50 aspect-[16/9]">
              <img
                src={featured.project.image}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{productName}</h3>
              <p className="text-sm text-muted-foreground">
                {cs.role} &middot; {cs.team}
              </p>
              {featured.project && (
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{featured.project.description}</p>
              )}
            </div>

            <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
              {cs.goal}
            </Badge>
          </div>

          {projectUrls.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {projectUrls.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Content */}
        <div className="space-y-10 mt-6 lg:mt-0">
          {/* My Experience */}
          {experienceSections.length > 0 && (
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">{t.projects.details}</h4>
              {experienceSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h5 className="text-sm font-semibold text-foreground">{section.title}</h5>
                  <ul className="space-y-2.5">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Optimization for Product */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">{t.projects.optimizationTitle}</h4>

            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider">{t.impact.businessImpactLabel}</h5>
              <div className="gradient-bg-button rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  {cs.metrics.map((m, i) => (
                    <ImpactMetric key={i} metric={m} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-red-500 uppercase tracking-wider">{t.impact.problem}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{t.impact.solution}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-green-500 uppercase tracking-wider">{t.impact.result}</div>
              <p className="text-sm text-foreground leading-relaxed font-medium">{cs.result}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cs.techStack.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
              <div className="w-4 h-4 rounded-full bg-blue-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {t.impact.whyTech} {cs.techDecision.tech}?
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cs.techDecision.reason}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function OtherProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  const projectUrls: { label: string; url: string }[] = Array.isArray(project.urls) ? project.urls : []

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {project.image && (
          <div className="aspect-[16/9] max-h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          <h4 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          {projectUrls.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {projectUrls.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const FeaturedProjects = () => {
  const ct = useContentT()
  const { projects } = useLocalizedContent(ct)
  const t = useT()
  const cases = t.impact.caseStudies as CaseStudy[]
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const featured: FeaturedProject[] = cases.map((cs) => ({
    caseStudy: cs,
    project: matchCaseToProject(cs, projects),
    firstWord: cs.name.split(" ")[0].toLowerCase(),
  }))

  const featuredIds = featured.map((f) => f.project?.id).filter(Boolean)
  const otherProjects = projects.filter((p) => !featuredIds.includes(p.id))

  return (
    <section id="projects" className="py-24 sm:py-32 relative" aria-labelledby="projects-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-16 sm:mb-20">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.impact.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 max-w-5xl mx-auto mb-20">
          {featured.map((f, i) => (
            <FeaturedProjectCard key={f.caseStudy.name} featured={f} index={i} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div>
            <motion.div {...fadeUp(0.2)} className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t.impact.otherProjectsTitle}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.impact.otherProjectsSubtitle}</p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProjects.map((p) => (
                <OtherProjectCard
                  key={p.id}
                  project={p}
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default FeaturedProjects
