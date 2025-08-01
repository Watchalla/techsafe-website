import { adminAPI } from "./admin-api"

class ContentManager {
  private contentCache: Map<string, any> = new Map()
  private isInitialized = false

  async initialize() {
    if (this.isInitialized) return

    try {
      const content = await adminAPI.getContent()
      content.forEach((item: any) => {
        this.contentCache.set(item.key, item)
      })
      this.isInitialized = true
    } catch (error) {
      console.warn("Failed to load dynamic content, using fallback")
    }
  }

  getTranslation(key: string, locale: string, fallback?: string): string {
    const content = this.contentCache.get(key)

    if (content && content.translations && content.translations[locale]) {
      return content.translations[locale]
    }

    // Fallback para o sistema i18n existente
    return fallback || key
  }

  async updateContent(key: string, translations: any) {
    try {
      const updated = await adminAPI.updateContent(key, { translations })
      this.contentCache.set(key, updated)
      return updated
    } catch (error) {
      throw new Error(`Failed to update content: ${error}`)
    }
  }

  getAllContent() {
    return Array.from(this.contentCache.values())
  }

  getContentBySection(section: string) {
    return Array.from(this.contentCache.values()).filter((item) => item.section === section)
  }
}

export const contentManager = new ContentManager()
