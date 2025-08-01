export const mockUser = {
  _id: "admin123",
  name: "Administrador",
  email: "admin@techsafe.com",
  role: "admin",
  isActive: true,
}

export const mockSections = ["header", "hero", "services", "about", "video", "stats", "contact", "footer"]

export const mockLanguages = [
  { code: "pt", name: "Português", flag: "🇵🇹", isDefault: true },
  { code: "en", name: "English", flag: "🇺🇸", isDefault: false },
  { code: "fr", name: "Français", flag: "🇫🇷", isDefault: false },
  { code: "it", name: "Italiano", flag: "🇮🇹", isDefault: false },
]

export const mockServices = [
  {
    _id: "service1",
    key: "electricalInstallation",
    icon: "Zap",
    isActive: true,
    translations: {
      pt: {
        title: "Instalação Elétrica",
        description: "Estudos, concepção e instalação de redes elétricas conforme normas internacionais.",
        details:
          "Oferecemos estudos completos de redes elétricas, instalação de equipamentos de alta e baixa tensão, manutenção preventiva e corretiva, fabricação de quadros de distribuição elétrica conforme normas NF C 15-100 e IEC 60364.",
      },
      en: {
        title: "Electrical Installation",
        description: "Studies, design and installation of electrical networks according to international standards.",
        details:
          "We offer complete electrical network studies, high and low voltage equipment installation, preventive and corrective maintenance, manufacturing of electrical distribution panels according to NF C 15-100 and IEC 60364 standards.",
      },
      fr: {
        title: "Installation Électrique",
        description: "Études, conception et installation de réseaux électriques selon les normes internationales.",
        details:
          "Nous offrons des études complètes de réseaux électriques, installation d'équipements haute et basse tension, maintenance préventive et corrective, fabrication de tableaux de distribution électrique selon les normes NF C 15-100 et IEC 60364.",
      },
      it: {
        title: "Installazione Elettrica",
        description: "Studi, progettazione e installazione di reti elettriche secondo standard internazionali.",
        details:
          "Offriamo studi completi di reti elettriche, installazione di apparecchiature ad alta e bassa tensione, manutenzione preventiva e correttiva, fabbricazione di quadri di distribuzione elettrica secondo norme NF C 15-100 e IEC 60364.",
      },
    },
  },
  {
    _id: "service2",
    key: "fireSafety",
    icon: "Shield",
    isActive: true,
    translations: {
      pt: {
        title: "Segurança Contra Incêndio",
        description: "Sistemas completos de detecção e supressão de incêndios com tecnologia avançada.",
        details:
          "Fornecemos e instalamos detectores de fumaça, gases tóxicos, calor, alarmes e sistemas automáticos de supressão por CO₂, gases inertes, espuma e pó químico seco.",
      },
      en: {
        title: "Fire Safety",
        description: "Complete fire detection and suppression systems with advanced technology.",
        details:
          "We supply and install smoke detectors, toxic gases, heat, alarms and automatic suppression systems with CO₂, inert gases, foam and dry chemical powder.",
      },
      fr: {
        title: "Sécurité Incendie",
        description: "Systèmes complets de détection et suppression d'incendie avec technologie avancée.",
        details:
          "Nous fournissons et installons des détecteurs de fumée, gaz toxiques, chaleur, alarmes et systèmes automatiques de suppression par CO₂, gaz inertes, mousse et poudre chimique sèche.",
      },
      it: {
        title: "Sicurezza Antincendio",
        description: "Sistemi completi di rilevazione e soppressione incendi con tecnologia avanzata.",
        details:
          "Forniamo e installiamo rilevatori di fumo, gas tossici, calore, allarmi e sistemi automatici di soppressione con CO₂, gas inerti, schiuma e polvere chimica secca.",
      },
    },
  },
  {
    _id: "service3",
    key: "industrialAutomation",
    icon: "Cog",
    isActive: true,
    translations: {
      pt: {
        title: "Automação Industrial",
        description: "Programação de PLCs, SCADA e soluções IoT para otimização de processos.",
        details:
          "Programação de autômatos industriais (PLC, SCADA), implementação de IoT para monitoramento, integração de soluções de controle e supervisão remota.",
      },
      en: {
        title: "Industrial Automation",
        description: "PLC programming, SCADA and IoT solutions for process optimization.",
        details:
          "Programming of industrial controllers (PLC, SCADA), IoT implementation for monitoring, integration of remote control and supervision solutions.",
      },
      fr: {
        title: "Automatisation Industrielle",
        description: "Programmation PLC, SCADA et solutions IoT pour l'optimisation des processus.",
        details:
          "Programmation d'automates industriels (PLC, SCADA), implémentation IoT pour surveillance, intégration de solutions de contrôle et supervision à distance.",
      },
      it: {
        title: "Automazione Industriale",
        description: "Programmazione PLC, SCADA e soluzioni IoT per l'ottimizzazione dei processi.",
        details:
          "Programmazione di controllori industriali (PLC, SCADA), implementazione IoT per monitoraggio, integrazione di soluzioni di controllo e supervisione remota.",
      },
    },
  },
]

// Dados de contato editáveis
export const mockContactData = {
  _id: "contact_data",
  email: "info@techsafe-solutions.com",
  phone: "+244 951 588 735",
  address: "Luanda, Angola",
  businessHours: {
    pt: {
      monday_friday: "Segunda - Sexta: 08:00 - 18:00",
      saturday: "Sábado: 08:00 - 14:00",
      sunday: "Domingo: Fechado",
    },
    en: {
      monday_friday: "Monday - Friday: 08:00 - 18:00",
      saturday: "Saturday: 08:00 - 14:00",
      sunday: "Sunday: Closed",
    },
    fr: {
      monday_friday: "Lundi - Vendredi: 08:00 - 18:00",
      saturday: "Samedi: 08:00 - 14:00",
      sunday: "Dimanche: Fermé",
    },
    it: {
      monday_friday: "Lunedì - Venerdì: 08:00 - 18:00",
      saturday: "Sabato: 08:00 - 14:00",
      sunday: "Domenica: Chiuso",
    },
  },
}

export const mockContent = [
  // HEADER SECTION
  {
    _id: "header1",
    key: "nav.home",
    section: "header",
    description: "Link de navegação - Início",
    translations: {
      pt: "Início",
      en: "Home",
      fr: "Accueil",
      it: "Home",
    },
    isActive: true,
  },
  {
    _id: "header2",
    key: "nav.services",
    section: "header",
    description: "Link de navegação - Serviços",
    translations: {
      pt: "Serviços",
      en: "Services",
      fr: "Services",
      it: "Servizi",
    },
    isActive: true,
  },
  {
    _id: "header3",
    key: "nav.about",
    section: "header",
    description: "Link de navegação - Sobre",
    translations: {
      pt: "Sobre",
      en: "About",
      fr: "À propos",
      it: "Chi siamo",
    },
    isActive: true,
  },
  {
    _id: "header4",
    key: "nav.contact",
    section: "header",
    description: "Link de navegação - Contato",
    translations: {
      pt: "Contato",
      en: "Contact",
      fr: "Contact",
      it: "Contatto",
    },
    isActive: true,
  },

  // HERO SECTION
  {
    _id: "hero1",
    key: "hero.title",
    section: "hero",
    description: "Título principal da página",
    translations: {
      pt: "Soluções Avançadas em Eletricidade e Automação Industrial",
      en: "Advanced Solutions in Electricity and Industrial Automation",
      fr: "Solutions Avancées en Électricité et Automatisation Industrielle",
      it: "Soluzioni Avanzate in Elettricità e Automazione Industriale",
    },
    isActive: true,
  },
  {
    _id: "hero2",
    key: "hero.subtitle",
    section: "hero",
    description: "Subtítulo da página principal",
    translations: {
      pt: "Fornecemos soluções completas em instalações elétricas, segurança contra incêndios, automação industrial e sistemas integrados para o setor Oil & Gas.",
      en: "We provide complete solutions in electrical installations, fire safety, industrial automation and integrated systems for the Oil & Gas sector.",
      fr: "Nous fournissons des solutions complètes en installations électriques, sécurité incendie, automatisation industrielle et systèmes intégrés pour le secteur Oil & Gas.",
      it: "Forniamo soluzioni complete in installazioni elettriche, sicurezza antincendio, automazione industriale e sistemi integrati per il settore Oil & Gas.",
    },
    isActive: true,
  },
  {
    _id: "hero3",
    key: "hero.button",
    section: "hero",
    description: "Botão principal do hero",
    translations: {
      pt: "Conheça Nossos Serviços",
      en: "Discover Our Services",
      fr: "Découvrez Nos Services",
      it: "Scopri i Nostri Servizi",
    },
    isActive: true,
  },

  // SERVICES SECTION
  {
    _id: "services1",
    key: "services.title",
    section: "services",
    description: "Título da seção de serviços",
    translations: {
      pt: "Nossos Serviços",
      en: "Our Services",
      fr: "Nos Services",
      it: "I Nostri Servizi",
    },
    isActive: true,
  },
  {
    _id: "services2",
    key: "services.subtitle",
    section: "services",
    description: "Subtítulo da seção de serviços",
    translations: {
      pt: "Oferecemos soluções completas e especializadas para diversos setores industriais",
      en: "We offer complete and specialized solutions for various industrial sectors",
      fr: "Nous offrons des solutions complètes et spécialisées pour divers secteurs industriels",
      it: "Offriamo soluzioni complete e specializzate per vari settori industriali",
    },
    isActive: true,
  },
  {
    _id: "services3",
    key: "services.seeDetails",
    section: "services",
    description: "Botão 'Ver Detalhes' dos serviços",
    translations: {
      pt: "Ver Detalhes",
      en: "See Details",
      fr: "Voir Détails",
      it: "Vedi Dettagli",
    },
    isActive: true,
  },
  {
    _id: "services4",
    key: "services.contractService",
    section: "services",
    description: "Botão 'Contratar Serviço'",
    translations: {
      pt: "Contratar Serviço",
      en: "Contract Service",
      fr: "Contracter Service",
      it: "Contratta Servizio",
    },
    isActive: true,
  },

  // ABOUT SECTION
  {
    _id: "about1",
    key: "about.title",
    section: "about",
    description: "Título da seção sobre",
    translations: {
      pt: "Sobre a TechSafe Solutions",
      en: "About TechSafe Solutions",
      fr: "À propos de TechSafe Solutions",
      it: "Chi è TechSafe Solutions",
    },
    isActive: true,
  },
  {
    _id: "about2",
    key: "about.text",
    section: "about",
    description: "Texto principal sobre a empresa",
    translations: {
      pt: "A TechSafe Solutions Sen é uma empresa especializada em soluções avançadas para eletricidade, proteção contra incêndio e automação industrial. Nossa missão é oferecer instalações elétricas conforme normas internacionais, assegurar a segurança contra incêndios e desenvolver soluções de automação que aumentem a produtividade e segurança industrial.",
      en: "TechSafe Solutions Sen is a company specialized in advanced solutions for electricity, fire protection and industrial automation. Our mission is to offer electrical installations according to international standards, ensure fire safety and develop automation solutions that increase industrial productivity and safety.",
      fr: "TechSafe Solutions Sen est une entreprise spécialisée dans les solutions avancées pour l'électricité, la protection incendie et l'automatisation industrielle. Notre mission est d'offrir des installations électriques selon les normes internationales, assurer la sécurité incendie et développer des solutions d'automatisation qui augmentent la productivité et sécurité industrielles.",
      it: "TechSafe Solutions Sen è un'azienda specializzata in soluzioni avanzate per elettricità, protezione antincendio e automazione industriale. La nostra missione è offrire installazioni elettriche secondo standard internazionali, garantire sicurezza antincendio e sviluppare soluzioni di automazione che aumentino produttività e sicurezza industriali.",
    },
    isActive: true,
  },
  {
    _id: "about3",
    key: "about.mission.title",
    section: "about",
    description: "Título da missão",
    translations: {
      pt: "Nossa Missão",
      en: "Our Mission",
      fr: "Notre Mission",
      it: "La Nostra Missione",
    },
    isActive: true,
  },
  {
    _id: "about4",
    key: "about.mission.text",
    section: "about",
    description: "Texto da missão",
    translations: {
      pt: "Oferecer soluções de alta qualidade em eletricidade, segurança contra incêndios e automação industrial, garantindo a satisfação total dos nossos clientes através de serviços especializados e tecnologia de ponta.",
      en: "To provide high-quality solutions in electricity, fire safety, and industrial automation, ensuring total customer satisfaction through specialized services and cutting-edge technology.",
      fr: "Offrir des solutions de haute qualité en électricité, sécurité incendie et automatisation industrielle, garantissant la satisfaction totale de nos clients grâce à des services spécialisés et une technologie de pointe.",
      it: "Offrire soluzioni di alta qualità in elettricità, sicurezza antincendio e automazione industriale, garantendo la soddisfazione totale dei nostri clienti attraverso servizi specializzati e tecnologia all'avanguardia.",
    },
    isActive: true,
  },
  {
    _id: "about5",
    key: "about.vision.title",
    section: "about",
    description: "Título da visão",
    translations: {
      pt: "Nossa Visão",
      en: "Our Vision",
      fr: "Notre Vision",
      it: "La Nostra Visione",
    },
    isActive: true,
  },
  {
    _id: "about6",
    key: "about.vision.text",
    section: "about",
    description: "Texto da visão",
    translations: {
      pt: "Ser referência no setor de soluções industriais na África Ocidental, reconhecida pela excelência técnica, inovação constante e compromisso com a segurança e eficiência dos processos industriais.",
      en: "To be a reference in the industrial solutions sector in West Africa, recognized for technical excellence, constant innovation, and commitment to the safety and efficiency of industrial processes.",
      fr: "Être une référence dans le secteur des solutions industrielles en Afrique de l'Ouest, reconnue pour l'excellence technique, l'innovation constante et l'engagement envers la sécurité et l'efficacité des processus industriels.",
      it: "Essere un riferimento nel settore delle soluzioni industriali nell'Africa Occidentale, riconosciuta per l'eccellenza tecnica, l'innovazione costante e l'impegno verso la sicurezza e l'efficienza dei processi industriali.",
    },
    isActive: true,
  },

  // VIDEO SECTION
  {
    _id: "video1",
    key: "video.title",
    section: "video",
    description: "Título da seção de vídeo",
    translations: {
      pt: "Conheça a TechSafe Solutions",
      en: "Discover TechSafe Solutions",
      fr: "Découvrez TechSafe Solutions",
      it: "Scopri TechSafe Solutions",
    },
    isActive: true,
  },
  {
    _id: "video2",
    key: "video.subtitle",
    section: "video",
    description: "Subtítulo da seção de vídeo",
    translations: {
      pt: "Veja como transformamos ideias em soluções industriais de excelência",
      en: "See how we transform ideas into industrial solutions of excellence",
      fr: "Découvrez comment nous transformons les idées en solutions industrielles d'excellence",
      it: "Scopri come trasformiamo le idee in soluzioni industriali di eccellenza",
    },
    isActive: true,
  },
  {
    _id: "video3",
    key: "video.url",
    section: "video",
    description: "URL do vídeo principal",
    translations: {
      pt: "/video/tech-safe.mp4",
      en: "/video/tech-safe.mp4",
      fr: "/video/tech-safe.mp4",
      it: "/video/tech-safe.mp4",
    },
    isActive: true,
  },
  {
    _id: "video4",
    key: "video.duration",
    section: "video",
    description: "Duração do vídeo",
    translations: {
      pt: "2:30",
      en: "2:30",
      fr: "2:30",
      it: "2:30",
    },
    isActive: true,
  },
  {
    _id: "video5",
    key: "video.feature1.title",
    section: "video",
    description: "Título do primeiro destaque",
    translations: {
      pt: "Anos de Experiência",
      en: "Years of Experience",
      fr: "Années d'Expérience",
      it: "Anni di Esperienza",
    },
    isActive: true,
  },
  {
    _id: "video6",
    key: "video.feature1.number",
    section: "video",
    description: "Número do primeiro destaque",
    translations: {
      pt: "15+",
      en: "15+",
      fr: "15+",
      it: "15+",
    },
    isActive: true,
  },
  {
    _id: "video7",
    key: "video.feature1.description",
    section: "video",
    description: "Descrição do primeiro destaque",
    translations: {
      pt: "Soluções comprovadas no mercado",
      en: "Proven market solutions",
      fr: "Solutions éprouvées sur le marché",
      it: "Soluzioni comprovate sul mercato",
    },
    isActive: true,
  },

  // STATS SECTION
  {
    _id: "stats1",
    key: "stats.title",
    section: "stats",
    description: "Título da seção de estatísticas",
    translations: {
      pt: "Nossos Números",
      en: "Our Numbers",
      fr: "Nos Chiffres",
      it: "I Nostri Numeri",
    },
    isActive: true,
  },
  {
    _id: "stats2",
    key: "stats.subtitle",
    section: "stats",
    description: "Subtítulo da seção de estatísticas",
    translations: {
      pt: "Resultados que Impressionam",
      en: "Results that Impress",
      fr: "Résultats qui Impressionnent",
      it: "Risultati che Impressionano",
    },
    isActive: true,
  },
  {
    _id: "stats3",
    key: "stats.description",
    section: "stats",
    description: "Descrição da seção de estatísticas",
    translations: {
      pt: "Nossa trajetória de excelência refletida em números que demonstram comprometimento, qualidade e inovação em cada projeto desenvolvido.",
      en: "Our excellence trajectory reflected in numbers that demonstrate commitment, quality and innovation in every project developed.",
      fr: "Notre trajectoire d'excellence reflétée dans des chiffres qui démontrent l'engagement, la qualité et l'innovation dans chaque projet développé.",
      it: "La nostra traiettoria di eccellenza riflessa in numeri che dimostrano impegno, qualità e innovazione in ogni progetto sviluppato.",
    },
    isActive: true,
  },
  {
    _id: "stats4",
    key: "stats.experience.label",
    section: "stats",
    description: "Label da estatística de experiência",
    translations: {
      pt: "Anos de Experiência",
      en: "Years of Experience",
      fr: "Années d'Expérience",
      it: "Anni di Esperienza",
    },
    isActive: true,
  },
  {
    _id: "stats5",
    key: "stats.projects.label",
    section: "stats",
    description: "Label da estatística de projetos",
    translations: {
      pt: "Projetos Concluídos",
      en: "Completed Projects",
      fr: "Projets Terminés",
      it: "Progetti Completati",
    },
    isActive: true,
  },
  {
    _id: "stats6",
    key: "stats.clients.label",
    section: "stats",
    description: "Label da estatística de clientes",
    translations: {
      pt: "Clientes Satisfeitos",
      en: "Satisfied Clients",
      fr: "Clients Satisfaits",
      it: "Clienti Soddisfatti",
    },
    isActive: true,
  },
  {
    _id: "stats7",
    key: "stats.support.label",
    section: "stats",
    description: "Label da estatística de suporte",
    translations: {
      pt: "Suporte Técnico",
      en: "Technical Support",
      fr: "Support Technique",
      it: "Supporto Tecnico",
    },
    isActive: true,
  },

  // CONTACT SECTION
  {
    _id: "contact1",
    key: "contact.title",
    section: "contact",
    description: "Título da seção de contato",
    translations: {
      pt: "Entre em Contato",
      en: "Get in Touch",
      fr: "Contactez-nous",
      it: "Contattaci",
    },
    isActive: true,
  },
  {
    _id: "contact2",
    key: "contact.subtitle",
    section: "contact",
    description: "Subtítulo da seção de contato",
    translations: {
      pt: "Estamos prontos para desenvolver a solução ideal para seu projeto",
      en: "We are ready to develop the ideal solution for your project",
      fr: "Nous sommes prêts à développer la solution idéale pour votre projet",
      it: "Siamo pronti a sviluppare la soluzione ideale per il tuo progetto",
    },
    isActive: true,
  },
  {
    _id: "contact3",
    key: "contact.form.title",
    section: "contact",
    description: "Título do formulário",
    translations: {
      pt: "Solicitar Orçamento",
      en: "Request Quote",
      fr: "Demander un Devis",
      it: "Richiedi Preventivo",
    },
    isActive: true,
  },
  {
    _id: "contact4",
    key: "contact.form.name",
    section: "contact",
    description: "Label do campo nome",
    translations: {
      pt: "Nome Completo",
      en: "Full Name",
      fr: "Nom Complet",
      it: "Nome Completo",
    },
    isActive: true,
  },
  {
    _id: "contact5",
    key: "contact.form.name.placeholder",
    section: "contact",
    description: "Placeholder do campo nome",
    translations: {
      pt: "Seu nome completo",
      en: "Your full name",
      fr: "Votre nom complet",
      it: "Il tuo nome completo",
    },
    isActive: true,
  },
  {
    _id: "contact6",
    key: "contact.form.email",
    section: "contact",
    description: "Label do campo email",
    translations: {
      pt: "Email",
      en: "Email",
      fr: "Email",
      it: "Email",
    },
    isActive: true,
  },
  {
    _id: "contact7",
    key: "contact.form.email.placeholder",
    section: "contact",
    description: "Placeholder do campo email",
    translations: {
      pt: "seu.email@exemplo.com",
      en: "your.email@example.com",
      fr: "votre.email@exemple.com",
      it: "tua.email@esempio.com",
    },
    isActive: true,
  },
  {
    _id: "contact8",
    key: "contact.form.phone",
    section: "contact",
    description: "Label do campo telefone",
    translations: {
      pt: "Telefone",
      en: "Phone",
      fr: "Téléphone",
      it: "Telefono",
    },
    isActive: true,
  },
  {
    _id: "contact9",
    key: "contact.form.company",
    section: "contact",
    description: "Label do campo empresa",
    translations: {
      pt: "Empresa",
      en: "Company",
      fr: "Entreprise",
      it: "Azienda",
    },
    isActive: true,
  },
  {
    _id: "contact10",
    key: "contact.form.service",
    section: "contact",
    description: "Label do campo serviço",
    translations: {
      pt: "Serviço de Interesse",
      en: "Service of Interest",
      fr: "Service d'Intérêt",
      it: "Servizio di Interesse",
    },
    isActive: true,
  },
  {
    _id: "contact11",
    key: "contact.form.message",
    section: "contact",
    description: "Label do campo mensagem",
    translations: {
      pt: "Mensagem",
      en: "Message",
      fr: "Message",
      it: "Messaggio",
    },
    isActive: true,
  },
  {
    _id: "contact12",
    key: "contact.form.message.placeholder",
    section: "contact",
    description: "Placeholder do campo mensagem",
    translations: {
      pt: "Descreva detalhadamente seu projeto ou necessidade...",
      en: "Describe your project or need in detail...",
      fr: "Décrivez en détail votre projet ou besoin...",
      it: "Descrivi in dettaglio il tuo progetto o necessità...",
    },
    isActive: true,
  },
  {
    _id: "contact13",
    key: "contact.form.submit",
    section: "contact",
    description: "Botão de envio do formulário",
    translations: {
      pt: "Enviar Solicitação",
      en: "Send Request",
      fr: "Envoyer Demande",
      it: "Invia Richiesta",
    },
    isActive: true,
  },
  {
    _id: "contact14",
    key: "contact.info.email.label",
    section: "contact",
    description: "Label do email de contato",
    translations: {
      pt: "Email",
      en: "Email",
      fr: "Email",
      it: "Email",
    },
    isActive: true,
  },
  {
    _id: "contact15",
    key: "contact.info.phone.label",
    section: "contact",
    description: "Label do telefone de contato",
    translations: {
      pt: "Telefone",
      en: "Phone",
      fr: "Téléphone",
      it: "Telefono",
    },
    isActive: true,
  },
  {
    _id: "contact16",
    key: "contact.info.location.label",
    section: "contact",
    description: "Label da localização",
    translations: {
      pt: "Localização",
      en: "Location",
      fr: "Localisation",
      it: "Posizione",
    },
    isActive: true,
  },
  {
    _id: "contact17",
    key: "contact.info.hours.label",
    section: "contact",
    description: "Label do horário de funcionamento",
    translations: {
      pt: "Horário de Atendimento",
      en: "Business Hours",
      fr: "Heures d'Ouverture",
      it: "Orari di Apertura",
    },
    isActive: true,
  },

  // FOOTER SECTION
  {
    _id: "footer1",
    key: "footer.text",
    section: "footer",
    description: "Texto principal do rodapé",
    translations: {
      pt: "Soluções avançadas em eletricidade, segurança e automação industrial.",
      en: "Advanced solutions in electricity, safety and industrial automation.",
      fr: "Solutions avancées en électricité, sécurité et automatisation industrielle.",
      it: "Soluzioni avanzate in elettricità, sicurezza e automazione industriale.",
    },
    isActive: true,
  },
  {
    _id: "footer2",
    key: "footer.copyright",
    section: "footer",
    description: "Texto de copyright",
    translations: {
      pt: "Todos os direitos reservados.",
      en: "All rights reserved.",
      fr: "Tous droits réservés.",
      it: "Tutti i diritti riservati.",
    },
    isActive: true,
  },
]

// Traduções do Admin
export const adminTranslations = {
  pt: {
    // Header
    "admin.title": "TechSafe Admin",
    "admin.subtitle": "Painel de Gerenciamento de Conteúdo",
    "admin.logout": "Sair",

    // Navigation
    "nav.overview": "Visão Geral",
    "nav.content": "Conteúdo",
    "nav.services": "Serviços",
    "nav.languages": "Idiomas",
    "nav.contact": "Contato",
    "nav.settings": "Configurações",

    // Overview
    "overview.totalContent": "Conteúdos",
    "overview.totalServices": "Serviços",
    "overview.totalLanguages": "Idiomas",
    "overview.translationProgress": "Progresso",
    "overview.textsManaged": "Textos gerenciados",
    "overview.servicesRegistered": "Serviços cadastrados",
    "overview.activeLanguages": "Idiomas ativos",
    "overview.completeTranslation": "Tradução completa",

    // Content Management
    "content.title": "Gerenciamento de Conteúdo",
    "content.description": "Organize e edite todo o conteúdo do site por seção",
    "content.newContent": "Novo Conteúdo",
    "content.search": "Buscar conteúdo...",
    "content.noContent": "Nenhum conteúdo encontrado",
    "content.noContentSection": "Nenhum conteúdo nesta seção",
    "content.adjustSearch": "Tente ajustar os termos de busca",
    "content.addContent": "Adicione conteúdo para começar a gerenciar esta seção",

    // Sections
    "section.header": "Cabeçalho",
    "section.header.desc": "Menu de navegação e elementos do topo",
    "section.hero": "Seção Principal",
    "section.hero.desc": "Banner principal e call-to-action",
    "section.services": "Serviços",
    "section.services.desc": "Textos da seção de serviços",
    "section.about": "Sobre Nós",
    "section.about.desc": "Informações da empresa, missão e visão",
    "section.video": "Vídeo",
    "section.video.desc": "Seção de apresentação em vídeo",
    "section.stats": "Estatísticas",
    "section.stats.desc": "Números e conquistas da empresa",
    "section.contact": "Contato",
    "section.contact.desc": "Formulário e informações de contato",
    "section.footer": "Rodapé",
    "section.footer.desc": "Informações do rodapé",

    // Actions
    "action.edit": "Editar",
    "action.save": "Salvar",
    "action.cancel": "Cancelar",
    "action.delete": "Excluir",
    "action.add": "Adicionar",
    "action.saving": "Salvando...",
    "action.saved": "Salvo",

    // Messages
    "message.success": "Operação realizada com sucesso!",
    "message.error": "Erro ao realizar operação. Tente novamente.",
    "message.loading": "Carregando...",
    "message.noTranslation": "Sem tradução disponível",

    // Contact Data
    "contactData.title": "Dados de Contato",
    "contactData.description": "Gerencie as informações de contato da empresa",
    "contactData.email": "Email",
    "contactData.phone": "Telefone",
    "contactData.address": "Endereço",
    "contactData.businessHours": "Horário de Funcionamento",
    "contactData.mondayFriday": "Segunda - Sexta",
    "contactData.saturday": "Sábado",
    "contactData.sunday": "Domingo",
  },
  en: {
    // Header
    "admin.title": "TechSafe Admin",
    "admin.subtitle": "Content Management Panel",
    "admin.logout": "Logout",

    // Navigation
    "nav.overview": "Overview",
    "nav.content": "Content",
    "nav.services": "Services",
    "nav.languages": "Languages",
    "nav.contact": "Contact",
    "nav.settings": "Settings",

    // Overview
    "overview.totalContent": "Content",
    "overview.totalServices": "Services",
    "overview.totalLanguages": "Languages",
    "overview.translationProgress": "Progress",
    "overview.textsManaged": "Managed texts",
    "overview.servicesRegistered": "Registered services",
    "overview.activeLanguages": "Active languages",
    "overview.completeTranslation": "Complete translation",

    // Content Management
    "content.title": "Content Management",
    "content.description": "Organize and edit all website content by section",
    "content.newContent": "New Content",
    "content.search": "Search content...",
    "content.noContent": "No content found",
    "content.noContentSection": "No content in this section",
    "content.adjustSearch": "Try adjusting search terms",
    "content.addContent": "Add content to start managing this section",

    // Sections
    "section.header": "Header",
    "section.header.desc": "Navigation menu and top elements",
    "section.hero": "Main Section",
    "section.hero.desc": "Main banner and call-to-action",
    "section.services": "Services",
    "section.services.desc": "Services section texts",
    "section.about": "About Us",
    "section.about.desc": "Company information, mission and vision",
    "section.video": "Video",
    "section.video.desc": "Video presentation section",
    "section.stats": "Statistics",
    "section.stats.desc": "Company numbers and achievements",
    "section.contact": "Contact",
    "section.contact.desc": "Contact form and information",
    "section.footer": "Footer",
    "section.footer.desc": "Footer information",

    // Actions
    "action.edit": "Edit",
    "action.save": "Save",
    "action.cancel": "Cancel",
    "action.delete": "Delete",
    "action.add": "Add",
    "action.saving": "Saving...",
    "action.saved": "Saved",

    // Messages
    "message.success": "Operation completed successfully!",
    "message.error": "Error performing operation. Please try again.",
    "message.loading": "Loading...",
    "message.noTranslation": "No translation available",

    // Contact Data
    "contactData.title": "Contact Data",
    "contactData.description": "Manage company contact information",
    "contactData.email": "Email",
    "contactData.phone": "Phone",
    "contactData.address": "Address",
    "contactData.businessHours": "Business Hours",
    "contactData.mondayFriday": "Monday - Friday",
    "contactData.saturday": "Saturday",
    "contactData.sunday": "Sunday",
  },
  fr: {
    // Header
    "admin.title": "TechSafe Admin",
    "admin.subtitle": "Panneau de Gestion de Contenu",
    "admin.logout": "Déconnexion",

    // Navigation
    "nav.overview": "Aperçu",
    "nav.content": "Contenu",
    "nav.services": "Services",
    "nav.languages": "Langues",
    "nav.contact": "Contact",
    "nav.settings": "Paramètres",

    // Overview
    "overview.totalContent": "Contenu",
    "overview.totalServices": "Services",
    "overview.totalLanguages": "Langues",
    "overview.translationProgress": "Progrès",
    "overview.textsManaged": "Textes gérés",
    "overview.servicesRegistered": "Services enregistrés",
    "overview.activeLanguages": "Langues actives",
    "overview.completeTranslation": "Traduction complète",

    // Content Management
    "content.title": "Gestion de Contenu",
    "content.description": "Organisez et modifiez tout le contenu du site par section",
    "content.newContent": "Nouveau Contenu",
    "content.search": "Rechercher contenu...",
    "content.noContent": "Aucun contenu trouvé",
    "content.noContentSection": "Aucun contenu dans cette section",
    "content.adjustSearch": "Essayez d'ajuster les termes de recherche",
    "content.addContent": "Ajoutez du contenu pour commencer à gérer cette section",

    // Sections
    "section.header": "En-tête",
    "section.header.desc": "Menu de navigation et éléments du haut",
    "section.hero": "Section Principale",
    "section.hero.desc": "Bannière principale et appel à l'action",
    "section.services": "Services",
    "section.services.desc": "Textes de la section services",
    "section.about": "À Propos",
    "section.about.desc": "Informations sur l'entreprise, mission et vision",
    "section.video": "Vidéo",
    "section.video.desc": "Section de présentation vidéo",
    "section.stats": "Statistiques",
    "section.stats.desc": "Chiffres et réalisations de l'entreprise",
    "section.contact": "Contact",
    "section.contact.desc": "Formulaire et informations de contact",
    "section.footer": "Pied de page",
    "section.footer.desc": "Informations du pied de page",

    // Actions
    "action.edit": "Modifier",
    "action.save": "Sauvegarder",
    "action.cancel": "Annuler",
    "action.delete": "Supprimer",
    "action.add": "Ajouter",
    "action.saving": "Sauvegarde...",
    "action.saved": "Sauvegardé",

    // Messages
    "message.success": "Opération réalisée avec succès!",
    "message.error": "Erreur lors de l'opération. Veuillez réessayer.",
    "message.loading": "Chargement...",
    "message.noTranslation": "Aucune traduction disponible",

    // Contact Data
    "contactData.title": "Données de Contact",
    "contactData.description": "Gérer les informations de contact de l'entreprise",
    "contactData.email": "Email",
    "contactData.phone": "Téléphone",
    "contactData.address": "Adresse",
    "contactData.businessHours": "Heures d'Ouverture",
    "contactData.mondayFriday": "Lundi - Vendredi",
    "contactData.saturday": "Samedi",
    "contactData.sunday": "Dimanche",
  },
  it: {
    // Header
    "admin.title": "TechSafe Admin",
    "admin.subtitle": "Pannello di Gestione Contenuti",
    "admin.logout": "Esci",

    // Navigation
    "nav.overview": "Panoramica",
    "nav.content": "Contenuto",
    "nav.services": "Servizi",
    "nav.languages": "Lingue",
    "nav.contact": "Contatto",
    "nav.settings": "Impostazioni",

    // Overview
    "overview.totalContent": "Contenuti",
    "overview.totalServices": "Servizi",
    "overview.totalLanguages": "Lingue",
    "overview.translationProgress": "Progresso",
    "overview.textsManaged": "Testi gestiti",
    "overview.servicesRegistered": "Servizi registrati",
    "overview.activeLanguages": "Lingue attive",
    "overview.completeTranslation": "Traduzione completa",

    // Content Management
    "content.title": "Gestione Contenuti",
    "content.description": "Organizza e modifica tutti i contenuti del sito per sezione",
    "content.newContent": "Nuovo Contenuto",
    "content.search": "Cerca contenuto...",
    "content.noContent": "Nessun contenuto trovato",
    "content.noContentSection": "Nessun contenuto in questa sezione",
    "content.adjustSearch": "Prova ad aggiustare i termini di ricerca",
    "content.addContent": "Aggiungi contenuto per iniziare a gestire questa sezione",

    // Sections
    "section.header": "Intestazione",
    "section.header.desc": "Menu di navigazione ed elementi superiori",
    "section.hero": "Sezione Principale",
    "section.hero.desc": "Banner principale e call-to-action",
    "section.services": "Servizi",
    "section.services.desc": "Testi della sezione servizi",
    "section.about": "Chi Siamo",
    "section.about.desc": "Informazioni aziendali, missione e visione",
    "section.video": "Video",
    "section.video.desc": "Sezione presentazione video",
    "section.stats": "Statistiche",
    "section.stats.desc": "Numeri e risultati dell'azienda",
    "section.contact": "Contatto",
    "section.contact.desc": "Modulo e informazioni di contatto",
    "section.footer": "Piè di pagina",
    "section.footer.desc": "Informazioni del piè di pagina",

    // Actions
    "action.edit": "Modifica",
    "action.save": "Salva",
    "action.cancel": "Annulla",
    "action.delete": "Elimina",
    "action.add": "Aggiungi",
    "action.saving": "Salvando...",
    "action.saved": "Salvato",

    // Messages
    "message.success": "Operazione completata con successo!",
    "message.error": "Errore nell'eseguire l'operazione. Riprova.",
    "message.loading": "Caricamento...",
    "message.noTranslation": "Nessuna traduzione disponibile",

    // Contact Data
    "contactData.title": "Dati di Contatto",
    "contactData.description": "Gestisci le informazioni di contatto dell'azienda",
    "contactData.email": "Email",
    "contactData.phone": "Telefono",
    "contactData.address": "Indirizzo",
    "contactData.businessHours": "Orari di Apertura",
    "contactData.mondayFriday": "Lunedì - Venerdì",
    "contactData.saturday": "Sabato",
    "contactData.sunday": "Domenica",
  },
}
