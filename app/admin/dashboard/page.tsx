"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Globe, Settings, LogOut, BarChart3, Shield, Wrench, Phone } from "lucide-react"
import { mockAdminAPI } from "@/lib/mock-admin-api"
import { SectionContentManager } from "@/components/admin/section-content-manager"
import { ServiceManager } from "@/components/admin/service-manager"
import { LanguageManager } from "@/components/admin/language-manager"
import { ContactDataManager } from "@/components/admin/contact-data-manager"
import { StatsOverview } from "@/components/admin/stats-overview"
import { AdminLanguageSwitcher } from "@/components/admin/admin-language-switcher"
import { useAdminTranslation } from "@/hooks/use-admin-translation"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<any>({})
  const router = useRouter()
  const { t } = useAdminTranslation()

  useEffect(() => {
    if (!mockAdminAPI.isAuthenticated()) {
      router.push("/admin/login")
      return
    }

    loadStats()
  }, [router])

  const loadStats = async () => {
    try {
      const statsData = await mockAdminAPI.getStats()
      setStats(statsData)
    } catch (error) {
      console.error("Error loading stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    mockAdminAPI.clearToken()
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00955e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">{t("message.loading")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t("admin.title")}</h1>
                <p className="text-sm text-gray-500">{t("admin.subtitle")}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <AdminLanguageSwitcher />
              <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                <span>{t("admin.logout")}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none lg:flex">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.overview")}</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.content")}</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.services")}</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.contact")}</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.languages")}</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.settings")}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("overview.totalContent")}</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalContent || 0}</div>
                  <p className="text-xs text-muted-foreground">{t("overview.textsManaged")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("overview.totalServices")}</CardTitle>
                  <Wrench className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalServices || 0}</div>
                  <p className="text-xs text-muted-foreground">{t("overview.servicesRegistered")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("overview.totalLanguages")}</CardTitle>
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalLanguages || 0}</div>
                  <p className="text-xs text-muted-foreground">{t("overview.activeLanguages")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("overview.translationProgress")}</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.translationProgress || 0}%</div>
                  <p className="text-xs text-muted-foreground">{t("overview.completeTranslation")}</p>
                </CardContent>
              </Card>
            </div>

            <StatsOverview />
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <SectionContentManager />
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <ServiceManager />
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <ContactDataManager />
          </TabsContent>

          <TabsContent value="languages" className="space-y-6">
            <LanguageManager />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
                <CardDescription>Gerencie as configurações gerais do painel administrativo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Backup e Segurança</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Backup Automático</h4>
                          <p className="text-sm text-gray-500">Backup diário dos dados</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configurar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Exportar Dados</h4>
                          <p className="text-sm text-gray-500">Download de todos os conteúdos</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Exportar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sistema</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Limpar Cache</h4>
                          <p className="text-sm text-gray-500">Limpar cache de traduções</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Limpar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Logs do Sistema</h4>
                          <p className="text-sm text-gray-500">Visualizar logs de atividade</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Logs
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
