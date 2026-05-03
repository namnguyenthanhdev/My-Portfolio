"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"

import AnimatedCounter from "./animated-counter"

const SectionHeader = () => {
  const t = useT()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text-primary">{t.stats.title}</span>
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.stats.subtitle}</p>
    </motion.div>
  )
}

const StatCard = ({
  stat,
  index,
}: {
  stat: { label: string; value: number; suffix: string; icon: string; color: string }
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="relative p-4 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden group hover:shadow-xl transition-all">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      <span className="text-2xl sm:text-3xl mb-2 block" aria-hidden="true">
        {stat.icon}
      </span>
      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
    </div>
  </motion.div>
)

const Stats = () => {
  const ct = useContentT()
  const { stats } = useLocalizedContent(ct)

  return (
    <section id="stats" className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="stats-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
