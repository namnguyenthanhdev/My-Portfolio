"use client"

import { useRef } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

import FloatingBlob from "./floating-blob"

const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <motion.div ref={containerRef} style={{ y, opacity }} className="absolute inset-0 z-0">
      <div className="absolute inset-0 gradient-bg-hero" />
      <FloatingBlob />
    </motion.div>
  )
}

export default HeroBackground
