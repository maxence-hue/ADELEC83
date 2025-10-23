# 📚 Guide Complet Supabase - ADELEC83

## 🎯 Table des matières

1. [Nettoyage de la base de données](#1-nettoyage-de-la-base-de-données)
2. [Créer un article de blog](#2-créer-un-article-de-blog)
3. [Ajouter une réalisation](#3-ajouter-une-réalisation)
4. [Gérer les témoignages](#4-gérer-les-témoignages)
5. [Modifier le contenu des pages](#5-modifier-le-contenu-des-pages)
6. [Gérer la FAQ](#6-gérer-la-faq)
7. [Voir les demandes de contact](#7-voir-les-demandes-de-contact)

---

## 1. Nettoyage de la base de données

### Étape 1 : Accéder à Supabase
1. Aller sur [https://supabase.com](https://supabase.com)
2. Se connecter avec votre compte
3. Sélectionner votre projet ADELEC83

### Étape 2 : Exécuter le script de nettoyage
1. Cliquer sur **SQL Editor** dans le menu de gauche
2. Cliquer sur **New Query**
3. Copier tout le contenu du fichier `supabase/CLEANUP.sql`
4. Coller dans l'éditeur SQL
5. Cliquer sur **Run** (ou Ctrl+Enter)
6. Attendre la confirmation "Success"

✅ **Résultat** : Votre base de données est maintenant propre avec uniquement les tables ADELEC83

---

## 2. Créer un article de blog

### Méthode 1 : Via l'interface Supabase (Recommandé)

1. **Accéder à la table**
   - Cliquer sur **Table Editor** dans le menu
   - Sélectionner la table **articles**

2. **Créer un nouvel article**
   - Cliquer sur **Insert** → **Insert row**
   - Remplir les champs :

   ```
   slug: "mon-article-exemple"
   title: "5 raisons d'installer des panneaux solaires en 2025"
   excerpt: "Découvrez pourquoi 2025 est l'année idéale pour passer au solaire"
   content: "Contenu complet de votre article en Markdown ou HTML..."
   category: "Panneaux solaires"
   tags: ["photovoltaïque", "économies", "aides"]
   image_url: "/images/blog/solar-2025.jpg"
   published: true
   published_at: 2025-01-15 10:00:00+00
   ```

3. **Sauvegarder**
   - Cliquer sur **Save**

### Méthode 2 : Via SQL

```sql
INSERT INTO articles (
  slug, 
  title, 
  excerpt, 
  content, 
  category, 
  tags, 
  image_url,
  published, 
  published_at
) VALUES (
  'mon-nouvel-article',
  'Titre de mon article',
  'Résumé court de l''article',
  'Contenu complet de l''article...',
  'Panneaux solaires',
  ARRAY['photovoltaïque', 'conseils'],
  '/images/blog/mon-image.jpg',
  true,
  NOW()
);
```

### 📝 Champs expliqués

| Champ | Description | Obligatoire | Exemple |
|-------|-------------|-------------|---------|
| `slug` | URL de l'article (unique) | ✅ | `panneaux-solaires-2025` |
| `title` | Titre de l'article | ✅ | `5 raisons d'installer...` |
| `excerpt` | Résumé court (150 car.) | ❌ | `Découvrez pourquoi...` |
| `content` | Contenu complet | ❌ | Texte long en Markdown |
| `category` | Catégorie | ❌ | `Panneaux solaires` |
| `tags` | Mots-clés (tableau) | ❌ | `["solaire", "aides"]` |
| `image_url` | Image principale | ❌ | `/images/blog/img.jpg` |
| `published` | Publié ou brouillon | ✅ | `true` ou `false` |
| `published_at` | Date de publication | ❌ | `2025-01-15 10:00:00` |

---

## 3. Ajouter une réalisation

### Via l'interface Supabase

1. **Accéder à la table**
   - Table Editor → **realisations**

2. **Créer une réalisation**
   - Insert → Insert row
   - Remplir :

   ```
   title: "Installation photovoltaïque 12 kWc"
   description: "Installation de 30 panneaux solaires avec batterie virtuelle MyLight"
   category: "photovoltaique"  (ou "electricite", "climatisation", "bornes")
   location: "Fréjus"
   date: "Novembre 2024"
   image_url: "/images/realisations/solar-frejus.jpg"
   featured: true  (pour afficher sur la page d'accueil)
   order_index: 1  (ordre d'affichage)
   ```

3. **Sauvegarder**

### Catégories disponibles
- `photovoltaique` - Panneaux solaires
- `electricite` - Électricité générale
- `climatisation` - Climatisation
- `bornes` - Bornes de recharge

---

## 4. Gérer les témoignages

### Ajouter un témoignage

1. **Accéder à la table**
   - Table Editor → **temoignages**

2. **Créer un témoignage**
   ```
   author_name: "Jean Dupont"
   location: "Toulon"
   rating: 5  (de 1 à 5 étoiles)
   content: "Excellent travail, équipe professionnelle..."
   featured: true  (pour afficher sur la page d'accueil)
   ```

### Modifier un témoignage existant

1. Cliquer sur la ligne du témoignage
2. Modifier les champs
3. Cliquer sur **Save**

---

## 5. Modifier le contenu des pages

### Modifier la page d'accueil

1. **Accéder à la table**
   - Table Editor → **pages**

2. **Modifier la page "accueil"**
   - Cliquer sur la ligne avec `slug = "accueil"`
   - Modifier :
     - `hero_title` : Titre principal du hero
     - `hero_subtitle` : Sous-titre du hero
     - `content` : Contenu JSON supplémentaire (optionnel)

### Modifier les statistiques

1. **Accéder à la table**
   - Table Editor → **company_info**

2. **Modifier la ligne "stats"**
   - Cliquer sur la ligne avec `key = "stats"`
   - Modifier le JSON :
   ```json
   {
     "annees_experience": 20,
     "installations": 650,
     "clients_satisfaits": 98,
     "employes": 12
   }
   ```

### Modifier les coordonnées

1. Table Editor → **company_info**
2. Ligne avec `key = "contact"`
3. Modifier le JSON :
   ```json
   {
     "phone": "04 94 XX XX XX",
     "email": "contact@adelec83.fr",
     "address": "Solliès-Pont, Var (83)"
   }
   ```

---

## 6. Gérer la FAQ

### Ajouter une question

1. **Accéder à la table**
   - Table Editor → **faq**

2. **Créer une question**
   ```
   question: "Quelle est la durée de vie des panneaux solaires ?"
   answer: "Les panneaux solaires ont une durée de vie de 25 à 30 ans..."
   active: true
   order_index: 7  (ordre d'affichage)
   ```

### Désactiver une question

1. Trouver la question dans la table **faq**
2. Changer `active` de `true` à `false`
3. Save

---

## 7. Voir les demandes de contact

### Accéder aux demandes

1. **Accéder à la table**
   - Table Editor → **contact_requests**

2. **Voir les nouvelles demandes**
   - Filtrer par `status = "new"`

3. **Marquer comme lu**
   - Cliquer sur la demande
   - Changer `status` de `"new"` à `"read"`
   - Save

### Statuts disponibles
- `new` - Nouvelle demande non lue
- `read` - Demande lue
- `replied` - Réponse envoyée

---

## 🎨 Ajouter des images

### Méthode 1 : Upload direct dans le projet

1. Placer vos images dans `/public/images/`
   ```
   /public/images/
   ├── blog/
   │   ├── article-1.jpg
   │   └── article-2.jpg
   ├── realisations/
   │   ├── solar-1.jpg
   │   └── clim-1.jpg
   └── hero/
       └── home.jpg
   ```

2. Référencer dans Supabase avec le chemin :
   ```
   /images/blog/article-1.jpg
   ```

### Méthode 2 : Utiliser Supabase Storage

1. **Créer un bucket**
   - Storage → New bucket
   - Nom : `adelec83-images`
   - Public : ✅

2. **Upload une image**
   - Cliquer sur le bucket
   - Upload file
   - Sélectionner votre image

3. **Copier l'URL**
   - Cliquer sur l'image
   - Copy URL
   - Utiliser cette URL dans vos articles/réalisations

---

## 🔧 Conseils et bonnes pratiques

### Pour les articles de blog

✅ **À faire :**
- Utiliser des slugs courts et descriptifs (`panneaux-solaires-2025`)
- Écrire un excerpt accrocheur (150 caractères max)
- Ajouter 3-5 tags pertinents
- Utiliser des images optimisées (WebP, < 500 KB)
- Publier régulièrement (1-2 articles/mois)

❌ **À éviter :**
- Slugs avec espaces ou caractères spéciaux
- Excerpts trop longs
- Images trop lourdes (> 2 MB)
- Publier des brouillons (`published = false`)

### Pour les réalisations

✅ **À faire :**
- Utiliser des photos de qualité
- Décrire précisément le projet
- Indiquer la localisation
- Mettre `featured = true` pour les meilleurs projets
- Utiliser `order_index` pour contrôler l'ordre

### Pour les témoignages

✅ **À faire :**
- Demander l'autorisation au client
- Utiliser de vrais noms (ou initiales)
- Être authentique
- Mettre `featured = true` pour les meilleurs avis

---

## 🚀 Workflow recommandé

### Créer un nouvel article de blog

1. ✅ Écrire le contenu dans un éditeur (Google Docs, Notion)
2. ✅ Préparer l'image (optimiser, renommer)
3. ✅ Upload l'image dans `/public/images/blog/`
4. ✅ Créer l'article dans Supabase
5. ✅ Mettre `published = false` (brouillon)
6. ✅ Vérifier sur le site en local
7. ✅ Mettre `published = true` pour publier
8. ✅ Partager sur les réseaux sociaux

### Ajouter une réalisation

1. ✅ Prendre des photos du projet
2. ✅ Optimiser les images
3. ✅ Upload dans `/public/images/realisations/`
4. ✅ Créer la réalisation dans Supabase
5. ✅ Vérifier l'affichage sur le site
6. ✅ Partager sur les réseaux sociaux

---

## 📞 Support

Si vous avez des questions ou problèmes :

1. Vérifier ce guide
2. Consulter la [documentation Supabase](https://supabase.com/docs)
3. Vérifier les logs dans Supabase (Table Editor → Logs)

---

**Version** : 1.0  
**Dernière mise à jour** : Octobre 2025
