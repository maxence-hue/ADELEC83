import type { Metadata } from 'next';
import { company, siteUrl, cities } from './config';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.legalName} | ${company.baseline}`,
    template: `%s | ${company.legalName}`
  },
  description:
    "ADElec 83 accompagne depuis 1995 les bâtiments collectifs, tertiaires et résidentiels du Var en électricité, domotique, climatisation et énergies renouvelables.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: company.legalName,
    title: company.name,
    description:
      "Expert électricien à Solliès-Pont : rénovation, maintenance, domotique, climatisation, photovoltaïque et bornes de recharge."
  },
  twitter: {
    card: 'summary_large_image',
    title: company.name,
    description: company.baseline
  },
  alternates: {
    canonical: siteUrl
  }
};

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: company.name,
  telephone: company.phone,
  email: company.email,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressCountry: company.address.country
  },
  openingHoursSpecification: company.hours.map((item) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: item.day,
    opens: '08:00',
    closes: '18:00'
  }))
};

export const breadcrumbJsonLd = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: new URL(item.href, siteUrl).toString()
  }))
});

export const serviceJsonLd = (service: {
  name: string;
  description: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    telephone: company.phone
  },
  areaServed: cities,
  url: new URL(`/services/${service.slug}`, siteUrl).toString()
});

export const blogPostingJsonLd = (article: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.description,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    '@type': 'Person',
    name: 'Équipe ADElec 83'
  },
  publisher: {
    '@type': 'Organization',
    name: company.legalName
  },
  mainEntityOfPage: new URL(`/blog/${article.slug}`, siteUrl).toString()
});
