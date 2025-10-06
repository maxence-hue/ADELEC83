# ADElec 83 — Site vitrine Next.js

Site vitrine pour ADElec 83 (Alehause Domotique Électricité) développé avec Next.js 14 (App Router), TypeScript et Tailwind CSS. Le projet est prêt pour un déploiement immédiat sur Vercel.

## Prérequis

- Node.js 18 ou supérieur
- npm 9+

## Installation

```bash
npm install
```

## Scripts npm

- `npm run dev` — lance le serveur de développement sur [http://localhost:3000](http://localhost:3000)
- `npm run build` — construit l’application pour la production
- `npm run start` — démarre le serveur en mode production
- `npm run lint` — exécute la configuration ESLint par défaut de Next.js

## Structure du projet

```
app/
  layout.tsx                # Layout racine (metadata + thèmes)
  providers.tsx             # Providers client (next-themes)
  styles/globals.css        # Styles globaux + Tailwind
  (site)/                   # Arborescence des pages publiques
    page.tsx                # Accueil
    services/               # Liste + détails services
    realisations/           # Références chantier
    about/                  # Page À propos
    contact/                # Formulaire de contact
    blog/                   # Actus (liste + article)
    legal/                  # Mentions légales & confidentialité
  api/contact/route.ts      # Endpoint POST pour le formulaire
app/components/             # Design system (Button, Section, FAQ…)
content/
  services/*.md             # Fiches services (Markdown)
  blog/*.mdx                # Articles & actus (MDX)
  realisations/*.md         # Références chantiers
lib/
  config.ts                 # Coordonnées, navigation, FAQ…
  content.ts                # Chargement/parsing des contenus
  mdx.ts                    # Compilation MD/MDX (remark + rehype)
  seo.ts                    # Helpers SEO & JSON-LD
public/
  icons/*.svg               # Pictos réseaux sociaux
  favicon.svg               # Icône du site
  og-cover.svg              # Visuel Open Graph
  robots.txt, sitemap.xml   # Fichiers SEO statiques
```

## Contenus éditoriaux

- **Services** : modifiez /content/services/*.md. Chaque fichier comprend un frontmatter (titre, résumé, listes) et un corps Markdown pour le détail.
- **Réalisations** : mettez à jour /content/realisations/*.md pour ajouter des projets avec frontmatter (ville, année, tags).
- **Blog / Actus** : écrivez des articles MDX dans /content/blog/*.mdx. Vous pouvez importer des composants React (ex. `FeatureList`).
- **Témoignages, navigation, horaires** : ajustez les données dans `lib/config.ts`.

> ℹ️ Les visuels sont fournis au format SVG uniquement pour respecter les contraintes de dépôt. Ajoutez vos photos/visuels bitmap plus tard via Git si nécessaire.

## Ajouter des photos facilement

1. Préparez vos images (idéalement en **WebP** ou **AVIF** ≤ 2500px) et placez-les dans `public/photos/` pour qu’elles soient servies statiquement par Vercel.
2. Référencez-les dans vos composants avec [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) :
   ```tsx
   import Image from "next/image";

   <Image src="/photos/tableau-electrique.webp" alt="Tableau électrique rénové" width={1200} height={800} className="rounded-2xl" />
   ```
3. Commitez les fichiers images sur GitHub : Vercel les embarquera automatiquement lors du déploiement (aucune configuration supplémentaire nécessaire).
4. Pour des bibliothèques importantes, envisagez un stockage externe (ex. Supabase Storage, Cloudinary). Renseignez alors les URLs distantes dans vos contenus Markdown/MDX.

> 💡 Pensez à optimiser vos médias avant commit (Squoosh, imagemin) et à conserver une structure claire (`public/photos/realisations/…`).

## Accessibilité & UI

- Thème clair/sombre via le toggle intégré (next-themes).
- Styles Tailwind avec focus visibles, contrastes renforcés et support `prefers-reduced-motion`.
- CTA mobile persistant pour contacter ADElec 83 rapidement.

## Déploiement

1. Vérifiez la compilation avec `npm run build`.
2. Poussez le dépôt sur GitHub.
3. Connectez le repo à Vercel et laissez la détection Next.js s’exécuter automatiquement.

## TODO

- Implémenter l’envoi réel des emails dans `/app/api/contact/route.ts` (SMTP, Resend, etc.).
- Ajouter vos médias bitmap optimisés (photos de réalisations, logos partenaires) dans `public/` ou via un CMS.
