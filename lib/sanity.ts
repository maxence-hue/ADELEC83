import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration du client Sanity
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types pour les réalisations
export interface Realisation {
  _id: string;
  _type: 'realisation';
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  category: 'villa' | 'commercial' | 'hotel' | 'residential' | 'industrial' | 'renovation';
  serviceType: string[]; // Tags pour filtrer par type de service
  featured: boolean;
  location?: string;
  year?: number;
  client?: string;
  tags?: string[];
  content?: any[]; // Portable Text
  orderIndex?: number;
  publishedAt: string;
}

// Types pour les articles de blog
export interface BlogPost {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  author?: {
    name: string;
    image?: any;
  };
  categories?: string[];
  tags?: string[];
  content?: any[]; // Portable Text
  featured: boolean;
  publishedAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Requêtes GROQ réutilisables
export const REALISATION_QUERY = `*[_type == "realisation"] | order(orderIndex asc, publishedAt desc)`;
export const REALISATION_BY_SLUG_QUERY = `*[_type == "realisation" && slug.current == $slug][0]`;
export const FEATURED_REALISATIONS_QUERY = `*[_type == "realisation" && featured == true] | order(orderIndex asc) [0...4]`;
export const REALISATIONS_BY_SERVICE_TYPE_QUERY = `*[_type == "realisation" && $serviceType in serviceType] | order(orderIndex asc, publishedAt desc)`;

export const BLOG_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)`;
export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
export const FEATURED_BLOG_POSTS_QUERY = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3]`;
