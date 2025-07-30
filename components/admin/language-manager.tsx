"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Globe, Trash2, Star, AlertTriangle } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"

export function LanguageManager() {
  const [languages, setLanguages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newLanguage, setNewLanguage] = useState({
    code: "",
    name: "",
    flag: "",
  })

  useEffect(() => {
    loadLanguages()
  }, [])

  const loadLanguages = async () => {
    try {
      const languagesData = await mockAdminAPI.getLanguages()
      setLanguages(languagesData)
    } catch (error) {
      console.error("Error loading languages:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddLanguage = async () => {
    try {
      await mockAdminAPI.addLanguage(newLanguage)
      await loadLanguages()
      setIsDialogOpen(false)
      setNewLanguage({ code: "", name: "", flag: "" })
    } catch (error) {
      console.error("Error adding language:", error)
    }
  }

  const handleRemoveLanguage = async (code: string) => {
    if (confirm("Tem certeza que deseja remover este idioma? Todas as traduções serão perdidas.")) {
      try {
        await mockAdminAPI.removeLanguage(code)
        await loadLanguages()
      } catch (error) {
        console.error("Error removing language:", error)
        alert("Erro: " + (error as Error).message)
      }
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
          <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Idiomas</h2>
          <p className="text-gray-600">Adicione ou remova idiomas disponíveis no sistema</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#00955e] hover:bg-[#007a4e]">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Idioma
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Idioma</DialogTitle>
              <DialogDescription>
                Adicione um novo idioma ao sistema. Todas as traduções existentes precisarão ser preenchidas.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label htmlFor="languageCode">Código do Idioma</Label>
                <Input
                  id="languageCode"
                  value={newLanguage.code}
                  onChange={(e) => setNewLanguage((prev) => ({ ...prev, code: e.target.value.toLowerCase() }))}
                  placeholder="ex: es, de, zh"
                  maxLength={2}
                />
              </div>

              <div>
                <Label htmlFor="languageName">Nome do Idioma</Label>
                <Input
                  id="languageName"
                  value={newLanguage.name}
                  onChange={(e) => setNewLanguage((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="ex: Español, Deutsch, 中文"
                />
              </div>

              <div>
                <Label htmlFor="languageFlag">Emoji da Bandeira</Label>
                <Input
                  id="languageFlag"
                  value={newLanguage.flag}
                  onChange={(e) => setNewLanguage((prev) => ({ ...prev, flag: e.target.value }))}
                  placeholder="ex: 🇪🇸, 🇩🇪, 🇨🇳"
                  maxLength={2}
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={handleAddLanguage}
                  disabled={!newLanguage.code || !newLanguage.name || !newLanguage.flag}
                  className="bg-[#00955e] hover:bg-[#007a4e]"
                >
                  Adicionar Idioma
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language) => (
          <Card key={language.code} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{language.flag}</div>
                  <div>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{language.name}</span>
                      {language.isDefault && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    </CardTitle>
                    <CardDescription className="text-sm">Código: {language.code.toUpperCase()}</CardDescription>
                  </div>
                </div>
                <Badge variant={language.isDefault ? "default" : "secondary"}>
                  {language.isDefault ? "Padrão" : "Adicional"}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Ativo
                  </Badge>
                </div>

                {language.isDefault ? (
                  <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Este é o idioma padrão e não pode ser removido</span>
                  </div>
                ) : (
                  <div className="flex justify-end pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveLanguage(language.code)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Remover
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {languages.length === 0 && (
        <div className="text-center py-12">
          <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum idioma configurado</h3>
          <p className="text-gray-500 mb-4">Configure os idiomas disponíveis no sistema</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-[#00955e] hover:bg-[#007a4e]">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Primeiro Idioma
          </Button>
        </div>
      )}
    </div>
  )
}
