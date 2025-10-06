import type { Metadata } from "next";
import { company, navItems, siteUrl } from "./config";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — ${company.baseline}`,
    template: `%s | ${company.name}`
  },
  description: company.description,
  keywords: [
    "électricien",
    "domotique",
    "bornes de recharge",
    "photovoltaïque",
    "Var",
    "Solliès-Pont"
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: company.name,
    images: [`${siteUrl}/og-cover.svg`]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@adelec83",
    site: "@adelec83"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export function createMetadata(options: MetadataOptions = {}): Metadata {
  const {
    title,
    description = company.description,
    path = "/",
    images,
    keywords,
    type = "website",
    publishedTime,
    modifiedTime
  } = options;

  const url = new URL(path, siteUrl);

  const other: Record<string, string> = {};
  if (publishedTime) other.publishedTime = publishedTime;
  if (modifiedTime) other.modifiedTime = modifiedTime;

  return {
    ...defaultMetadata,
    title: title ? `${title} | ${company.name}` : defaultMetadata.title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      type,
      url: url.toString(),
      title: title ? `${title} | ${company.name}` : (defaultMetadata.openGraph?.title as string | undefined),
      description,
      images: images ?? defaultMetadata.openGraph?.images
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | ${company.name}` : undefined,
      description,
      images: images ?? defaultMetadata.openGraph?.images
    },
    alternates: {
      canonical: url.toString()
    },
    other
  } satisfies Metadata;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: company.name,
    description: company.description,
    image: `${siteUrl}/og-cover.png`,
    telephone: company.phone,
    email: company.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressRegion: company.address.region,
      addressCountry: company.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.coordinates.latitude,
      longitude: company.coordinates.longitude
    },
    openingHoursSpecification: company.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.hours.split(" – ")[0]?.replace("h", ":") ?? "08:00",
      closes: slot.hours.split(" – ")[1]?.replace("h", ":") ?? "18:00"
    }))
  };
}

export function breadcrumbJsonLd(pathname: string) {
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`;
      const navMatch = navItems.find((item) => item.href === href);
      const name = navMatch?.title ?? segment.replace(/-/g, " ");
      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: `${siteUrl}${href}`
      };
    });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl
      },
      ...segments
    ]
  };
}
