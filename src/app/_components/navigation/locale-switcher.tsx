"use client"

import { useEffect } from "react"

import { $currentLocale, $locale, LOCALES, type LocaleCode } from "@/i18n/locale-store"
import { useStore } from "@nanostores/react"
import { ChevronDown } from "lucide-react"

const LocaleSwitcher = () => {
  const current = useStore($currentLocale)
  const locale = useStore($locale)

  useEffect(() => {
    const saved = localStorage.getItem("locale") as LocaleCode | null
    if (saved && LOCALES.some((l) => l.code === saved)) {
      $locale.set(saved)
    }
  }, [])

  const handleSelect = (code: LocaleCode) => {
    $locale.set(code)
    localStorage.setItem("locale", code)
    document.documentElement.lang = code
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>

      <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border bg-popover shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="p-1.5 space-y-0.5">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                locale === l.code ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LocaleSwitcher
