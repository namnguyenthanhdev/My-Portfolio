"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const SocialLinks = () => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const t = useT()

  const socialLinks = [
    { href: site.github, label: "GitHub", icon: Github, external: true },
    { href: site.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: `mailto:${site.email}`, label: "Email", icon: Mail, external: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-center gap-4"
    >
      <span className="text-sm text-muted-foreground">{t.common.findMeOn}</span>
      <div className="flex gap-3">
        {socialLinks.map(({ href, label, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={label}
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default SocialLinks
