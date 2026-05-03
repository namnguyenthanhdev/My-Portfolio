import { atom } from "nanostores"

type Theme = "light" | "dark" | "system"

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  const stored = localStorage.getItem("theme") as Theme | null
  if (stored === "light" || stored === "dark") return stored
  if (stored === "system") return getSystemTheme()
  return getSystemTheme()
}

export const theme = atom<"light" | "dark">(getInitialTheme())

export function toggleTheme() {
  const next = theme.get() === "light" ? "dark" : "light"
  theme.set(next)
}

export function setTheme(newTheme: Theme) {
  if (newTheme === "system") {
    theme.set(getSystemTheme())
    localStorage.setItem("theme", "system")
  } else {
    theme.set(newTheme)
    localStorage.setItem("theme", newTheme)
  }
}
