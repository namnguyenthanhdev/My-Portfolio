import { computed } from "nanostores"

import { $locale } from "./locale-store"
import de from "./translations/de.json"
import en from "./translations/en.json"
import ja from "./translations/ja.json"
import ko from "./translations/ko.json"
import ms from "./translations/ms.json"
import vi from "./translations/vi.json"
import yue from "./translations/yue.json"
import zh from "./translations/zh.json"

const translations = { en, vi, ja, yue, zh, ko, ms, de }

export const $t = computed($locale, (locale) => translations[locale] ?? translations.en)
