"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AdminLanguageContextType {
  currentLanguage: string
  setLanguage: (language: string) => void
}

const AdminLanguageContext = createContext<AdminLanguageContextType | undefined>(undefined)

export function AdminLanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("admin-language")
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (language: string) => {
    setCurrentLanguage(language)
    localStorage.setItem("admin-language", language)
  }

  return (
    <AdminLanguageContext.Provider value={{ currentLanguage, setLanguage }}>{children}</AdminLanguageContext.Provider>
  )
}

export function useAdminLanguage() {
  const context = useContext(AdminLanguageContext)
  if (context === undefined) {
    throw new Error("useAdminLanguage must be used within an AdminLanguageProvider")
  }
  return context
}
