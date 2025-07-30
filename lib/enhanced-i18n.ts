import { contentManager } from "./content-manager"

export const defaultLocale = "en" as const
export const locales = ["en", "pt", "fr", "it"] as const

export type Locale = (typeof locales)[number]

// Traduções estáticas como fallback
export const staticTranslations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Advanced Solutions in Electricity and Industrial Automation",
    heroSubtitle:
      "We provide complete solutions in electrical installations, fire safety, industrial automation and integrated systems for the Oil & Gas sector.",
    heroButton: "Discover Our Services",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer complete and specialized solutions for various industrial sectors",
    seeDetails: "See Details",
    contractService: "Contract Service",

    // Service Cards
    electricalInstallation: "Electrical Installation",
    electricalDesc: "Studies, design and installation of electrical networks according to international standards.",

    fireSafety: "Fire Safety",
    fireDesc: "Complete fire detection and suppression systems with advanced technology.",

    industrialAutomation: "Industrial Automation",
    automationDesc: "PLC programming, SCADA and IoT solutions for process optimization.",

    oilGas: "Oil & Gas Solutions",
    oilGasDesc: "Specialized safety and automation for the oil and gas sector.",

    electricalManufacturing: "Electrical Manufacturing",
    manufacturingDesc: "Manufacturing of distribution panels and industrial electrical enclosures.",

    // About Section
    aboutTitle: "About TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen is a company specialized in advanced solutions for electricity, fire protection and industrial automation.",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "We are ready to develop the ideal solution for your project",
    requestQuote: "Request Quote",

    // Contact Form
    formName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone",
    formCompany: "Company",
    formService: "Service of Interest",
    formMessage: "Message",
    formSubmit: "Send Request",
    selectService: "Select a service",

    // Footer
    footerText: "Advanced solutions in electricity, safety and industrial automation.",
    allRightsReserved: "All rights reserved.",

    // WhatsApp
    whatsappMessage: "Hello! I would like to contract the service of",
  },
  pt: {
    // Navigation
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",

    // Hero Section
    heroTitle: "Soluções Avançadas em Eletricidade e Automação Industrial",
    heroSubtitle:
      "Fornecemos soluções completas em instalações elétricas, segurança contra incêndios, automação industrial e sistemas integrados para o setor Oil & Gas.",
    heroButton: "Conheça Nossos Serviços",

    // Services
    servicesTitle: "Nossos Serviços",
    servicesSubtitle: "Oferecemos soluções completas e especializadas para diversos setores industriais",
    seeDetails: "Ver Detalhes",
    contractService: "Contratar Serviço",

    // Service Cards
    electricalInstallation: "Instalação Elétrica",
    electricalDesc: "Estudos, concepção e instalação de redes elétricas conforme normas internacionais.",

    fireSafety: "Segurança Contra Incêndio",
    fireDesc: "Sistemas completos de detecção e supressão de incêndios com tecnologia avançada.",

    industrialAutomation: "Automação Industrial",
    automationDesc: "Programação de PLCs, SCADA e soluções IoT para otimização de processos.",

    oilGas: "Soluções Oil & Gas",
    oilGasDesc: "Segurança e automação especializada para o setor petrolífero e de gás.",

    electricalManufacturing: "Fabricação Elétrica",
    manufacturingDesc: "Fabricação de quadros de distribuição e cofres elétricos industriais.",

    // About Section
    aboutTitle: "Sobre a TechSafe Solutions",
    aboutText:
      "A TechSafe Solutions Sen é uma empresa especializada em soluções avançadas para eletricidade, proteção contra incêndio e automação industrial.",

    // Contact
    contactTitle: "Entre em Contato",
    contactSubtitle: "Estamos prontos para desenvolver a solução ideal para seu projeto",
    requestQuote: "Solicitar Orçamento",

    // Contact Form
    formName: "Nome Completo",
    formEmail: "Email",
    formPhone: "Telefone",
    formCompany: "Empresa",
    formService: "Serviço de Interesse",
    formMessage: "Mensagem",
    formSubmit: "Enviar Solicitação",
    selectService: "Selecione um serviço",

    // Footer
    footerText: "Soluções avançadas em eletricidade, segurança e automação industrial.",
    allRightsReserved: "Todos os direitos reservados.",

    // WhatsApp
    whatsappMessage: "Olá! Gostaria de contratar o serviço de",
  },
  fr: {
    // Navigation
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",

    // Hero Section
    heroTitle: "Solutions Avancées en Électricité et Automatisation Industrielle",
    heroSubtitle:
      "Nous fournissons des solutions complètes en installations électriques, sécurité incendie, automatisation industrielle et systèmes intégrés pour le secteur Oil & Gas.",
    heroButton: "Découvrez Nos Services",

    // Services
    servicesTitle: "Nos Services",
    servicesSubtitle: "Nous offrons des solutions complètes et spécialisées pour divers secteurs industriels",
    seeDetails: "Voir Détails",
    contractService: "Contracter Service",

    // Service Cards
    electricalInstallation: "Installation Électrique",
    electricalDesc: "Études, conception et installation de réseaux électriques selon les normes internationales.",

    fireSafety: "Sécurité Incendie",
    fireDesc: "Systèmes complets de détection et suppression d'incendie avec technologie avancée.",

    industrialAutomation: "Automatisation Industrielle",
    automationDesc: "Programmation PLC, SCADA et solutions IoT pour l'optimisation des processus.",

    oilGas: "Solutions Oil & Gas",
    oilGasDesc: "Sécurité et automatisation spécialisées pour le secteur pétrolier et gazier.",

    electricalManufacturing: "Fabrication Électrique",
    manufacturingDesc: "Fabrication de tableaux de distribution et coffrets électriques industriels.",

    // About Section
    aboutTitle: "À propos de TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen est une entreprise spécialisée dans les solutions avancées pour l'électricité, la protection incendie et l'automatisation industrielle.",

    // Contact
    contactTitle: "Contactez-nous",
    contactSubtitle: "Nous sommes prêts à développer la solution idéale pour votre projet",
    requestQuote: "Demander un Devis",

    // Contact Form
    formName: "Nom Complet",
    formEmail: "Email",
    formPhone: "Téléphone",
    formCompany: "Entreprise",
    formService: "Service d'Intérêt",
    formMessage: "Message",
    formSubmit: "Envoyer Demande",
    selectService: "Sélectionner un service",

    // Footer
    footerText: "Solutions avancées en électricité, sécurité et automatisation industrielle.",
    allRightsReserved: "Tous droits réservés.",

    // WhatsApp
    whatsappMessage: "Bonjour! Je souhaiterais contracter le service de",
  },
  it: {
    // Navigation
    home: "Home",
    services: "Servizi",
    about: "Chi Siamo",
    contact: "Contatto",

    // Hero Section
    heroTitle: "Soluzioni Avanzate in Elettricità e Automazione Industriale",
    heroSubtitle:
      "Forniamo soluzioni complete in installazioni elettriche, sicurezza antincendio, automazione industriale e sistemi integrati per il settore Oil & Gas.",
    heroButton: "Scopri i Nostri Servizi",

    // Services
    servicesTitle: "I Nostri Servizi",
    servicesSubtitle: "Offriamo soluzioni complete e specializzate per vari settori industriali",
    seeDetails: "Vedi Dettagli",
    contractService: "Contratta Servizio",

    // Service Cards
    electricalInstallation: "Installazione Elettrica",
    electricalDesc: "Studi, progettazione e installazione di reti elettriche secondo standard internazionali.",

    fireSafety: "Sicurezza Antincendio",
    fireDesc: "Sistemi completi di rilevazione e soppressione incendi con tecnologia avanzata.",

    industrialAutomation: "Automazione Industriale",
    automationDesc: "Programmazione PLC, SCADA e soluzioni IoT per l'ottimizzazione dei processi.",

    oilGas: "Soluzioni Oil & Gas",
    oilGasDesc: "Sicurezza e automazione specializzate per il settore petrolifero e del gas.",

    electricalManufacturing: "Produzione Elettrica",
    manufacturingDesc: "Produzione di quadri di distribuzione e armadi elettrici industriali.",

    // About Section
    aboutTitle: "Chi è TechSafe Solutions",
    aboutText:
      "TechSafe Solutions Sen è un'azienda specializzata in soluzioni avanzate per elettricità, protezione antincendio e automazione industriale.",

    // Contact
    contactTitle: "Contattaci",
    contactSubtitle: "Siamo pronti a sviluppare la soluzione ideale per il tuo progetto",
    requestQuote: "Richiedi Preventivo",

    // Contact Form
    formName: "Nome Completo",
    formEmail: "Email",
    formPhone: "Telefono",
    formCompany: "Azienda",
    formService: "Servizio di Interesse",
    formMessage: "Messaggio",
    formSubmit: "Invia Richiesta",
    selectService: "Seleziona un servizio",

    // Footer
    footerText: "Soluzioni avanzate in elettricità, sicurezza e automazione industriale.",
    allRightsReserved: "Tutti i diritti riservati.",

    // WhatsApp
    whatsappMessage: "Ciao! Vorrei contrattare il servizio di",
  },
} as const

export async function getTranslation(locale: Locale) {
  // Inicializar o content manager se necessário
  await contentManager.initialize()

  // Criar objeto de traduções híbrido
  const staticTrans = staticTranslations[locale] || staticTranslations[defaultLocale]
  const dynamicContent = contentManager.getAllContent()

  // Sobrescrever traduções estáticas com conteúdo dinâmico quando disponível
  const hybridTranslations = { ...staticTrans }

  dynamicContent.forEach((content) => {
    if (content.translations && content.translations[locale]) {
      hybridTranslations[content.key as keyof typeof hybridTranslations] = content.translations[locale]
    }
  })

  return hybridTranslations
}

// Função para obter tradução específica
export async function getTranslationKey(key: string, locale: Locale): Promise<string> {
  await contentManager.initialize()

  const dynamicTranslation = contentManager.getTranslation(key, locale)
  if (dynamicTranslation !== key) {
    return dynamicTranslation
  }

  // Fallback para traduções estáticas
  const staticTrans = staticTranslations[locale] || staticTranslations[defaultLocale]
  return staticTrans[key as keyof typeof staticTrans] || key
}
