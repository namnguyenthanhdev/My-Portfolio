"use client"

import Image from "next/image"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const TestimonialCardItem = ({
  testimonial,
  index,
}: {
  testimonial: { name: string; role: string; text: string; image: string; email?: string }
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
  >
    <div className="h-full p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-sm text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          {testimonial.email && (
            <p className="text-xs text-muted-foreground">{testimonial.email}</p>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

const TestimonialCard = () => {
  const ct = useContentT()
  const { testimonials } = useLocalizedContent(ct)
  const t = useT()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">{t.about.testimonialsTitle}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCardItem key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialCard
