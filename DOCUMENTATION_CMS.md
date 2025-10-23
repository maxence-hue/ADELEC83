# 📖 Documentation CMS - ADELEC83

## Vue d'ensemble

Le site ADELEC83 utilise **Supabase** comme système de gestion de contenu (CMS). Cela vous permet de modifier tous les textes, images et contenus du site **sans toucher au code**.

## 🔗 Accès au CMS

1. Rendez-vous sur : **https://supabase.com**
2. Connectez-vous avec vos identifiants
3. Sélectionnez votre projet : `maxence-hue's Project`
4. Cliquez sur **Table Editor** dans le menu de gauche

---

## 📋 Tables disponibles

### 1. **pages** - Contenu des pages principales

Cette table contient le contenu modifiable de chaque page du site.

**Colonnes importantes :**
- `slug` : Identifiant de la page (ne pas modifier)
- `title` : Titre de la page
- `meta_title` : Titre SEO (apparaît dans Google)
- `meta_description` : Description SEO
- `hero_title` : Grand titre en haut de page
- `hero_subtitle` : Sous-titre
- `hero_image` : Chemin de l'image hero
- `content` : Contenu JSON supplémentaire

**Comment modifier :**
1. Cliquez sur la ligne de la page à modifier
2. Modifiez les champs souhaités
3. Cliquez sur **Save** (icône disquette)

**Pages disponibles :**
- `accueil` - Page d'accueil
- `electricite` - Page Électricité
- `photovoltaique` - Page Photovoltaïque
- `climatisation` - Page Climatisation
- `bornes` - Page Bornes de recharge
- `a-propos` - Page À propos
- `contact` - Page Contact

---

### 2. **realisations** - Vos projets

Gérez vos réalisations et chantiers.

**Colonnes :**
- `title` : Titre du projet
- `description` : Description complète
- `category` : Type (electricite, photovoltaique, climatisation, bornes)
- `city` : Ville
- `images` : Liste des images (format : ["/images/img1.jpg", "/images/img2.jpg"])
- `featured` : Afficher sur la page d'accueil (true/false)
- `order_index` : Ordre d'affichage (0, 1, 2...)

**Ajouter une réalisation :**
1. Cliquez sur **Insert** → **Insert row**
2. Remplissez les champs
3. Cliquez sur **Save**

**Modifier une réalisation :**
1. Cliquez sur la ligne
2. Modifiez les informations
3. **Save**

---

### 3. **articles** - Blog

Gérez vos articles de blog.

**Colonnes importantes :**
- `slug` : URL de l'article (ex: `mon-article`)
- `title` : Titre
- `excerpt` : Résumé court
- `content` : Contenu complet (Markdown supporté)
- `featured_image` : Image principale
- `category` : Catégorie
- `tags` : Mots-clés (format : ["tag1", "tag2"])
- `published` : Publié ou brouillon (true/false)
- `published_at` : Date de publication

**Créer un article :**
1. **Insert** → **Insert row**
2. Remplissez :
   - slug : `mon-nouvel-article` (sans espaces, tirets)
   - title : `Mon Nouvel Article`
   - excerpt : Description courte
   - content : Texte complet
   - category : `Actualités` / `Énergie` / `Innovation`
   - tags : `["photovoltaïque", "aides"]`
   - published : `true` pour publier
   - published_at : Date du jour
3. **Save**

---

### 4. **temoignages** - Avis clients

Gérez les témoignages affichés sur le site.

**Colonnes :**
- `name` : Nom du client
- `city` : Ville
- `service` : Service concerné
- `rating` : Note sur 5 (1 à 5)
- `comment` : Témoignage
- `featured` : Afficher sur la page d'accueil (true/false)

**Ajouter un témoignage :**
1. **Insert row**
2. Remplissez les informations
3. Cochez `featured` si vous voulez l'afficher en page d'accueil
4. **Save**

---

### 5. **faq** - Questions fréquentes

**Colonnes :**
- `question` : La question
- `answer` : La réponse
- `category` : Catégorie (photovoltaique, electricite, general...)
- `order_index` : Ordre d'affichage
- `active` : Afficher ou masquer (true/false)

---

### 6. **company_info** - Informations entreprise

Gérez les informations globales (stats, coordonnées, certifications).

**Clés disponibles :**
- `contact` : Coordonnées de contact
- `stats` : Statistiques (années d'expérience, installations...)
- `certifications` : Liste des certifications
- `zones` : Zones d'intervention

**Format JSON pour `stats` :**
```json
{
  "annees_experience": 20,
  "installations": 600,
  "clients_satisfaits": 98,
  "employes": 10
}
```

**Format JSON pour `contact` :**
```json
{
  "adresse": "226 Rue de la République, 83210 Solliès-Pont",
  "telephone": "04 94 XX XX XX",
  "email": "contact@adelec83.fr",
  "horaires": {
    "lundi-vendredi": "8h-12h / 14h-18h",
    "samedi": "Sur rendez-vous",
    "dimanche": "Fermé"
  }
}
```

---

### 7. **contact_requests** - Demandes de contact

Cette table enregistre automatiquement toutes les demandes reçues via le formulaire de contact.

**Colonnes :**
- `name` : Nom du client
- `email` : Email
- `phone` : Téléphone
- `project_type` : Type de projet
- `message` : Message
- `status` : Statut (nouveau, en_cours, traite)
- `created_at` : Date de réception

**Gérer les demandes :**
1. Consultez régulièrement cette table
2. Changez le `status` pour suivre le traitement
3. Exportez en CSV si besoin (bouton Export)

---

## 🖼️ Gestion des images

### Uploader des images

**Option 1 : Via Supabase Storage**
1. Dans Supabase, allez sur **Storage**
2. Créez un bucket public `images`
3. Uploadez vos images
4. Copiez l'URL publique
5. Utilisez cette URL dans vos contenus

**Option 2 : Dossier /public**
1. Ajoutez vos images dans `/public/images/`
2. Référencez-les : `/images/nom-image.jpg`

**Formats recommandés :**
- `.jpg` ou `.webp` pour les photos
- `.png` pour les logos/icônes
- Taille : max 1920px de large
- Poids : < 500 Ko (compressez si nécessaire)

---

## ✏️ Conseils d'utilisation

### Modifier un texte de page
1. Table **pages**
2. Trouvez la page (colonne `slug`)
3. Modifiez `hero_title`, `hero_subtitle` ou `content`
4. **Save**
5. Rafraîchissez le site (F5) pour voir les changements

### Ajouter une nouvelle réalisation
1. Table **realisations**
2. **Insert row**
3. Remplissez tous les champs
4. Mettez `featured = true` pour l'afficher en accueil
5. **Save**

### Publier un article de blog
1. Table **articles**
2. **Insert row**
3. Remplissez le contenu
4. `published = true`
5. Définissez `published_at` (date du jour)
6. **Save**

### Modifier les statistiques
1. Table **company_info**
2. Ligne avec `key = stats`
3. Modifiez le JSON dans `value`
4. **Save**

---

## 🚨 Points d'attention

### ⚠️ Ne JAMAIS modifier :
- La colonne `id` (identifiant unique)
- Les colonnes `created_at` (date de création)
- Les `slug` des pages principales

### ⚠️ Formats à respecter :
- **Tags** : `["tag1", "tag2", "tag3"]` (entre crochets)
- **Images** : Toujours `/images/nom.jpg`
- **Dates** : Format automatique OK
- **JSON** : Respecter la syntaxe `{"clé": "valeur"}`

### ⚠️ Champs obligatoires :
- Pages : `slug`, `title`
- Réalisations : `title`, `category`
- Articles : `slug`, `title`, `published`
- Témoignages : `name`, `comment`

---

## 📞 Support

Pour toute question sur l'utilisation du CMS :
- **Email** : support@adelec83.fr
- **Documentation Supabase** : https://supabase.com/docs

---

## 🔄 Synchronisation

Les modifications dans Supabase sont **instantanées** :
- Pas besoin de "publier" ou "valider"
- Les changements apparaissent en temps réel
- Rafraîchissez votre navigateur (F5) pour voir les mises à jour

---

## 📊 Backup

**Important** : Exportez régulièrement vos données
1. Dans chaque table, cliquez sur **...** (menu)
2. **Export as CSV**
3. Sauvegardez le fichier sur votre ordinateur

**Fréquence recommandée** : 1 fois par mois minimum

---

Besoin d'aide ? N'hésitez pas à contacter votre développeur ou consultant technique !
