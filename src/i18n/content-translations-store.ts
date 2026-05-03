import { computed } from "nanostores"

import { $locale } from "./locale-store"
import de from "./translations/content/de.json"
import en from "./translations/content/en.json"
import ja from "./translations/content/ja.json"
import ko from "./translations/content/ko.json"
import ms from "./translations/content/ms.json"
import vi from "./translations/content/vi.json"
import yue from "./translations/content/yue.json"
import zh from "./translations/content/zh.json"

const contentTranslations = { en, vi, ja, yue, zh, ko, ms, de }

export const $contentT = computed($locale, (locale) => contentTranslations[locale] ?? contentTranslations.en)
