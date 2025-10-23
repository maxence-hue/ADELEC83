# ⚡ ADELEC83 - Site Web Complet

> Site vitrine professionnel pour ADELEC83, entreprise d'électricité, photovoltaïque, climatisation et bornes de recharge dans le Var.

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : TailwindCSS
- **CMS** : Supabase (base de données PostgreSQL)
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Forms** : React Hook Form + Zod
- **Déploiement** : Vercel

---

## 📝 Structure du site

### Pages principales
- ✅ **Accueil** - Hero, services, stats, réalisations, témoignages, FAQ
- ✅ **Électricité** - Services électriques complets
- ✅ **Photovoltaïque** - Panneaux solaires, autoconsommation, aides
- ✅ **Climatisation** - Installation et entretien climatisation réversible
- ✅ **Bornes IRVE** - Installation bornes de recharge véhicules électriques
- ✅ **À propos** - Histoire, équipe, valeurs, certifications
- ✅ **Réalisations** - Portfolio de projets avec filtres
- ✅ **Blog** - Articles actualités et conseils
- ✅ **Contact** - Formulaire, coordonnées, carte

### Composants réutilisables
- `Hero` - Section hero avec image et CTA
- `ServiceCard` - Carte service avec icône
- `RealisationCard` - Carte projet
- `Stats` - Statistiques animées
- `CTASection` - Call-to-action
- `Certifications` - Badges certifications
- `FAQ` - Questions/réponses pliables
- `ContactForm` - Formulaire de contact

---

## 🛠️ Installation

### Prérequis
- Node.js 20+
- npm ou yarn
- Compte Supabase

### Étapes

```bash
# 1. Cloner le projet
cd ADELEC83

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local

# 4. Modifier .env.local avec vos clés Supabase
# NEXT_PUBLIC_SUPABASE_URL=votre_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle

# 5. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 📊 Configuration Supabase

### Création des tables

Les tables suivantes sont déjà créées dans votre projet Supabase :

1. **pages** - Contenu des pages principales
2. **realisations** - Portfolio de projets
3. **articles** - Articles de blog
4. **temoignages** - Avis clients
5. **faq** - Questions fréquentes
6. **company_info** - Informations entreprise
7. **contact_requests** - Demandes de contact

### Données initiales

Les données de démo sont déjà insérées.

---

## 📖 Utilisation du CMS

Consultez **DOCUMENTATION_CMS.md** pour le guide complet.

### Accès rapide
1. Aller sur [supabase.com](https://supabase.com)
2. Sélectionner votre projet
3. Cliquer sur **Table Editor**
4. Modifier les contenus

---

## 🚀 Déploiement sur Vercel

### Méthode recommandée

1. **Push sur GitHub**
   ```bash
   git add .
   git commit -m "Site ADELEC83 complet"
   git push origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - **New Project** → Importer le repo
   - Framework : **Next.js**

3. **Variables d'environnement**
   - Settings → Environment Variables
   - Ajouter les clés Supabase

4. **Déployer**
   - Cliquer sur **Deploy**
   - Attendre le build (~2-3 min)

---

## 📞 Contact

**ADELEC83**
- 📍 226 Rue de la République, 83210 Solliès-Pont
- 📞 04 94 XX XX XX
- ✉️ contact@adelec83.fr

---

**Version** : 1.0.0  
**Statut** : ✅ Production Ready
