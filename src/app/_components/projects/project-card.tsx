"use client"

import Image from "next/image"

import { useT } from "@/i18n/use-t"
import type { Project, ProjectLink } from "@/types"
import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ProjectOverlay = ({ project }: { project: Project }) => {
  const t = useT()

  if (!project.githubUrl) return null

  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
      <Button size="sm" variant="secondary" className="rounded-full" asChild>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-1" />
          {t.projects.code}
        </a>
      </Button>
    </div>
  )
}

const ProjectTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.slice(0, 3).map((tag) => (
      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
        {tag}
      </span>
    ))}
    {tags.length > 3 && (
      <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">+{tags.length - 3}</span>
    )}
  </div>
)

const ProjectLinks = ({ links }: { links: ProjectLink[] }) => {
  if (!links.length) return null

  return (
    <div className="mt-3 pt-3 border-t border-border/50">
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full bg-primary/5 text-primary hover:bg-primary/10 border border-primary/10 transition-colors group/link"
          >
            <Globe className="h-3 w-3 opacity-60 group-hover/link:opacity-100" />
            <span className="font-medium">{link.label}</span>
            <ExternalLink className="h-3 w-3 opacity-40 group-hover/link:opacity-80" />
          </a>
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group"
  >
    <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <ProjectOverlay project={project} />
      </div>
      <div className="p-5">
        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-0 rounded-full text-xs">
          {project.category}
        </Badge>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <ProjectTags tags={project.tags} />
        <ProjectLinks links={project.urls} />
      </div>
    </div>
  </motion.div>
)

export default ProjectCard
