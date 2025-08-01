"use client"

import { useAdminLanguage } from "./use-admin-language"
import { adminTranslations } from "@/lib/mock-data"

export function useAdminTranslation() {
  const { currentLanguage } = useAdminLanguage()

  const t = (key: string): string => {
    const translations = adminTranslations[currentLanguage as keyof typeof adminTranslations]
    return translations?.[key as keyof typeof translations] || key
  }

  return { t, currentLanguage }
}
