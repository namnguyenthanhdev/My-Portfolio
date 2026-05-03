"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { Mail, MapPin, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ContactInfoItem {
  icon: LucideIcon
  label: string
  value: string
  href: string | null
}

const ContactInfoItemRow = ({ icon: Icon, label, value, href }: ContactInfoItem) => (
  <div className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
    <div className="w-12 h-12 rounded-xl gradient-bg-icon-solid flex items-center justify-center shrink-0">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      {href ? (
        <a href={href} className="font-medium hover:text-primary transition-colors">
          {value}
        </a>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  </div>
)

const ContactInfoCards = () => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const t = useT()

  const contactInfo: ContactInfoItem[] = [
    { icon: Mail, label: t.contact.email, value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: t.contact.phone, value: site.phone, href: `tel:${site.phone}` },
    { icon: MapPin, label: t.contact.location, value: site.location, href: null },
  ]

  return (
    <div className="space-y-6">
      {contactInfo.map((item) => (
        <ContactInfoItemRow key={item.label} {...item} />
      ))}
    </div>
  )
}

export default ContactInfoCards
