import { mockContent, mockSections, mockUser, mockServices, mockLanguages, mockContactData } from "./mock-data"

// Simula delay de API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

class MockAdminAPI {
  private token: string | null = null
  private content = [...mockContent]
  private services = [...mockServices]
  private languages = [...mockLanguages]
  private contactData = { ...mockContactData }

  // Autenticação
  async login(email: string, password: string) {
    await delay(1000)

    if (email === "admin@techsafe.com" && password === "admin123") {
      this.token = "mock-jwt-token-" + Date.now()
      localStorage.setItem("admin-token", this.token)
      return { token: this.token, user: mockUser }
    }

    throw new Error("Credenciais inválidas")
  }

  async logout() {
    await delay(500)
    this.token = null
    localStorage.removeItem("admin-token")
  }

  isAuthenticated(): boolean {
    return this.token !== null || localStorage.getItem("admin-token") !== null
  }

  clearToken() {
    this.token = null
    localStorage.removeItem("admin-token")
  }

  // Obter seções
  async getSections() {
    await delay(300)
    return mockSections
  }

  // Obter conteúdo
  async getContent() {
    await delay(300)
    return this.content
  }

  async getContentBySection(section: string) {
    await delay(300)
    return this.content.filter((item) => item.section === section)
  }

  // Atualizar conteúdo
  async updateContent(key: string, updatedContent: any) {
    await delay(500)

    const index = this.content.findIndex((item) => item.key === key)
    if (index !== -1) {
      this.content[index] = { ...this.content[index], ...updatedContent }
      return this.content[index]
    }

    throw new Error("Conteúdo não encontrado")
  }

  // Criar novo conteúdo
  async createContent(content: any) {
    await delay(500)

    const newContent = {
      _id: Date.now().toString(),
      ...content,
      isActive: true,
    }

    this.content.push(newContent)
    return newContent
  }

  // Deletar conteúdo
  async deleteContent(key: string) {
    await delay(500)

    const index = this.content.findIndex((item) => item.key === key)
    if (index !== -1) {
      this.content.splice(index, 1)
      return true
    }

    throw new Error("Conteúdo não encontrado")
  }

  // Serviços
  async getServices() {
    await delay(300)
    return this.services
  }

  async updateService(key: string, updates: any) {
    await delay(500)

    const index = this.services.findIndex((item) => item.key === key)
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...updates }
      return this.services[index]
    }

    throw new Error("Serviço não encontrado")
  }

  async createService(serviceData: any) {
    await delay(500)

    const newService = {
      _id: `service_${Date.now()}`,
      key: `service_${Date.now()}`,
      icon: "Settings",
      isActive: true,
      ...serviceData,
    }

    this.services.push(newService)
    return newService
  }

  async deleteService(key: string) {
    await delay(500)

    const index = this.services.findIndex((item) => item.key === key)
    if (index !== -1) {
      this.services.splice(index, 1)
      return true
    }

    throw new Error("Serviço não encontrado")
  }

  // Idiomas
  async getLanguages() {
    await delay(300)
    return this.languages
  }

  async addLanguage(languageData: any) {
    await delay(500)

    const newLanguage = {
      ...languageData,
      isDefault: false,
    }

    this.languages.push(newLanguage)

    // Adicionar traduções vazias para o novo idioma em todos os conteúdos
    this.content.forEach((item) => {
      item.translations[languageData.code] = ""
    })

    this.services.forEach((service) => {
      service.translations[languageData.code] = {
        title: "",
        description: "",
        details: "",
      }
    })

    // Adicionar ao contactData
    this.contactData.businessHours[languageData.code] = {
      monday_friday: "",
      saturday: "",
      sunday: "",
    }

    return newLanguage
  }

  async removeLanguage(code: string) {
    await delay(500)

    if (this.languages.find((lang) => lang.code === code)?.isDefault) {
      throw new Error("Não é possível remover o idioma padrão")
    }

    // Remover idioma
    this.languages = this.languages.filter((lang) => lang.code !== code)

    // Remover traduções para este idioma
    this.content.forEach((item) => {
      delete item.translations[code]
    })

    this.services.forEach((service) => {
      delete service.translations[code]
    })

    // Remover do contactData
    delete this.contactData.businessHours[code]

    return true
  }

  // Dados de contato
  async getContactData() {
    await delay(300)
    return this.contactData
  }

  async updateContactData(updates: any) {
    await delay(500)
    this.contactData = { ...this.contactData, ...updates }
    return this.contactData
  }

  // Estatísticas
  async getStats() {
    await delay(300)

    const totalContent = this.content.length
    const totalServices = this.services.length
    const totalLanguages = this.languages.length
    const totalSections = mockSections.length

    const translationProgress =
      (this.content.reduce((acc, item) => {
        const translations = Object.values(item.translations)
        const completed = translations.filter((t) => t && t.trim() !== "").length
        return acc + completed / translations.length
      }, 0) /
        totalContent) *
      100

    return {
      totalContent,
      totalServices,
      totalLanguages,
      totalSections,
      translationProgress: Math.round(translationProgress),
    }
  }
}

export const mockAdminAPI = new MockAdminAPI()
