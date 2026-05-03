"use client"

import { useMemo, useState } from "react"

import type { Project } from "@/types"

const useProjectFilter = (projects: Project[]) => {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects])

  const filtered = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory, projects]
  )

  return { activeCategory, setActiveCategory, filtered, categories }
}

export default useProjectFilter
