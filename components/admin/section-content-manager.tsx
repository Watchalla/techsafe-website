"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Navigation, Target, Wrench, Info, Phone, FileText, Play, BarChart3 } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"
import { ContentEditor } from "./content-editor"
import { useAdminTranslation } from "@/hooks/use-admin-translation"

const sectionConfig = {
  header: {
    title: "section.header",
    description: "section.header.desc",
    icon: Navigation,
    color: "bg-blue-500",
  },
  hero: {
    title: "section.hero",
    description: "section.hero.desc",
    icon: Target,
    color: "bg-green-500",
  },
  services: {
    title: "section.services",
    description: "section.services.desc",
    icon: Wrench,
    color: "bg-purple-500",
  },
  about: {
    title: "section.about",
    description: "section.about.desc",
    icon: Info,
    color: "bg-orange-500",
  },
  video: {
    title: "section.video",
    description: "section.video.desc",
    icon: Play,
    color: "bg-indigo-500",
  },
  stats: {
    title: "section.stats",
    description: "section.stats.desc",
    icon: BarChart3,
    color: "bg-teal-500",
  },
  contact: {
    title: "section.contact",
    description: "section.contact.desc",
    icon: Phone,
    color: "bg-red-500",
  },
  footer: {
    title: "section.footer",
    description: "section.footer.desc",
    icon: FileText,
    color: "bg-gray-500",
  },
}

export function SectionContentManager() {
  const [activeSection, setActiveSection] = useState("header")
  const [content, setContent] = useState<any[]>([])
  const [filteredContent, setFilteredContent] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useAdminTranslation()

  useEffect(() => {
    loadContent()
  }, [])

  useEffect(() => {
    filterContent()
  }, [content, activeSection, searchTerm])

  const loadContent = async () => {
    try {
      const contentData = await mockAdminAPI.getContent()
      setContent(contentData)
    } catch (error) {
      console.error("Error loading content:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterContent = () => {
    let filtered = content.filter((item) => item.section === activeSection)

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          Object.values(item.translations).some((translation: any) =>
            translation.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      )
    }

    setFilteredContent(filtered)
  }

  const getSectionStats = (section: string) => {
    const sectionContent = content.filter((item) => item.section === section)
    const totalItems = sectionContent.length
    const translatedItems = sectionContent.filter((item) =>
      Object.values(item.translations).every((translation) => translation && (translation as string).trim() !== ""),
    ).length

    return {
      total: totalItems,
      translated: translatedItems,
      percentage: totalItems > 0 ? Math.round((translatedItems / totalItems) * 100) : 0,
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-[#00955e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{t("content.title")}</h2>
          <p className="text-gray-600">{t("content.description")}</p>
        </div>
        <Button className="bg-[#00955e] hover:bg-[#007a4e]">
          <Plus className="h-4 w-4 mr-2" />
          {t("content.newContent")}
        </Button>
      </div>

      {/* Section Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(sectionConfig).map(([key, config]) => {
          const stats = getSectionStats(key)
          const Icon = config.icon

          return (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                activeSection === key ? "ring-2 ring-[#00955e] shadow-lg" : ""
              }`}
              onClick={() => setActiveSection(key)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${config.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{t(config.title)}</CardTitle>
                      <CardDescription className="text-xs">{stats.total} itens</CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant={stats.percentage === 100 ? "default" : "secondary"}
                    className={stats.percentage === 100 ? "bg-green-100 text-green-800" : ""}
                  >
                    {stats.percentage}%
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* Content Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {(() => {
                const Icon = sectionConfig[activeSection as keyof typeof sectionConfig].icon
                return <Icon className="h-6 w-6 text-[#00955e]" />
              })()}
              <div>
                <CardTitle>{t(sectionConfig[activeSection as keyof typeof sectionConfig].title)}</CardTitle>
                <CardDescription>
                  {t(sectionConfig[activeSection as keyof typeof sectionConfig].description)}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={t("content.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {filteredContent.length > 0 ? (
              filteredContent.map((item) => <ContentEditor key={item._id} content={item} onUpdate={loadContent} />)
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? t("content.noContent") : t("content.noContentSection")}
                </h3>
                <p className="text-gray-500">{searchTerm ? t("content.adjustSearch") : t("content.addContent")}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
