import { $contentT } from "@/i18n/content-translations-store"
import { $locale } from "@/i18n/locale-store"
import { $t } from "@/i18n/translations-store"
import { useStore } from "@nanostores/react"

export function useT() {
  return useStore($t)
}

export function useContentT() {
  return useStore($contentT)
}

export function useLocale() {
  return useStore($locale)
}
