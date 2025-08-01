"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Clock, Save, Check, AlertCircle } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAdminTranslation } from "@/hooks/use-admin-translation"

export function ContactDataManager() {
  const [contactData, setContactData] = useState<any>({})
  const [editedData, setEditedData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const { t } = useAdminTranslation()

  const languages = [
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ]

  useEffect(() => {
    loadContactData()
  }, [])

  const loadContactData = async () => {
    try {
      const data = await mockAdminAPI.getContactData()
      setContactData(data)
      setEditedData(JSON.parse(JSON.stringify(data)))
    } catch (error) {
      console.error("Error loading contact data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError("")

    try {
      await mockAdminAPI.updateContactData(editedData)
      setContactData(JSON.parse(JSON.stringify(editedData)))
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      setError(t("message.error"))
    } finally {
      setIsSaving(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setEditedData((prev: any) => ({
      ...prev,
      [field]: value,
    }))
  }

  const updateBusinessHours = (lang: string, field: string, value: string) => {
    setEditedData((prev: any) => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [lang]: {
          ...prev.businessHours[lang],
          [field]: value,
        },
      },
    }))
  }

  const hasChanges = JSON.stringify(contactData) !== JSON.stringify(editedData)

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
          <h2 className="text-2xl font-bold text-gray-900">{t("contactData.title")}</h2>
          <p className="text-gray-600">{t("contactData.description")}</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving || !hasChanges} className="bg-[#00955e] hover:bg-[#007a4e]">
          {isSaving ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          {isSaving ? t("action.saving") : t("action.save")}
        </Button>
      </div>

      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="border-green-200 bg-green-50">
          <Check className="h-4 w-4" />
          <AlertDescription className="text-green-700">{t("message.success")}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-[#00955e]" />
              <span>Informações Básicas</span>
            </CardTitle>
            <CardDescription>Email, telefone e endereço da empresa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{t("contactData.email")}</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={editedData.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{t("contactData.phone")}</span>
              </Label>
              <Input
                id="phone"
                value={editedData.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="address" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{t("contactData.address")}</span>
              </Label>
              <Input
                id="address"
                value={editedData.address || ""}
                onChange={(e) => updateField("address", e.target.value)}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#00955e]" />
              <span>{t("contactData.businessHours")}</span>
            </CardTitle>
            <CardDescription>Horários de funcionamento em diferentes idiomas</CardDescription>
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
                <TabsContent key={lang.code} value={lang.code} className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor={`monday_friday_${lang.code}`}>{t("contactData.mondayFriday")}</Label>
                    <Input
                      id={`monday_friday_${lang.code}`}
                      value={editedData.businessHours?.[lang.code]?.monday_friday || ""}
                      onChange={(e) => updateBusinessHours(lang.code, "monday_friday", e.target.value)}
                      placeholder="Segunda - Sexta: 08:00 - 18:00"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`saturday_${lang.code}`}>{t("contactData.saturday")}</Label>
                    <Input
                      id={`saturday_${lang.code}`}
                      value={editedData.businessHours?.[lang.code]?.saturday || ""}
                      onChange={(e) => updateBusinessHours(lang.code, "saturday", e.target.value)}
                      placeholder="Sábado: 08:00 - 14:00"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`sunday_${lang.code}`}>{t("contactData.sunday")}</Label>
                    <Input
                      id={`sunday_${lang.code}`}
                      value={editedData.businessHours?.[lang.code]?.sunday || ""}
                      onChange={(e) => updateBusinessHours(lang.code, "sunday", e.target.value)}
                      placeholder="Domingo: Fechado"
                      className="mt-1"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Pré-visualização</CardTitle>
          <CardDescription>Como as informações aparecerão no site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4 text-[#00955e]" />
                <span className="font-medium">Email</span>
              </div>
              <p className="text-sm text-gray-600">{editedData.email || "Não definido"}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-[#00955e]" />
                <span className="font-medium">Telefone</span>
              </div>
              <p className="text-sm text-gray-600">{editedData.phone || "Não definido"}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-[#00955e]" />
                <span className="font-medium">Localização</span>
              </div>
              <p className="text-sm text-gray-600">{editedData.address || "Não definido"}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-[#00955e]" />
                <span className="font-medium">Horário</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>{editedData.businessHours?.pt?.monday_friday || "Não definido"}</p>
                <p>{editedData.businessHours?.pt?.saturday || "Não definido"}</p>
                <p>{editedData.businessHours?.pt?.sunday || "Não definido"}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
