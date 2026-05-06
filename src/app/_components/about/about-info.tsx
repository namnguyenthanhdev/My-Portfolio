"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const ContactRow = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon
  label: string
  value: string
  href: string | null
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full gradient-bg-icon flex items-center justify-center shrink-0">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    {href ? (
      <a
        href={href}
        className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
      >
        {value}
      </a>
    ) : (
      <span className="text-sm">{label}</span>
    )}
  </div>
)

const AboutInfo = () => {
  const ct = useContentT()
  const { about, site } = useLocalizedContent(ct)
  const t = useT()

  const contactItems = [
    { icon: Mail, label: t.about.email, value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: t.about.phone, value: site.phone, href: `tel:${site.phone}` },
    { icon: MapPin, label: t.about.location, value: site.location, href: null },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        {about?.bio?.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {about?.education && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Education</h3>
          <div className="space-y-4 text-muted-foreground">
            {(() => {
              try {
                const edu = JSON.parse(about.education)
                return (
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <p className="font-medium text-foreground">{edu.school || edu.university}</p>
                    <p className="text-sm">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.gpa && `GPA: ${edu.gpa}`}</p>
                    {edu.scholarship && (
                      <p className="text-xs text-green-600 mt-1">{edu.scholarship}</p>
                    )}
                    {edu.highSchool && (
                      <p className="text-xs text-muted-foreground mt-2">High School: {edu.highSchool}</p>
                    )}
                  </div>
                )
              } catch {
                return null
              }
            })()}
          </div>
        </div>
      )}

      <div className="space-y-4 mb-8">
        {contactItems.map((item) => (
          <ContactRow key={item.label} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default AboutInfo
