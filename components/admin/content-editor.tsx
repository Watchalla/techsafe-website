"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit3, Check, X, Globe, AlertCircle } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ContentEditorProps {
  content: any
  onUpdate: () => void
}

export function ContentEditor({ content, onUpdate }: ContentEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [editedContent, setEditedContent] = useState({
    key: content.key,
    description: content.description,
    translations: { ...content.translations },
  })

  const languages = [
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    setError("")

    try {
      await mockAdminAPI.updateContent(content.key, editedContent)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
      setIsEditing(false)
      onUpdate()
    } catch (error) {
      setError("Erro ao salvar. Tente novamente.")
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setEditedContent({
      key: content.key,
      description: content.description,
      translations: { ...content.translations },
    })
    setIsEditing(false)
    setError("")
  }

  const updateTranslation = (lang: string, value: string) => {
    setEditedContent((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: value,
      },
    }))
  }

  const getTranslationProgress = () => {
    const translations = Object.values(content.translations)
    const completed = translations.filter((t) => t && (t as string).trim() !== "").length
    return Math.round((completed / translations.length) * 100)
  }

  const hasChanges =
    JSON.stringify(editedContent) !==
    JSON.stringify({
      key: content.key,
      description: content.description,
      translations: content.translations,
    })

  const progress = getTranslationProgress()

  return (
    <Card
      className={`transition-all duration-300 ${isEditing ? "ring-2 ring-[#00955e] shadow-lg" : "hover:shadow-md"}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-lg font-semibold">{content.key}</CardTitle>
              <Badge
                variant={progress === 100 ? "default" : "secondary"}
                className={progress === 100 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
              >
                {progress}% traduzido
              </Badge>
              {success && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Check className="h-3 w-3 mr-1" />
                  Salvo
                </Badge>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <div>
                  <Label htmlFor="description" className="text-sm font-medium">
                    Descrição
                  </Label>
                  <Input
                    id="description"
                    value={editedContent.description}
                    onChange={(e) => setEditedContent((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Descrição do conteúdo..."
                    className="mt-1"
                  />
                </div>
              </div>
            ) : (
              <CardDescription>{content.description}</CardDescription>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {!isEditing ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="hover:bg-[#00955e] hover:text-white"
              >
                <Edit3 className="h-4 w-4 mr-1" />
                Editar
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleCancel} disabled={isSaving}>
                  <X className="h-4 w-4 mr-1" />
                  Cancelar
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  disabled={isSaving || !hasChanges}
                  className="bg-[#00955e] hover:bg-[#007a4e]"
                >
                  {isSaving ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1" />
                  ) : (
                    <Check className="h-4 w-4 mr-1" />
                  )}
                  {isSaving ? "Salvando..." : "Salvar"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {error && (
          <Alert className="border-red-200 bg-red-50 mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className="bg-[#00955e] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="pt" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {languages.map((lang) => (
              <TabsTrigger key={lang.code} value={lang.code} className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span className="hidden sm:inline">{lang.name}</span>
                <span className="sm:hidden">{lang.code.toUpperCase()}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {languages.map((lang) => (
            <TabsContent key={lang.code} value={lang.code} className="mt-4">
              <div className="space-y-2">
                <Label className="flex items-center space-x-2 text-sm font-medium">
                  <Globe className="h-4 w-4" />
                  <span>{lang.name}</span>
                </Label>

                {isEditing ? (
                  <Textarea
                    value={editedContent.translations[lang.code] || ""}
                    onChange={(e) => updateTranslation(lang.code, e.target.value)}
                    placeholder={`Texto em ${lang.name}...`}
                    className="min-h-[100px] resize-none focus:ring-[#00955e] focus:border-[#00955e]"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg border min-h-[100px]">
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {content.translations[lang.code] || (
                        <span className="text-gray-400 italic">Sem tradução disponível</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
