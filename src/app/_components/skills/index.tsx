"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"

const proficiencyConfig = {
  expert: { class: "bg-primary text-primary-foreground" },
  proficient: { class: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
  familiar: { class: "bg-muted text-muted-foreground" },
}

const SkillBadge = ({ name, icon }: { name: string; icon: string }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 bg-card text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all">
    <span className="text-base">{icon}</span>
    {name}
  </span>
)

const ProficiencyGroup = ({
  level,
  skills,
  index,
}: {
  level: "expert" | "proficient" | "familiar"
  skills: { name: string; icon: string }[]
  index: number
}) => {
  const t = useT()
  const config = proficiencyConfig[level]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${config.class}`}>{t.skills[level]}</span>
        <div className="h-px flex-1 bg-border/50" />
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ct = useContentT()
  const { skills } = useLocalizedContent(ct)
  const t = useT()

  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.proficiency]) acc[skill.proficiency] = []
      acc[skill.proficiency].push({ name: skill.name, icon: skill.icon })
      return acc
    },
    {} as Record<"expert" | "proficient" | "familiar", { name: string; icon: string }[]>
  )

  const order: ("expert" | "proficient" | "familiar")[] = ["expert", "proficient", "familiar"]

  return (
    <section id="skills" className="py-16 sm:py-24 relative" aria-labelledby="skills-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-secondary">{t.skills.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {order
            .filter((level) => grouped[level]?.length)
            .map((level, i) => (
              <ProficiencyGroup key={level} level={level} skills={grouped[level]} index={i} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
