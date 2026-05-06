"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"

import useProjectFilter from "@/app/_hooks/use-project-filter"

import ProjectFilters from "./project-filters"
import { ProjectGrid } from "./project-grid"
import { ProjectProductImpact } from "./project-product-impact"

const ProjectHeader = () => {
  const t = useT()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-12"
    >
      <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text-accent">{t.projects.title}</span>
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
        {t.projects.subtitle}
      </p>
    </motion.div>
  )
}

const Projects = () => {
  const ct = useContentT()
  const { projects } = useLocalizedContent(ct)
  const t = useT()
  const { activeCategory, setActiveCategory, filtered, categories } = useProjectFilter(projects)

  return (
    <section id="projects" className="py-16 sm:py-24 relative" aria-labelledby="projects-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProjectHeader />

        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          allLabel={t.projects.all}
        />

        <ProjectGrid projects={filtered} />

        <div className="mt-20 pt-16 border-t border-border/50">
          <ProjectProductImpact />
        </div>
      </div>
    </section>
  )
}

export default Projects
