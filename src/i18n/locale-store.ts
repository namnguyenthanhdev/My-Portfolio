import { atom, computed } from "nanostores"

export const LOCALES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "yue", label: "廣東話", flag: "🇭🇰" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const

export type LocaleCode = (typeof LOCALES)[number]["code"]

export const $locale = atom<LocaleCode>("en")

export const $currentLocale = computed($locale, (code) => LOCALES.find((l) => l.code === code)!)
