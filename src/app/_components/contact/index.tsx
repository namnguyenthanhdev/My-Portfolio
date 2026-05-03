"use client"

import { useT } from "@/i18n/use-t"
import { motion } from "framer-motion"

import ContactForm from "./contact-form"
import ContactInfoCards from "./contact-info"

const Contact = () => {
  const t = useT()

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 gradient-bg-card" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-secondary">{t.contact.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <ContactInfoCards />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
