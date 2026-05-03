"use client"

import { useT } from "@/i18n/use-t"
import { motion } from "framer-motion"

import AboutImage from "./about-image"
import AboutInfo from "./about-info"
import TestimonialCard from "./testimonial-card"

const About = () => {
  const t = useT()

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 gradient-bg-card" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-accent">{t.about.title}</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <AboutImage />
            <AboutInfo />
          </div>

          <TestimonialCard />
        </div>
      </div>
    </section>
  )
}

export default About
