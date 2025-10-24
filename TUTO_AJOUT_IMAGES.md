# 📸 TUTORIEL : Ajouter des images sur le site ADELEC83

## 🎯 Objectif
Ce tutoriel vous explique comment ajouter des images sur votre site ADELEC83, que ce soit pour les réalisations, les services, ou les pages.

---

## 📁 Méthode 1 : Images locales (dans le projet)

### Étape 1 : Placer vos images dans le dossier `public`

1. Ouvrez le dossier `/public/images/` de votre projet
2. Créez des sous-dossiers si nécessaire :
   ```
   /public/images/
   ├── hero/              (images de bannières)
   ├── services/          (images des services)
   ├── realisations/      (photos de chantiers)
   ├── partners/          (logos partenaires)
   └── team/              (photos équipe)
   ```

3. Copiez vos images dans le bon dossier
   - **Formats recommandés** : JPG, PNG, WebP
   - **Taille max recommandée** : 2 MB par image
   - **Résolution recommandée** : 
     - Hero : 1920x1080px
     - Réalisations : 800x600px
     - Logos : 400x400px

### Étape 2 : Utiliser l'image dans votre code

```tsx
import Image from 'next/image';

<Image
  src="/images/realisations/chantier-1.jpg"
  alt="Description de l'image"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

---

## ☁️ Méthode 2 : Images hébergées sur Supabase Storage (RECOMMANDÉ)

### Étape 1 : Configurer Supabase Storage

1. Connectez-vous à votre dashboard Supabase : https://supabase.com/dashboard
2. Allez dans **Storage** dans le menu de gauche
3. Créez un nouveau bucket appelé `images` :
   - Cliquez sur **New Bucket**
   - Nom : `images`
   - Public : ✅ Coché (pour que les images soient accessibles)
   - Cliquez sur **Create Bucket**

### Étape 2 : Uploader vos images

1. Cliquez sur le bucket `images`
2. Créez des dossiers :
   - `realisations/`
   - `services/`
   - `hero/`
   - `partners/`
3. Cliquez sur **Upload File**
4. Sélectionnez vos images
5. Une fois uploadées, cliquez sur l'image → **Get URL** → Copiez l'URL

### Étape 3 : Utiliser l'URL dans votre code

```tsx
<Image
  src="https://votre-projet.supabase.co/storage/v1/object/public/images/realisations/chantier-1.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

---

## 🏗️ Méthode 3 : Ajouter des images via le CMS Supabase

### Pour les réalisations

1. Allez dans **Table Editor** → Table `realisations`
2. Cliquez sur **Insert** → **Insert row**
3. Remplissez les champs :
   ```
   title: "Installation climatisation villa La Crau"
   description: "Installation d'un système multi-split 4 pièces"
   image_url: "https://votre-projet.supabase.co/storage/v1/object/public/images/realisations/villa-la-crau.jpg"
   category: "climatisation"
   featured: true
   order_index: 1
   ```
4. Cliquez sur **Save**

### Pour les services

Les images des services sont définies dans le code. Pour les modifier :

1. Ouvrez le fichier de la page service (ex: `/app/(site)/services/climatisation/page.tsx`)
2. Trouvez la section Hero :
   ```tsx
   <Hero
     title="..."
     subtitle="..."
     image="/images/hero-climatisation.jpg"  ← Changez ici
     ...
   />
   ```
3. Remplacez par votre nouvelle image

---

## 🎨 Optimisation des images

### Redimensionner vos images avant upload

**Outils gratuits en ligne :**
- https://squoosh.app/ (Google)
- https://tinypng.com/ (compression)
- https://www.iloveimg.com/fr (redimensionnement)

**Tailles recommandées :**
- Hero (bannière) : 1920x1080px ou 1600x900px
- Réalisations : 800x600px ou 1200x900px
- Logos partenaires : 400x400px
- Photos équipe : 400x400px (carré)

### Convertir en WebP (format moderne)

WebP est 30% plus léger que JPG tout en gardant la qualité.

**En ligne :**
- https://cloudconvert.com/jpg-to-webp

**Utilisation :**
```tsx
<Image
  src="/images/realisations/chantier-1.webp"
  alt="Chantier"
  width={800}
  height={600}
/>
```

---

## 📝 Bonnes pratiques

### 1. Nommage des fichiers
✅ **BON** : `climatisation-villa-toulon-2024.jpg`
❌ **MAUVAIS** : `IMG_1234.jpg`

### 2. Texte alternatif (ALT)
Toujours remplir l'attribut `alt` pour le SEO et l'accessibilité :
```tsx
alt="Installation climatisation réversible dans villa à Toulon"
```

### 3. Compression
- Utilisez TinyPNG ou Squoosh avant d'uploader
- Visez 100-300 KB par image

### 4. Format
- **Photos** : JPG ou WebP
- **Logos** : PNG (avec transparence) ou SVG
- **Icônes** : SVG (vectoriel)

---

## 🚀 Exemples pratiques

### Exemple 1 : Ajouter une photo de réalisation

1. **Prenez la photo** de votre chantier
2. **Redimensionnez** à 1200x900px sur https://squoosh.app/
3. **Uploadez** sur Supabase Storage → `images/realisations/`
4. **Copiez l'URL**
5. **Ajoutez dans Supabase** :
   - Table : `realisations`
   - Champs :
     ```
     title: "Installation borne de recharge - Hyères"
     description: "Borne Wallbox 7,4kW avec gestion intelligente"
     image_url: "https://xxx.supabase.co/storage/v1/object/public/images/realisations/borne-hyeres.jpg"
     category: "bornes-recharge"
     featured: true
     ```

### Exemple 2 : Changer l'image Hero d'une page

1. **Préparez votre image** (1920x1080px)
2. **Uploadez** dans `/public/images/hero/nouvelle-image.jpg`
3. **Modifiez le code** :
   ```tsx
   // Dans /app/(site)/services/climatisation/page.tsx
   <Hero
     image="/images/hero/nouvelle-image.jpg"  ← Changez ici
     ...
   />
   ```

### Exemple 3 : Ajouter des logos partenaires

1. **Récupérez les logos** (PNG avec fond transparent)
2. **Redimensionnez** à 400x400px
3. **Uploadez** dans `/public/images/partners/`
4. **Modifiez** `/app/(site)/page.tsx` section "Ils nous font confiance" :
   ```tsx
   <Image
     src="/images/partners/daprom-logo.png"
     alt="Logo Daprom"
     width={200}
     height={100}
   />
   ```

---

## ❓ FAQ

**Q : Mes images ne s'affichent pas**
- Vérifiez que le chemin commence par `/` pour les images dans `/public/`
- Vérifiez que le bucket Supabase est bien **public**
- Vérifiez l'URL complète dans votre navigateur

**Q : Mes images sont trop lourdes**
- Utilisez https://tinypng.com/ pour compresser
- Convertissez en WebP
- Redimensionnez avant upload

**Q : Comment ajouter une image dans le CMS ?**
- Uploadez d'abord l'image sur Supabase Storage
- Copiez l'URL
- Collez l'URL dans le champ `image_url` de votre table

---

## 📞 Besoin d'aide ?

Si vous avez des questions, contactez votre développeur ou consultez :
- Documentation Next.js Image : https://nextjs.org/docs/app/api-reference/components/image
- Documentation Supabase Storage : https://supabase.com/docs/guides/storage

---

**Dernière mise à jour** : Octobre 2024
