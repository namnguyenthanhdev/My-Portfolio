"use client"

import { useState } from "react"
import { useContentT } from "@/i18n/use-t"
import { useT } from "@/i18n/use-t"
import type { Project } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import useProjectFilter from "@/app/_hooks/use-project-filter"

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const ct = useContentT()
  const t = useT()

  if (!project) return null

  const tags: string[] = Array.isArray(project.tags) ? project.tags : JSON.parse(project.tags || "[]")
  const urls: { label: string; url: string }[] = Array.isArray(project.urls) ? project.urls : JSON.parse(project.urls || "[]")
  const details: string[] = Array.isArray(project.details) ? project.details : JSON.parse(project.details || "[]")
  const techStack: string[] = Array.isArray(project.techStack) ? project.techStack : JSON.parse(project.techStack || "[]")

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-2xl shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 bg-card/95 backdrop-blur-sm border-b border-border/50">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 sm:p-8">
          {/* Image */}
          {project.image && (
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {(t.projects as any).techStack || "Tech Stack"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Experience Details */}
          {details.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {(t.projects as any).details || "Experience Details"}
              </h3>
              <ul className="space-y-3">
                {details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* URLs */}
          {urls.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {urls.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const ct = useContentT()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { activeCategory, setActiveCategory, filtered, categories } = useProjectFilter(projects)
  const t = useT()

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category === "All" ? t.projects.all : category}
          </Button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Card
            key={project.id}
            className="group cursor-pointer overflow-hidden border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                {project.urls && project.urls.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.urls.map((link: any, idx: number) => (
                      <a
                        key={idx}
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
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
