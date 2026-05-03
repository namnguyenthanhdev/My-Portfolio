"use client"

import { useRef } from "react"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import HeroBackground from "./hero-background"
import SocialLinks from "./social-links"

const ScrollIndicator = () => {
  const t = useT()

  return (
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      aria-label="Scroll to about section"
    >
      <span className="text-xs">{t.hero.scroll}</span>
      <ArrowDown className="h-5 w-5 animate-bounce" />
    </motion.a>
  )
}

const Hero = () => {
  const ct = useContentT()
  const { site, about } = useLocalizedContent(ct)
  const t = useT()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
      style={{ perspective: "1000px" }}
    >
      <HeroBackground />

      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20" style={{ opacity }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <Badge className="px-3 py-1 gradient-bg-badge border-0 text-primary">
                <Code2 className="h-3 w-3 mr-1" />
                {about?.headline}
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                {t.hero.experience}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block text-foreground">{site.name}</span>
              <span className="block gradient-text-primary">{site.title}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {site.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              size="lg"
              className="rounded-full gradient-bg-button hover:opacity-90 shadow-lg shadow-blue-500/25"
              asChild
            >
              <a href="#projects">{t.hero.viewProducts}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </motion.div>

          <SocialLinks />
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero
