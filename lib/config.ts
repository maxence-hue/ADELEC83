export const siteUrl = 'https://www.adelec83.fr';

export const company = {
  name: 'ADElec 83 — Alehause Domotique Électricité',
  legalName: 'ADElec 83',
  baseline: 'Électricien depuis 1995 — collectif, tertiaire & résidentiel',
  address: {
    street: "1 Chemin de l'Enclos",
    postalCode: '83210',
    city: 'Solliès-Pont',
    country: 'France'
  },
  phone: '+33 6 17 02 06 37',
  email: 'mc.alehause@sfr.fr',
  hours: [
    { day: 'Lundi', hours: '08h00 – 18h00' },
    { day: 'Mardi', hours: '08h00 – 18h00' },
    { day: 'Mercredi', hours: '08h00 – 18h00' },
    { day: 'Jeudi', hours: '08h00 – 18h00' },
    { day: 'Vendredi', hours: '08h00 – 18h00' }
  ],
  emergency: 'Interventions urgentes pendant les heures ouvrées, réponse en moins de 2h.'
};

export const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export const social = {
  whatsapp: '#',
  linkedin: '#',
  facebook: '#'
};

export const serviceOrder = [
  'batiments-collectifs-tertiaires',
  'climatisation',
  'domotique',
  'bornes-recharge',
  'photovoltaique',
  'depannage-reparation'
];

export const cities = [
  'Solliès-Pont',
  'Toulon',
  'La Valette-du-Var',
  'Hyères',
  'La Garde',
  'La Crau',
  'Le Pradet',
  'Cuers'
];

export const testimonials = [
  {
    name: 'Jean-Marc L.',
    role: 'Gestionnaire de copropriété à Toulon',
    quote:
      "ADElec 83 nous accompagne depuis des années sur nos résidences. Les diagnostics sont clairs et les chantiers toujours livrés à l'heure."
  },
  {
    name: 'Sophie R.',
    role: "Directrice d'hôtel à La Valette-du-Var",
    quote:
      "Installation domotique impeccable : l'équipe a su coordonner les travaux sans perturber notre activité. Service réactif et suivi sérieux."
  },
  {
    name: 'Karim D.',
    role: 'Responsable maintenance site logistique',
    quote:
      "Pour nos bornes de recharge et la mise en sécurité électrique, ADElec 83 a été force de proposition. Les interventions sont rapides et documentées."
  }
];

export const faqs = [
  {
    question: 'Quelle différence entre mise en sécurité et mise aux normes ?',
    answer:
      "La mise en sécurité corrige les points dangereux immédiats (liaisons à la terre, protections différentielles, protection des circuits). La mise aux normes va plus loin en alignant l'installation sur la NF C 15-100 actuelle. Nous vous guidons sur la solution adaptée à votre bâtiment."
  },
  {
    question: 'Quels sont vos délais d\u2019intervention ?',
    answer:
      "Pour les dépannages urgents, nous intervenons sous 24h ouvrées dans le Var. Les projets planifiés disposent d'un calendrier détaillé validé avec vous avant lancement."
  },
  {
    question: 'Quelles garanties proposez-vous ?',
    answer:
      "Nous sommes assurés décennale et responsabilité civile professionnelle. Chaque chantier est livré avec ses attestations de conformité et une période de maintenance préventive."
  }
];

export const steps = [
  'Étude technique sur site et relevés',
  'Devis détaillé et planification des lots',
  'Préparation et coordination de chantier',
  'Installation et câblage certifié',
  'Mise en service, tests et formation',
  'Maintenance préventive et support'
];

export const serviceCtas = [
  { label: 'Appeler', href: 'tel:+33617020637' },
  { label: 'Demander un devis', href: '/contact' },
  { label: 'Urgence électrique', href: 'tel:+33617020637' }
];
