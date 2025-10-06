export const siteUrl = "https://www.adelec83.fr";

export const company = {
  name: "ADElec 83",
  legalName: "ADElec 83",
  baseline: "Électricien depuis 1995 — collectif, tertiaire & résidentiel",
  description:
    "ADElec 83 accompagne les copropriétés, entreprises et particuliers du Var pour tous leurs projets électriques, domotiques et énergétiques.",
  phone: "+33 6 17 02 06 37",
  email: "mc.alehause@sfr.fr",
  address: {
    street: "1 Chemin de l’Enclos",
    postalCode: "83210",
    city: "Solliès-Pont",
    region: "Provence-Alpes-Côte d’Azur",
    country: "France"
  },
  coordinates: {
    latitude: 43.1876,
    longitude: 6.0363
  },
  hours: [
    { days: "Lundi", hours: "08:00 – 18:00" },
    { days: "Mardi", hours: "08:00 – 18:00" },
    { days: "Mercredi", hours: "08:00 – 18:00" },
    { days: "Jeudi", hours: "08:00 – 18:00" },
    { days: "Vendredi", hours: "08:00 – 18:00" }
  ],
  emergencyNote:
    "Service d’urgence disponible sur horaires ouvrés : intervention rapide sur défauts électriques critiques."
};

export const navItems = [
  { title: "Accueil", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Réalisations", href: "/realisations" },
  { title: "À propos", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

export const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { title: "Facebook", href: "https://www.facebook.com", icon: "facebook" }
];

export const serviceOrder = [
  "batiments-collectifs-tertiaires",
  "climatisation",
  "domotique",
  "bornes-de-recharge",
  "photovoltaique",
  "depannage-reparation"
];

export const citiesCovered = [
  "Solliès-Pont",
  "Toulon",
  "La Valette-du-Var",
  "La Garde",
  "Hyères",
  "Cuers",
  "La Crau",
  "Le Pradet"
];

export const testimonials = [
  {
    name: "Jean-Pierre M.",
    role: "Syndic bénévole – Solliès-Pont",
    quote:
      "ADElec 83 nous accompagne depuis plus de dix ans sur les résidences du quartier. Les interventions sont planifiées avec soin et la communication est toujours fluide."
  },
  {
    name: "Sonia L.",
    role: "Gérante de PME – Toulon",
    quote:
      "Audit, rénovation du tableau et installation de bornes de recharge : l’équipe a géré le chantier sans interruption de notre activité. Professionnels et réactifs."
  },
  {
    name: "Nicolas R.",
    role: "Particulier – La Garde",
    quote:
      "Pose d’une climatisation gainable et d’une supervision domotique : travail impeccable, explications claires et suivi après chantier."
  }
];

export const faqs = [
  {
    question: "Quelle est la différence entre mise en sécurité et mise aux normes ?",
    answer:
      "La mise en sécurité corrige les risques majeurs (différentiel, liaison équipotentielle, protection des circuits), tandis que la mise aux normes vise une conformité complète à la NF C 15-100. Nous vous conseillons selon l’usage du bâtiment."
  },
  {
    question: "Quels sont les délais d’intervention ?",
    answer:
      "Pour les dépannages urgents, nous intervenons sous 24h ouvrées. Pour les projets, un rendez-vous d’étude est fixé sous une semaine afin d’émettre un devis précis."
  },
  {
    question: "Quelles garanties proposez-vous ?",
    answer:
      "ADElec 83 est couvert par une assurance décennale et responsabilité civile professionnelle. Nos matériels sont garantis fournisseurs et nous assurons le suivi après travaux."
  }
];
