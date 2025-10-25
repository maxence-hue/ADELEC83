# Guide de configuration Sanity CMS pour ADELEC83

## 🎯 Objectif

Ce guide vous explique comment configurer Sanity CMS pour gérer le **blog** et les **réalisations** du site ADELEC83.

---

## 📋 Prérequis

- Compte Sanity ([créer un compte](https://www.sanity.io/))
- Node.js installé sur votre machine

---

## 🚀 Configuration initiale

### 1. Créer un projet Sanity

1. Allez sur [sanity.io](https://www.sanity.io/)
2. Créez un nouveau projet
3. Choisissez un nom pour votre projet (ex: "ADELEC83 CMS")
4. Notez votre **Project ID** (vous en aurez besoin)

### 2. Configurer les variables d'environnement

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id_ici
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_token_api_ici
```

Pour obtenir le token API :
1. Allez dans les paramètres de votre projet Sanity
2. Cliquez sur "API" → "Tokens"
3. Créez un nouveau token avec les permissions de lecture/écriture

---

## 🏗️ Installation de Sanity Studio

Sanity Studio est l'interface d'administration pour gérer votre contenu.

### Option 1 : Studio séparé (recommandé)

```bash
# Dans un nouveau dossier (en dehors de ce projet)
npm create sanity@latest

# Suivez les instructions :
# - Utilisez votre Project ID existant
# - Dataset : production
# - Schéma : Vide (on ajoutera nos schémas)
```

### Option 2 : Studio intégré dans le projet

```bash
# Installation dans ce projet
npm install sanity @sanity/vision

# Créer le fichier sanity.config.ts
```

### 3. Copier les schémas

Copiez les fichiers de schémas depuis `/sanity/schemas/` vers le dossier `schemas/` de votre Sanity Studio :

- `realisation.ts` - Schéma pour les réalisations
- `post.ts` - Schéma pour le blog

Dans votre fichier `sanity.config.ts` :

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import realisation from './schemas/realisation';
import post from './schemas/post';

export default defineConfig({
  projectId: 'votre_project_id',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [realisation, post],
  },
});
```

### 4. Lancer Sanity Studio

```bash
# Dans le dossier de votre Studio
npm run dev
```

Le studio sera accessible sur `http://localhost:3333`

---

## 📝 Structure des données

### Réalisations

Chaque réalisation contient :

| Champ | Type | Description |
|-------|------|-------------|
| `title` | String | Titre de la réalisation |
| `slug` | Slug | URL unique |
| `description` | Text | Description courte |
| `image` | Image | Photo principale |
| `category` | String | Type de projet (villa, commercial, hotel, etc.) |
| `serviceType` | Array | **Tags pour filtrer par service** |
| `featured` | Boolean | Afficher sur la page d'accueil |
| `location` | String | Localisation |
| `year` | Number | Année de réalisation |
| `client` | String | Nom du client (optionnel) |
| `tags` | Array | Tags supplémentaires |
| `content` | Portable Text | Contenu détaillé |
| `orderIndex` | Number | Ordre d'affichage |
| `publishedAt` | DateTime | Date de publication |

### Types de service disponibles

Lors de la création d'une réalisation, vous pouvez sélectionner un ou plusieurs types de service :

- `electricite` - Électricité générale
- `batiments-collectifs-tertiaires` - Bâtiments collectifs et tertiaires
- `climatisation` - Climatisation
- `domotique` - Domotique
- `bornes` - Bornes de recharge
- `photovoltaique` - Photovoltaïque
- **`villas-residences-standing`** - Villas & Résidences de standing
- **`luxe-projets-exception`** - Luxe & Projets d'exception

**Important** : Les réalisations affichées sur chaque page de service sont filtrées automatiquement selon ces tags.

### Articles de Blog

Chaque article contient :

| Champ | Type | Description |
|-------|------|-------------|
| `title` | String | Titre de l'article |
| `slug` | Slug | URL unique |
| `excerpt` | Text | Extrait court |
| `mainImage` | Image | Image principale |
| `author` | Object | Auteur (nom + photo) |
| `categories` | Array | Catégories |
| `tags` | Array | Tags |
| `content` | Portable Text | Contenu de l'article |
| `featured` | Boolean | Mise en avant |
| `publishedAt` | DateTime | Date de publication |
| `seo` | Object | Métadonnées SEO |

---

## 🎨 Utilisation dans le code

### Récupérer les réalisations par type de service

```typescript
import { sanityClient, REALISATIONS_BY_SERVICE_TYPE_QUERY } from '@/lib/sanity';

// Sur la page Villas & Résidences de standing
const realisations = await sanityClient.fetch(
  REALISATIONS_BY_SERVICE_TYPE_QUERY,
  { serviceType: 'villas-residences-standing' }
);
```

### Afficher une image

```typescript
import { urlFor } from '@/lib/sanity';

const imageUrl = urlFor(realisation.image)
  .width(800)
  .height(600)
  .url();
```

---

## ✅ Liste de vérification

- [ ] Compte Sanity créé
- [ ] Project ID ajouté dans `.env.local`
- [ ] Token API créé et ajouté dans `.env.local`
- [ ] Sanity Studio installé et configuré
- [ ] Schémas copiés et configurés
- [ ] Studio lancé et accessible
- [ ] Première réalisation créée avec les bons tags `serviceType`
- [ ] Premier article de blog créé
- [ ] Images ajoutées et testées

---

## 🔗 Liens utiles

- [Documentation Sanity](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)
- [Image URL Builder](https://www.sanity.io/docs/image-url)

---

## 🆘 Support

En cas de problème :
1. Vérifiez que vos variables d'environnement sont correctes
2. Vérifiez que le Project ID et le Dataset correspondent
3. Assurez-vous que votre token API a les bonnes permissions
4. Consultez la documentation dans `/sanity/README.md`
