import type { Project } from "@/types"

import ProjectCard from "./project-card"

interface ProjectGridProps {
  projects: Project[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {projects.map((project, i) => (
      <ProjectCard key={project.id} project={project} index={i} />
    ))}
  </div>
)

export default ProjectGrid
