"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, CheckCircle } from "lucide-react"

interface SectionManagerProps {
  sections: string[]
  content: any[]
  onUpdate: () => void
}

export function SectionManager({ sections, content }: SectionManagerProps) {
  const getSectionData = (section: string) => {
    const sectionContent = content.filter((item) => item.section === section)
    const totalItems = sectionContent.length
    const completedItems = sectionContent.filter((item) =>
      Object.values(item.translations).every((translation) => translation && (translation as string).trim().length > 0),
    ).length

    const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

    return {
      totalItems,
      completedItems,
      progress,
      content: sectionContent,
    }
  }

  const getSectionIcon = (section: string) => {
    const icons = {
      navigation: "🧭",
      hero: "🎯",
      services: "⚙️",
      about: "ℹ️",
      contact: "📞",
      footer: "📄",
    }
    return icons[section as keyof typeof icons] || "📋"
  }

  const getSectionTitle = (section: string) => {
    const titles = {
      navigation: "Navegação",
      hero: "Seção Principal",
      services: "Serviços",
      about: "Sobre Nós",
      contact: "Contato",
      footer: "Rodapé",
    }
    return titles[section as keyof typeof titles] || section.charAt(0).toUpperCase() + section.slice(1)
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500"
    if (progress >= 75) return "bg-blue-500"
    if (progress >= 50) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciador de Seções</h2>
          <p className="text-gray-600">Visualize e gerencie o conteúdo por seção do site</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const sectionData = getSectionData(section)
          return (
            <Card key={section} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{getSectionIcon(section)}</div>
                    <div>
                      <CardTitle className="text-lg">{getSectionTitle(section)}</CardTitle>
                      <CardDescription className="text-sm">
                        {sectionData.totalItems} {sectionData.totalItems === 1 ? "item" : "itens"}
                      </CardDescription>
                    </div>
                  </div>
                  {sectionData.progress === 100 && <CheckCircle className="h-5 w-5 text-green-500" />}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progresso de Tradução</span>
                    <span className="font-medium">{Math.round(sectionData.progress)}%</span>
                  </div>
                  <Progress value={sectionData.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Total:</span>
                    <Badge variant="outline">{sectionData.totalItems}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600">Completos:</span>
                    <Badge variant="outline">{sectionData.completedItems}</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Conteúdos:</h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {sectionData.content.map((item) => (
                      <div key={item._id} className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded">
                        <span className="font-medium">{item.key}</span>
                        <div className="flex gap-1">
                          {Object.keys(item.translations).map((lang) => (
                            <div
                              key={lang}
                              className={`w-2 h-2 rounded-full ${
                                item.translations[lang] && item.translations[lang].trim().length > 0
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                              title={`${lang.toUpperCase()}: ${
                                item.translations[lang] && item.translations[lang].trim().length > 0
                                  ? "Traduzido"
                                  : "Pendente"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
