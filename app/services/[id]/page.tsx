// 1. Primeiro, crie o arquivo: app/services/[id]/page.tsx

"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { LanguageSwitcher } from "@/components/language-switcher"
import { 
  ArrowLeft, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Zap, 
  Shield, 
  Cog, 
  Fuel, 
  Settings,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Wrench
} from "lucide-react"
import { type Locale, getTranslation } from "@/lib/i18n"

// Definir os serviços com IDs únicos
const servicesData = {
  "electrical-installation": {
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    features: ["installation", "maintenance", "certification", "emergency"],
    gallery: ["/services/electrical-1.jpg", "/services/electrical-2.jpg", "/services/electrical-3.jpg"]
  },
  "fire-safety": {
    icon: Shield,
    color: "from-red-500 to-red-600",
    features: ["detection", "suppression", "training", "inspection"],
    gallery: ["/services/fire-1.jpg", "/services/fire-2.jpg", "/services/fire-3.jpg"]
  },
  "industrial-automation": {
    icon: Cog,
    color: "from-purple-500 to-purple-600",
    features: ["plc", "scada", "iot", "remote"],
    gallery: ["/services/automation-1.jpg", "/services/automation-2.jpg", "/services/automation-3.jpg"]
  },
  "oil-gas": {
    icon: Fuel,
    color: "from-orange-500 to-orange-600",
    features: ["safety", "monitoring", "compliance", "optimization"],
    gallery: ["/services/oilgas-1.jpg", "/services/oilgas-2.jpg", "/services/oilgas-3.jpg"]
  },
  "electrical-manufacturing": {
    icon: Settings,
    color: "from-green-500 to-green-600",
    features: ["panels", "enclosures", "custom", "quality"],
    gallery: ["/services/manufacturing-1.jpg", "/services/manufacturing-2.jpg", "/services/manufacturing-3.jpg"]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  
  const serviceId = params.id as string
  const service = servicesData[serviceId as keyof typeof servicesData]
  const t = getTranslation(locale)

  // Verificar se o serviço existe
  useEffect(() => {
    if (!service) {
      router.push('/404')
    }
  }, [service, router])

  if (!service) {
    return null
  }

  const Icon = service.icon

  // Função para obter informações do serviço baseado no ID
  const getServiceInfo = () => {
    switch (serviceId) {
      case "electrical-installation":
        return {
          title: t.electricalInstallation,
          description: t.electricalDesc,
          details: t.electricalDetails
        }
      case "fire-safety":
        return {
          title: t.fireSafety,
          description: t.fireDesc,
          details: t.fireDetails
        }
      case "industrial-automation":
        return {
          title: t.industrialAutomation,
          description: t.automationDesc,
          details: t.automationDetails
        }
      case "oil-gas":
        return {
          title: t.oilGas,
          description: t.oilGasDesc,
          details: t.oilGasDetails
        }
      case "electrical-manufacturing":
        return {
          title: t.electricalManufacturing,
          description: t.manufacturingDesc,
          details: t.manufacturingDetails
        }
      default:
        return null
    }
  }

  const serviceInfo = getServiceInfo()
  if (!serviceInfo) return null

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${t.whatsappMessage} ${serviceInfo.title}`)
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="group relative bg-white shadow-xl sticky top-0 z-50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 via-transparent to-[#00955e]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00955e] to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group/logo">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-xl blur-lg opacity-0 group-hover/logo:opacity-20 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-[#00955e] to-[#007a4e] p-2 rounded-xl group-hover/logo:scale-105 transition-all duration-300">
                  <Image
                    src="/techsafe-logo.svg"
                    alt="TechSafe Solutions"
                    width={150}
                    height={50}
                    className="h-8 w-auto brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/"
                className="group/back flex items-center space-x-2 text-gray-700 hover:text-[#00955e] transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-[#00955e]/5"
              >
                <ArrowLeft className="h-4 w-4 group-hover/back:-translate-x-1 transition-transform duration-300" />
                <span>{locale === "pt" ? "Voltar" : locale === "fr" ? "Retour" : locale === "it" ? "Indietro" : "Back"}</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative group/mobile hover:bg-[#00955e]/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-[#00955e]" /> : <Menu className="h-6 w-6 text-[#00955e]" />}
              </Button>
            </div>

            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00955e] rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#00955e] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                <Icon className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              {serviceInfo.title}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {serviceInfo.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-[#00955e] to-[#007a4e] hover:from-[#007a4e] hover:to-[#00955e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.contractService}
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00955e] text-[#00955e] hover:bg-[#00955e] hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t.contactButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8">
              <Card className="border-2 border-[#00955e]/20 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    {locale === "pt" ? "Detalhes do Serviço" : locale === "fr" ? "Détails du Service" : locale === "it" ? "Dettagli del Servizio" : "Service Details"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {serviceInfo.details}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-2 border-[#00955e]/20 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                    <Award className="h-6 w-6 text-[#00955e]" />
                    {locale === "pt" ? "Características Principais" : locale === "fr" ? "Caractéristiques Principales" : locale === "it" ? "Caratteristiche Principali" : "Key Features"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-[#00955e]/5">
                        <CheckCircle className="h-5 w-5 text-[#00955e] flex-shrink-0" />
                        <span className="text-gray-700 capitalize">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-24">
              <ContactForm locale={locale} translations={t} />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#00955e] to-[#007a4e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-lg opacity-90">{locale === "pt" ? "Anos de Experiência" : locale === "fr" ? "Années d'Expérience" : locale === "it" ? "Anni di Esperienza" : "Years Experience"}</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-lg opacity-90">{locale === "pt" ? "Projetos Concluídos" : locale === "fr" ? "Projets Complétés" : locale === "it" ? "Progetti Completati" : "Projects Completed"}</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-lg opacity-90">{locale === "pt" ? "Clientes Satisfeitos" : locale === "fr" ? "Clients Satisfaits" : locale === "it" ? "Clienti Soddisfatti" : "Satisfied Clients"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <div className="relative bg-gradient-to-br from-[#00955e] to-[#007a4e] p-3 rounded-xl inline-block">
                <Image
                  src="/techsafe-logo.svg"
                  alt="TechSafe Solutions"
                  width={150}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
            </div>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a href="mailto:info@techsafe-solutions.com" className="flex items-center gap-2 text-gray-300 hover:text-[#00955e] transition-colors">
                <Mail className="h-5 w-5" />
                info@techsafe-solutions.com
              </a>
              <a href="tel:+244951588735" className="flex items-center gap-2 text-gray-300 hover:text-[#00955e] transition-colors">
                <Phone className="h-5 w-5" />
                +244 951 588 735
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                Luanda, Angola
              </div>
            </div>
            
            <p className="text-gray-400">
              &copy; 2025 TechSafe Solutions Sen. {t.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}