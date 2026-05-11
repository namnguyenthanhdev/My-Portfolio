"use client"

import { useEffect, useState } from "react"

const useScroll = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(window.scrollY > threshold)
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}

export default useScroll
