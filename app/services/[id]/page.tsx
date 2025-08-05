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
  Wrench,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { type Locale, getTranslation } from "@/lib/i18n"

// Dados dos serviços com IDs únicos
const servicesData = {
  "electrical-installation": {
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    features: ["installation", "maintenance", "certification", "emergency"],
    gallery: ["/services/IMG_0995.jpg", "/services/IMG_8156.jpg", "/services/IMG_9476.jpg"],
    benefits: ["safety", "compliance", "efficiency", "reliability"],
    process: ["assessment", "design", "installation", "testing"]
  },
  "fire-safety": {
    icon: Shield,
    color: "from-red-500 to-red-600",
    features: ["detection", "suppression", "training", "inspection"],
    gallery: ["/services/IMG_0995.jpg", "/services/IMG_8156.jpg", "/services/IMG_9476.jpg"],
    benefits: ["protection", "compliance", "training", "reliability"],
    process: ["survey", "installation", "training", "maintenance"]
  },
  "industrial-automation": {
    icon: Cog,
    color: "from-purple-500 to-purple-600",
    features: ["plc", "scada", "iot", "remote"],
    gallery: ["/services/IMG_0995.jpg", "/services/IMG_8156.jpg", "/services/IMG_9476.jpg"],
    benefits: ["automation", "efficiency", "monitoring", "scalability"],
    process: ["consulting", "programming", "integration", "support"]
  },
  "oil-gas": {
    icon: Fuel,
    color: "from-orange-500 to-orange-600",
    features: ["safety", "monitoring", "compliance", "optimization"],
   gallery: ["/services/IMG_0995.jpg", "/services/IMG_8156.jpg", "/services/IMG_9476.jpg"],
    benefits: ["safety", "reliability", "compliance", "efficiency"],
    process: ["assessment", "design", "implementation", "monitoring"]
  },
  "electrical-manufacturing": {
    icon: Settings,
    color: "from-green-500 to-green-600",
    features: ["panels", "enclosures", "custom", "quality"],
    gallery: ["/services/IMG_0995.jpg", "/services/IMG_8156.jpg", "/services/IMG_9476.jpg"],
    benefits: ["durability", "customization", "quality", "compliance"],
    process: ["design", "manufacturing", "testing", "delivery"]
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
          details: t.electricalDetails,
          benefitsTitle: t.benefitsTitle || "Key Benefits",
          processTitle: t.processTitle || "Our Process"
        }
      case "fire-safety":
        return {
          title: t.fireSafety,
          description: t.fireDesc,
          details: t.fireDetails,
          benefitsTitle: t.benefitsTitle || "Key Benefits",
          processTitle: t.processTitle || "Our Process"
        }
      case "industrial-automation":
        return {
          title: t.industrialAutomation,
          description: t.automationDesc,
          details: t.automationDetails,
          benefitsTitle: t.benefitsTitle || "Key Benefits",
          processTitle: t.processTitle || "Our Process"
        }
      case "oil-gas":
        return {
          title: t.oilGas,
          description: t.oilGasDesc,
          details: t.oilGasDetails,
          benefitsTitle: t.benefitsTitle || "Key Benefits",
          processTitle: t.processTitle || "Our Process"
        }
      case "electrical-manufacturing":
        return {
          title: t.electricalManufacturing,
          description: t.manufacturingDesc,
          details: t.manufacturingDetails,
          benefitsTitle: t.benefitsTitle || "Key Benefits",
          processTitle: t.processTitle || "Our Process"
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

  // Função para traduzir features, benefits e process
  const translateList = (list: string[]) => {
    return list.map(item => t[item] || item.charAt(0).toUpperCase() + item.slice(1))
  }

  // Funções para navegação na galeria
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % service.gallery.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + service.gallery.length) % service.gallery.length)
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

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className="group/back flex items-center space-x-2 text-gray-700 hover:text-[#00955e] transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-[#00955e]/5"
              >
                <ArrowLeft className="h-4 w-4 group-hover/back:-translate-x-1 transition-transform duration-300" />
                <span>{t.back || (locale === "pt" ? "Voltar" : locale === "fr" ? "Retour" : locale === "it" ? "Indietro" : "Back")}</span>
              </Link>
              <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
            </div>

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
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-100 bg-gradient-to-r from-slate-50/50 to-white backdrop-blur-sm">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="group/mobile-link relative text-gray-700 hover:text-[#00955e] transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-[#00955e]/10 flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t.back || (locale === "pt" ? "Voltar" : locale === "fr" ? "Retour" : locale === "it" ? "Indietro" : "Back")}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover/mobile-link:opacity-100 transform translate-x-1 group-hover/mobile-link:translate-x-0 transition-all duration-300" />
                </Link>
              </nav>
            </div>
          )}
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
            <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 group/icon`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-30 transition-opacity duration-500"></div>
              <Icon className="h-12 w-12 text-white" />
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

      {/* Gallery Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-12 text-center relative">
            {t.galleryTitle || (locale === "pt" ? "Galeria" : locale === "fr" ? "Galerie" : locale === "it" ? "Galleria" : "Gallery")}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full"></div>
          </h2>
          
          <div className="relative group">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.gallery[activeImage]}
                alt={`${serviceInfo.title} ${activeImage + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {service.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeImage ? "bg-[#00955e] scale-125" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4 max-w-md mx-auto">
              {service.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer group/thumbnail ${
                    index === activeImage ? "ring-2 ring-[#00955e]" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${serviceInfo.title} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover/thumbnail:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#00955e]/20 opacity-0 group-hover/thumbnail:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Detailed Description */}
              <Card className="border-2 border-[#00955e]/20 rounded-2xl shadow-lg group">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    {t.serviceDetailsTitle || (locale === "pt" ? "Detalhes do Serviço" : locale === "fr" ? "Détails du Service" : locale === "it" ? "Dettagli del Servizio" : "Service Details")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {serviceInfo.details}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">{serviceInfo.benefitsTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {translateList(service.benefits).map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-[#00955e]/5 group/benefits">
                          <CheckCircle className="h-5 w-5 text-[#00955e] flex-shrink-0 group-hover/benefits:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="border-2 border-[#00955e]/20 rounded-2xl shadow-lg group">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                    <Wrench className="h-6 w-6 text-[#00955e]" />
                    {serviceInfo.processTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {translateList(service.process).map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-[#00955e]/5 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{step}</h4>
                          <p className="text-gray-600">{t[`process${index + 1}`] || `Step ${index + 1} in our ${serviceInfo.title} process.`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-24 transform hover:scale-105 transition-transform duration-300">
              <ContactForm locale={locale} translations={t} />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#00955e] to-[#007a4e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.statsTitle || (locale === "pt" ? "Nossas Conquistas" : locale === "fr" ? "Nos Réalisations" : locale === "it" ? "I Nostri Risultati" : "Our Achievements")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-lg opacity-90">{t.heroStats1}</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-lg opacity-90">{t.heroStats2}</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-lg opacity-90">{t.heroStats3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 via-transparent to-[#007a4e]/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00955e] to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="group/footer-logo">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-xl blur-lg opacity-0 group-hover/footer-logo:opacity-30 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-[#00955e] to-[#007a4e] p-3 rounded-xl inline-block group-hover/footer-logo:scale-105 transition-all duration-300">
                  <Image
                    src="/techsafe-logo.svg"
                    alt="TechSafe Solutions"
                    width={150}
                    height={50}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 group-hover/footer-logo:text-gray-200 transition-colors duration-300">
                {t.footerText}
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Mail, label: "Email", href: "mailto:info@techsafe-solutions.com" },
                  { icon: Phone, label: "Phone", href: "tel:+244951588735" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group/social relative w-12 h-12 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <social.icon className="h-5 w-5 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full blur-lg opacity-0 group-hover/social:opacity-50 transition-opacity duration-500 scale-110"></div>
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="group/services">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/services:from-[#00955e] group-hover/services:to-[#007a4e] transition-all duration-500">
                {t.services}
              </h3>
              <ul className="space-y-3">
                {[
                  t.electricalInstallation,
                  t.fireSafety,
                  t.industrialAutomation,
                  t.oilGas,
                  t.electricalManufacturing
                ].map((service, index) => (
                  <li key={index} className="group/service-item">
                    <Link
                      href={`/services/${Object.keys(servicesData)[index]}`}
                      className="text-gray-300 hover:text-[#00955e] transition-all duration-300 cursor-pointer relative flex items-center group-hover/service-item:translate-x-2"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover/service-item:opacity-100 transition-all duration-300 text-[#00955e]" />
                      <span className="relative">
                        {service}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#00955e] to-[#007a4e] group-hover/service-item:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group/contact">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/contact:from-[#00955e] group-hover/contact:to-[#007a4e] transition-all duration-500">
                {t.contact}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "info@techsafe-solutions.com", href: "mailto:info@techsafe-solutions.com" },
                  { icon: Phone, text: "+244 951 588 735", href: "tel:+244951588735" },
                  { icon: MapPin, text: "Luanda, Angola", href: "#" }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group/contact-item flex items-center gap-3 text-gray-300 hover:text-[#00955e] transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00955e]/20 to-[#007a4e]/20 rounded-lg flex items-center justify-center group-hover/contact-item:scale-110 transition-all duration-300">
                        <contact.icon className="h-5 w-5 text-[#00955e]" />
                      </div>
                    </div>
                    <span className="group-hover/contact-item:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-px mb-8"></div>
            <div className="pt-8 text-center">
              <div className="inline-block group/copyright">
                <p className="text-gray-400 group-hover/copyright:text-gray-300 transition-colors duration-300">
                  &copy; 2025 TechSafe Solutions Sen. {t.allRightsReserved}
                </p>
                <div className="w-0 h-px bg-gradient-to-r from-[#00955e] to-[#007a4e] group-hover/copyright:w-full transition-all duration-500 mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}