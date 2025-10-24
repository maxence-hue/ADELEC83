# 📸 Tutoriel : Comment ajouter des images sur le site ADELEC83

## 🎯 Objectif
Ce guide vous explique comment ajouter des images sur votre site ADELEC83, que ce soit pour les réalisations, les services, ou les pages de contenu.

---

## 📁 Structure des dossiers d'images

Toutes les images du site sont stockées dans le dossier `/public/images/` :

```
/public/images/
├── hero-batiments-collectifs.jpg
├── hero-climatisation.jpg
├── hero-bornes.jpg
├── hero-domotique.jpg
├── partners/
│   ├── urbat.png
│   ├── daprom.png
│   ├── marignan.png
│   └── ...
└── realisations/
    ├── projet-1.jpg
    ├── projet-2.jpg
    └── ...
```

---

## 🖼️ Méthode 1 : Ajouter des images locales

### Étape 1 : Préparer vos images

1. **Format recommandé** : JPG pour les photos, PNG pour les logos
2. **Taille optimale** :
   - Hero (bannières) : 1920x1080px
   - Réalisations : 800x600px
   - Logos partenaires : 300x200px
3. **Poids** : Compressez vos images (max 500Ko par image)
   - Utilisez [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)

### Étape 2 : Nommer vos images

Utilisez des noms clairs et descriptifs :
- ✅ `climatisation-villa-toulon-2024.jpg`
- ✅ `borne-recharge-entreprise-hyeres.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo finale.jpg` (évitez les espaces)

### Étape 3 : Placer vos images

1. Ouvrez le dossier `/public/images/` dans votre éditeur
2. Créez un sous-dossier si nécessaire (ex: `/public/images/realisations/`)
3. Glissez-déposez vos images dans le dossier

### Étape 4 : Utiliser l'image dans le code

Dans vos composants React/Next.js :

```tsx
import Image from 'next/image';

<Image
  src="/images/realisations/climatisation-villa-toulon-2024.jpg"
  alt="Installation climatisation villa à Toulon"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

---

## ☁️ Méthode 2 : Ajouter des images via Supabase (CMS)

### Étape 1 : Se connecter à Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Connectez-vous avec vos identifiants
3. Sélectionnez votre projet ADELEC83

### Étape 2 : Accéder au Storage

1. Dans le menu latéral, cliquez sur **Storage**
2. Cliquez sur le bucket **`images`** (ou créez-le s'il n'existe pas)

### Étape 3 : Uploader une image

1. Cliquez sur **Upload file**
2. Sélectionnez votre image
3. L'image est uploadée et vous obtenez une URL publique

### Étape 4 : Copier l'URL de l'image

1. Cliquez sur l'image uploadée
2. Cliquez sur **Copy URL**
3. Vous obtenez une URL du type :
   ```
   https://[votre-projet].supabase.co/storage/v1/object/public/images/realisation-1.jpg
   ```

### Étape 5 : Utiliser l'URL dans la base de données

Allez dans **Table Editor** → **realisations** et ajoutez une nouvelle ligne :

```json
{
  "title": "Installation climatisation villa Toulon",
  "description": "Système multi-split 5 pièces",
  "image_url": "https://[votre-projet].supabase.co/storage/v1/object/public/images/realisation-1.jpg",
  "category": "climatisation",
  "featured": true
}
```

---

## 🎨 Méthode 3 : Ajouter des logos de partenaires

### Pour la section "Ils nous font confiance"

1. **Préparez vos logos** :
   - Format : PNG avec fond transparent
   - Taille : 300x200px maximum
   - Nom : `nom-entreprise.png` (ex: `urbat.png`, `daprom.png`)

2. **Placez-les dans** : `/public/images/partners/`

3. **Mettez à jour le code** dans `/app/(site)/page.tsx` :

```tsx
const partners = [
  { name: 'URBAT', logo: '/images/partners/urbat.png' },
  { name: 'DAPROM', logo: '/images/partners/daprom.png' },
  { name: 'Marignan', logo: '/images/partners/marignan.png' },
];

// Dans le JSX :
{partners.map((partner, index) => (
  <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg">
    <Image
      src={partner.logo}
      alt={partner.name}
      width={200}
      height={100}
      className="object-contain"
    />
  </div>
))}
```

---

## 🏗️ Méthode 4 : Ajouter une image Hero (bannière)

### Pour les pages de services

1. **Préparez votre image** :
   - Taille : 1920x1080px
   - Format : JPG
   - Poids : < 500Ko

2. **Placez-la dans** : `/public/images/`
   - Exemple : `hero-climatisation.jpg`

3. **Utilisez-la dans votre page** :

```tsx
<Hero
  title="Votre titre"
  subtitle="Votre sous-titre"
  image="/images/hero-climatisation.jpg"  // ← Votre image
  cta={{
    text: 'Demander un devis',
    href: '/contact',
  }}
/>
```

---

## 📊 Ajouter des réalisations avec images via Supabase

### Étape 1 : Uploader l'image (voir Méthode 2)

### Étape 2 : Ajouter la réalisation dans la base

1. Allez dans **Table Editor** → **realisations**
2. Cliquez sur **Insert row**
3. Remplissez les champs :

| Champ | Valeur exemple |
|-------|----------------|
| `title` | Installation climatisation villa Toulon |
| `description` | Système multi-split 5 pièces avec pilotage domotique |
| `image_url` | https://[...].supabase.co/storage/.../image.jpg |
| `category` | climatisation |
| `location` | Toulon |
| `date` | 2024-10-15 |
| `featured` | true (pour afficher sur l'accueil) |
| `order_index` | 1 |

4. Cliquez sur **Save**

### Étape 3 : Vérifier l'affichage

L'image apparaîtra automatiquement sur :
- La page d'accueil (si `featured = true`)
- La page `/realisations`
- La page du service correspondant (selon `category`)

---

## 🔧 Optimisation des images

### Compression automatique avec Next.js

Next.js optimise automatiquement vos images si vous utilisez le composant `<Image>` :

```tsx
import Image from 'next/image';

<Image
  src="/images/realisation.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}  // 85 est un bon compromis qualité/poids
  priority={false}  // true uniquement pour les images above-the-fold
/>
```

### Formats modernes

Next.js convertit automatiquement en WebP/AVIF pour les navigateurs compatibles.

---

## ❓ FAQ

### Comment changer l'image d'une réalisation existante ?

1. Allez dans Supabase → **Table Editor** → **realisations**
2. Trouvez la ligne à modifier
3. Cliquez sur le champ `image_url`
4. Collez la nouvelle URL
5. Cliquez sur **Save**

### Puis-je utiliser des images externes (URL) ?

Oui ! Vous pouvez utiliser n'importe quelle URL d'image :

```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

⚠️ **Attention** : Configurez les domaines externes dans `next.config.js` :

```js
module.exports = {
  images: {
    domains: ['example.com', 'votre-cdn.com'],
  },
}
```

### Mes images sont floues, que faire ?

1. Vérifiez que la taille source est suffisante (min 800px de large)
2. Augmentez le paramètre `quality` :
   ```tsx
   <Image quality={90} ... />
   ```
3. Vérifiez que l'image n'est pas trop compressée à la source

### Comment ajouter un logo dans le header ?

1. Placez votre logo dans `/public/images/logo.png`
2. Modifiez `/components/header.tsx` :

```tsx
<Link href="/" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="ADELEC83"
    width={150}
    height={50}
  />
</Link>
```

---

## 📞 Besoin d'aide ?

Si vous rencontrez des difficultés :
1. Vérifiez que le chemin de l'image est correct
2. Vérifiez que l'image existe bien dans `/public/images/`
3. Regardez la console du navigateur (F12) pour les erreurs
4. Contactez le support technique

---

## ✅ Checklist avant de publier

- [ ] Les images sont compressées (< 500Ko)
- [ ] Les noms de fichiers sont descriptifs
- [ ] Les attributs `alt` sont remplis (SEO)
- [ ] Les dimensions `width` et `height` sont spécifiées
- [ ] Les images s'affichent correctement en local
- [ ] Le site build sans erreur (`npm run build`)

---

**Dernière mise à jour** : Octobre 2024
**Version** : 1.0
