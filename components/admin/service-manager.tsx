"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit3, Trash2, Save, X, Check, Wrench, Zap, Shield, Cog, Settings } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAdminTranslation } from "@/hooks/use-admin-translation"

const iconOptions = [
  { name: "Zap", icon: Zap },
  { name: "Shield", icon: Shield },
  { name: "Cog", icon: Cog },
  { name: "Settings", icon: Settings },
  { name: "Wrench", icon: Wrench },
]

export function ServiceManager() {
  const [services, setServices] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingService, setEditingService] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const { t } = useAdminTranslation()

  const languages = [
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ]

  const [newService, setNewService] = useState({
    key: "",
    icon: "Settings",
    translations: {
      pt: { title: "", description: "", details: "" },
      en: { title: "", description: "", details: "" },
      fr: { title: "", description: "", details: "" },
      it: { title: "", description: "", details: "" },
    },
  })

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      const servicesData = await mockAdminAPI.getServices()
      setServices(servicesData)
    } catch (error) {
      console.error("Error loading services:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateService = async () => {
    setIsSaving(true)
    setError("")

    try {
      await mockAdminAPI.createService(newService)
      await loadServices()
      setIsDialogOpen(false)
      setNewService({
        key: "",
        icon: "Settings",
        translations: {
          pt: { title: "", description: "", details: "" },
          en: { title: "", description: "", details: "" },
          fr: { title: "", description: "", details: "" },
          it: { title: "", description: "", details: "" },
        },
      })
      setSuccess("Serviço criado com sucesso!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (error) {
      setError("Erro ao criar serviço")
    } finally {
      setIsSaving(false)
    }
  }

  const handleUpdateService = async (service: any) => {
    setIsSaving(true)
    setError("")

    try {
      await mockAdminAPI.updateService(service.key, service)
      await loadServices()
      setEditingService(null)
      setSuccess("Serviço atualizado com sucesso!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (error) {
      setError("Erro ao atualizar serviço")
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteService = async (key: string) => {
    if (confirm("Tem certeza que deseja excluir este serviço?")) {
      try {
        await mockAdminAPI.deleteService(key)
        await loadServices()
        setSuccess("Serviço excluído com sucesso!")
        setTimeout(() => setSuccess(""), 3000)
      } catch (error) {
        setError("Erro ao excluir serviço")
      }
    }
  }

  const getTranslationProgress = (service: any) => {
    const allTranslations = Object.values(service.translations).flatMap((lang: any) => Object.values(lang))
    const completed = allTranslations.filter((text) => text && (text as string).trim() !== "").length
    return Math.round((completed / allTranslations.length) * 100)
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
          <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Serviços</h2>
          <p className="text-gray-600">Gerencie os serviços oferecidos pela empresa</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#00955e] hover:bg-[#007a4e]">
              <Plus className="h-4 w-4 mr-2" />
              Novo Serviço
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Criar Novo Serviço</DialogTitle>
              <DialogDescription>Adicione um novo serviço com traduções em todos os idiomas</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="serviceKey">Chave do Serviço</Label>
                  <Input
                    id="serviceKey"
                    value={newService.key}
                    onChange={(e) => setNewService((prev) => ({ ...prev, key: e.target.value }))}
                    placeholder="ex: newService"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceIcon">Ícone</Label>
                  <select
                    id="serviceIcon"
                    value={newService.icon}
                    onChange={(e) => setNewService((prev) => ({ ...prev, icon: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00955e]"
                  >
                    {iconOptions.map((option) => (
                      <option key={option.name} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Tabs defaultValue="pt" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {languages.map((lang) => (
                    <TabsTrigger key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {languages.map((lang) => (
                  <TabsContent key={lang.code} value={lang.code} className="space-y-4">
                    <div>
                      <Label>Título</Label>
                      <Input
                        value={newService.translations[lang.code].title}
                        onChange={(e) =>
                          setNewService((prev) => ({
                            ...prev,
                            translations: {
                              ...prev.translations,
                              [lang.code]: {
                                ...prev.translations[lang.code],
                                title: e.target.value,
                              },
                            },
                          }))
                        }
                        placeholder={`Título em ${lang.name}`}
                      />
                    </div>

                    <div>
                      <Label>Descrição</Label>
                      <Textarea
                        value={newService.translations[lang.code].description}
                        onChange={(e) =>
                          setNewService((prev) => ({
                            ...prev,
                            translations: {
                              ...prev.translations,
                              [lang.code]: {
                                ...prev.translations[lang.code],
                                description: e.target.value,
                              },
                            },
                          }))
                        }
                        placeholder={`Descrição em ${lang.name}`}
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Detalhes</Label>
                      <Textarea
                        value={newService.translations[lang.code].details}
                        onChange={(e) =>
                          setNewService((prev) => ({
                            ...prev,
                            translations: {
                              ...prev.translations,
                              [lang.code]: {
                                ...prev.translations[lang.code],
                                details: e.target.value,
                              },
                            },
                          }))
                        }
                        placeholder={`Detalhes em ${lang.name}`}
                        rows={5}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={handleCreateService}
                  disabled={isSaving || !newService.key}
                  className="bg-[#00955e] hover:bg-[#007a4e]"
                >
                  {isSaving ? "Criando..." : "Criar Serviço"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {success && (
        <Alert className="border-green-200 bg-green-50">
          <Check className="h-4 w-4" />
          <AlertDescription className="text-green-700">{success}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 gap-6">
        {services.map((service) => {
          const progress = getTranslationProgress(service)
          const IconComponent = iconOptions.find((opt) => opt.name === service.icon)?.icon || Settings
          const isEditing = editingService?.key === service.key

          return (
            <Card key={service.key} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{service.translations.pt.title || service.key}</span>
                        <Badge variant={service.isActive ? "default" : "secondary"}>
                          {service.isActive ? "Ativo" : "Inativo"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{service.translations.pt.description || "Sem descrição"}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={progress === 100 ? "default" : "secondary"}
                      className={progress === 100 ? "bg-green-100 text-green-800" : ""}
                    >
                      {progress}% traduzido
                    </Badge>
                    {!isEditing ? (
                      <>
                        <Button variant="outline" size="sm" onClick={() => setEditingService(service)}>
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteService(service.key)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          onClick={() => handleUpdateService(editingService)}
                          disabled={isSaving}
                          className="bg-[#00955e] hover:bg-[#007a4e]"
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setEditingService(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>

              {isEditing && (
                <CardContent>
                  <Tabs defaultValue="pt" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      {languages.map((lang) => (
                        <TabsTrigger key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {languages.map((lang) => (
                      <TabsContent key={lang.code} value={lang.code} className="space-y-4 mt-4">
                        <div>
                          <Label>Título</Label>
                          <Input
                            value={editingService.translations[lang.code].title}
                            onChange={(e) =>
                              setEditingService((prev: any) => ({
                                ...prev,
                                translations: {
                                  ...prev.translations,
                                  [lang.code]: {
                                    ...prev.translations[lang.code],
                                    title: e.target.value,
                                  },
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <Label>Descrição</Label>
                          <Textarea
                            value={editingService.translations[lang.code].description}
                            onChange={(e) =>
                              setEditingService((prev: any) => ({
                                ...prev,
                                translations: {
                                  ...prev.translations,
                                  [lang.code]: {
                                    ...prev.translations[lang.code],
                                    description: e.target.value,
                                  },
                                },
                              }))
                            }
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>Detalhes</Label>
                          <Textarea
                            value={editingService.translations[lang.code].details}
                            onChange={(e) =>
                              setEditingService((prev: any) => ({
                                ...prev,
                                translations: {
                                  ...prev.translations,
                                  [lang.code]: {
                                    ...prev.translations[lang.code],
                                    details: e.target.value,
                                  },
                                },
                              }))
                            }
                            rows={5}
                          />
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <Wrench className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum serviço cadastrado</h3>
          <p className="text-gray-500 mb-4">Adicione serviços para começar a gerenciar</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-[#00955e] hover:bg-[#007a4e]">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Primeiro Serviço
          </Button>
        </div>
      )}
    </div>
  )
}
