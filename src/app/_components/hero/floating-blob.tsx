"use client"

import { motion } from "framer-motion"

import useMousePosition from "@/app/_hooks/use-mouse-position"

const blobs = [
  {
    className:
      "absolute top-20 left-10 w-72 h-72 gradient-bg-blob-1 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float",
    factor: 0.5,
  },
  {
    className:
      "absolute top-40 right-20 w-96 h-96 gradient-bg-blob-2 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delay",
    factor: -0.3,
  },
  {
    className:
      "absolute bottom-20 left-1/3 w-80 h-80 gradient-bg-blob-3 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float",
    factor: 0.4,
  },
]

const FloatingBlob = () => {
  const mousePos = useMousePosition()

  return (
    <>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          style={{ x: mousePos.x * blob.factor, y: mousePos.y * blob.factor }}
        />
      ))}
    </>
  )
}

export default FloatingBlob
