"use client"

import Image from "next/image"

import { useContent } from "@/context/content-context"
import { motion } from "framer-motion"

const AboutImage = () => {
  const { about, site } = useContent()

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative aspect-[3/4] max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
        <Image src={about.image} alt={site.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-bg-deco-1 rounded-2xl -z-10 animate-float" />
      <div className="absolute -top-4 -left-4 w-16 h-16 gradient-bg-deco-2 rounded-xl -z-10 animate-float-delay" />
    </motion.div>
  )
}

export default AboutImage
