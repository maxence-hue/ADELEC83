# Configuration Sanity CMS pour ADELEC83

## Vue d'ensemble

Ce projet utilise **Sanity CMS** pour gérer le contenu des **réalisations** et du **blog**.

## Configuration

### 1. Créer un projet Sanity

1. Allez sur [sanity.io](https://www.sanity.io/) et créez un compte
2. Créez un nouveau projet
3. Notez votre `Project ID` et `Dataset` (généralement "production")

### 2. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet et ajoutez :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_token_api
```

### 3. Installation de Sanity Studio

Pour gérer le contenu, vous devez installer Sanity Studio :

```bash
# Dans un nouveau dossier (hors de ce projet)
npm create sanity@latest -- --project <VOTRE_PROJECT_ID> --dataset production
```

Puis copiez les schémas depuis `/sanity/schemas/` vers le dossier `schemas/` de votre Sanity Studio.

## Schémas

### Réalisations (`realisation`)

Chaque réalisation contient :
- **title** : Titre de la réalisation
- **slug** : URL de la réalisation
- **description** : Description courte
- **image** : Image principale
- **category** : Type de projet (villa, commercial, hotel, etc.)
- **serviceType** : Tags pour filtrer par service (array)
  - `electricite`
  - `batiments-collectifs-tertiaires`
  - `climatisation`
  - `domotique`
  - `bornes`
  - `photovoltaique`
  - `villas-residences-standing`
  - `luxe-projets-exception`
- **featured** : Afficher sur la page d'accueil
- **location** : Localisation
- **year** : Année de réalisation
- **client** : Nom du client
- **tags** : Tags supplémentaires
- **content** : Contenu détaillé (Portable Text)
- **orderIndex** : Ordre d'affichage
- **publishedAt** : Date de publication

### Articles de Blog (`post`)

Chaque article contient :
- **title** : Titre de l'article
- **slug** : URL de l'article
- **excerpt** : Extrait
- **mainImage** : Image principale
- **author** : Auteur (nom + photo)
- **categories** : Catégories
- **tags** : Tags
- **content** : Contenu (Portable Text)
- **featured** : Mise en avant
- **publishedAt** : Date de publication
- **seo** : Métadonnées SEO

## Filtrage par type de service

Les réalisations sont filtrées automatiquement sur chaque page de service grâce au champ `serviceType`.

Par exemple, la page `/services/villas-residences-standing` affiche uniquement les réalisations avec le tag `villas-residences-standing`.

## Requêtes GROQ

Les requêtes principales sont définies dans `/lib/sanity.ts` :

```typescript
// Toutes les réalisations
const realisations = await sanityClient.fetch(REALISATION_QUERY);

// Réalisations par type de service
const realisations = await sanityClient.fetch(
  REALISATIONS_BY_SERVICE_TYPE_QUERY,
  { serviceType: 'villas-residences-standing' }
);

// Réalisations mises en avant
const realisations = await sanityClient.fetch(FEATURED_REALISATIONS_QUERY);
```

## Images

Pour afficher une image Sanity :

```typescript
import { urlFor } from '@/lib/sanity';

const imageUrl = urlFor(realisation.image).width(800).height(600).url();
```

## Migration depuis Supabase

Les pages utilisent maintenant Sanity au lieu de Supabase pour les réalisations et le blog. Supabase reste utilisé pour les autres contenus (témoignages, FAQ, etc.).
