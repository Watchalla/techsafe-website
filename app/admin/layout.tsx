import type React from "react"
import { AdminLanguageProvider } from "@/hooks/use-admin-language"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLanguageProvider>{children}</AdminLanguageProvider>
}
