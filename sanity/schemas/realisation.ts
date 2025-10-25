// Schéma Sanity pour les Réalisations
// Ce fichier sert de documentation pour la structure des données dans Sanity Studio

export default {
  name: 'realisation',
  title: 'Réalisations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        },
      ],
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Villa', value: 'villa' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Hôtel', value: 'hotel' },
          { title: 'Résidentiel', value: 'residential' },
          { title: 'Industriel', value: 'industrial' },
          { title: 'Rénovation', value: 'renovation' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'serviceType',
      title: 'Type de service',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Électricité générale', value: 'electricite' },
          { title: 'Bâtiments collectifs et tertiaires', value: 'batiments-collectifs-tertiaires' },
          { title: 'Climatisation', value: 'climatisation' },
          { title: 'Domotique', value: 'domotique' },
          { title: 'Bornes de recharge', value: 'bornes' },
          { title: 'Photovoltaïque', value: 'photovoltaique' },
          { title: 'Villas & Résidences de standing', value: 'villas-residences-standing' },
          { title: 'Luxe & Projets d\'exception', value: 'luxe-projets-exception' },
        ],
      },
      description: 'Sélectionnez les types de services liés à cette réalisation',
    },
    {
      name: 'featured',
      title: 'Mise en avant',
      type: 'boolean',
      initialValue: false,
      description: 'Afficher sur la page d\'accueil',
    },
    {
      name: 'location',
      title: 'Localisation',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Année',
      type: 'number',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Nom du client (optionnel)',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'orderIndex',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Nombre pour trier les réalisations (plus petit = affiché en premier)',
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'location',
    },
  },
};
