"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Globe, CheckCircle } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"

export function StatsOverview() {
  const [content, setContent] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  const [languages, setLanguages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [contentData, servicesData, languagesData] = await Promise.all([
        mockAdminAPI.getContent(),
        mockAdminAPI.getServices(),
        mockAdminAPI.getLanguages(),
      ])
      setContent(contentData)
      setServices(servicesData)
      setLanguages(languagesData)
    } catch (error) {
      console.error("Error loading stats data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getSectionStats = () => {
    const sections = ["header", "hero", "services", "about", "contact", "footer"]
    return sections.map((section) => {
      const sectionContent = content.filter((item) => item.section === section)
      const totalItems = sectionContent.length
      const translatedItems = sectionContent.filter((item) =>
        Object.values(item.translations).every((translation) => translation && (translation as string).trim() !== ""),
      ).length

      return {
        name: section,
        total: totalItems,
        translated: translatedItems,
        percentage: totalItems > 0 ? Math.round((translatedItems / totalItems) * 100) : 0,
      }
    })
  }

  const getLanguageStats = () => {
    return languages.map((lang) => {
      const totalTranslations = content.length + services.length * 3 // title, description, details
      const completedTranslations =
        content.filter((item) => item.translations[lang.code] && item.translations[lang.code].trim() !== "").length +
        services.reduce((acc, service) => {
          const serviceTranslations = service.translations[lang.code]
          if (serviceTranslations) {
            return (
              acc +
              (serviceTranslations.title ? 1 : 0) +
              (serviceTranslations.description ? 1 : 0) +
              (serviceTranslations.details ? 1 : 0)
            )
          }
          return acc
        }, 0)

      return {
        ...lang,
        total: totalTranslations,
        completed: completedTranslations,
        percentage: totalTranslations > 0 ? Math.round((completedTranslations / totalTranslations) * 100) : 0,
      }
    })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-[#00955e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const sectionStats = getSectionStats()
  const languageStats = getLanguageStats()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Section Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-[#00955e]" />
            <span>Progresso por Seção</span>
          </CardTitle>
          <CardDescription>Status de tradução de cada seção do site</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {sectionStats.map((section) => (
            <div key={section.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium capitalize">{section.name}</span>
                <span className="text-gray-500">
                  {section.translated}/{section.total} ({section.percentage}%)
                </span>
              </div>
              <Progress value={section.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Language Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-[#00955e]" />
            <span>Progresso por Idioma</span>
          </CardTitle>
          <CardDescription>Status de tradução de cada idioma</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {languageStats.map((lang) => (
            <div key={lang.code} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span>{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {lang.isDefault && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
                <span className="text-gray-500">
                  {lang.completed}/{lang.total} ({lang.percentage}%)
                </span>
              </div>
              <Progress value={lang.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
