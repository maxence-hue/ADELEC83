# ADElec 83 — Site vitrine Next.js

Site vitrine pour **ADElec 83 — Alehause Domotique Électricité** réalisé avec Next.js 14 (App Router), TypeScript et Tailwind CSS. L'application est prête pour un déploiement immédiat sur Vercel.

## Prérequis

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Scripts

- `npm run dev` — Démarre le serveur de développement.
- `npm run build` — Génère la version de production.
- `npm run start` — Lance l'application compilée.
- `npm run lint` — Analyse statique via ESLint.

## Structure principale

```
app/
  layout.tsx           # Layout global, Header/Footer, Mobile CTA
  (site)/              # Pages publiques (accueil, services, blog, etc.)
  api/contact/         # Route POST pour valider les formulaires
app/components/        # UI réutilisables (Button, Section, Header, ...)
app/styles/globals.css # Styles Tailwind globaux
content/
  services/            # Fiches services (Markdown)
  blog/                # Articles (MDX)
  realisations/        # Réalisations (Markdown)
lib/                   # Config, SEO helpers, parsing contenu
public/                # Favicon, icônes SVG, sitemap, robots
```

## Contenus éditoriaux

- **Services** : fichiers Markdown dans `content/services`. Frontmatter obligatoire (`title`, `excerpt`, `hero`, `benefits`, `deliverables`, `process`, `faq`).
- **Blog** : fichiers MDX dans `content/blog`. Frontmatter (`title`, `description`, `date`, `author`, `tags`). Possibilité d'utiliser des composants React légers.
- **Réalisations** : Markdown dans `content/realisations` avec `title`, `description`, `ville`, `annee`, `tags`.

Chaque mise à jour de contenu nécessite un commit Git pour être déployée.

## Bonnes pratiques

- Utiliser exclusivement des visuels SVG ou intégrer ultérieurement des images légères via Git.
- Respecter les contrastes et les règles d'accessibilité (focus visibles, alternatives textuelles).
- Pour ajouter des icônes, placer les SVG dans `public/icons`.

## Déploiement Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le projet dans Vercel (Next.js + App Router détectés automatiquement).
3. Définir `NODE_VERSION` sur 18+ si nécessaire.

## TODO

- Implémenter l'envoi réel du formulaire de contact (SMTP/Resend) dans `app/api/contact/route.ts`.
