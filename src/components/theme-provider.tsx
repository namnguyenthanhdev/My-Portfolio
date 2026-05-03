"use client"

import { useEffect } from "react"

import { useStore } from "@/hooks/use-store"

import { theme } from "@/lib/stores"

export function ThemeProvider() {
  const currentTheme = useStore(theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(currentTheme)
  }, [currentTheme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      const stored = localStorage.getItem("theme")
      if (stored === "system") {
        theme.set(mediaQuery.matches ? "dark" : "light")
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return null
}
