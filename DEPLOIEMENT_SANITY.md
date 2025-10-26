# 🚀 Déploiement Sanity Studio sur adelec83.com

## ✅ Configuration actuelle

Votre Sanity Studio est maintenant configuré et prêt à être déployé sur **adelec83.com/studio**

### 📋 Ce qui a été configuré

1. ✅ **Sanity Studio intégré** dans Next.js
2. ✅ **Protection par mot de passe** (HTTP Basic Auth)
3. ✅ **Schémas** : Réalisations + Blog
4. ✅ **Filtrage automatique** par type de service
5. ✅ **Variables d'environnement** configurées

---

## 🔐 Accès au Studio

### En local
- **URL** : http://localhost:3000/studio
- **Authentification** : Popup du navigateur
  - Utilisateur : (laissez vide ou tapez n'importe quoi)
  - Mot de passe : `adelec2024`

### En production
- **URL** : https://adelec83.com/studio
- **Même authentification** qu'en local

---

## 🌐 Déploiement sur Vercel

### 1. Ajouter les variables d'environnement dans Vercel

Allez dans **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**

Ajoutez ces 4 variables :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=9rghv1dh
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skCHid0KPteRRHbydbyJIArIrg2oEjuEAm7OuhXQ8HFuv11RQWWYo9gdTRuJYp9QHix5o7qwA6Xi7KYfxWYHvmFf4KQHHyqGX3DTBg3e7FqOSlgK5kl47HeioYGMKfu2Abx0dnl2YpldFskU5amayH0xPraaNyYvNFEU2xMwhqEZDhDya5ZE
STUDIO_PASSWORD=adelec2024
```

**Important** : Ajoutez-les pour tous les environnements (Production, Preview, Development)

### 2. Configurer les CORS dans Sanity

1. Allez sur [sanity.io/manage](https://www.sanity.io/manage)
2. Sélectionnez votre projet **ADELEC83**
3. Allez dans **API** → **CORS Origins**
4. Ajoutez ces origines :

```
http://localhost:3000
https://adelec83.com
https://*.vercel.app
```

Cochez : **Allow credentials**

### 3. Déployer

```bash
git add .
git commit -m "Configuration Sanity Studio avec authentification"
git push origin main
```

Vercel déploiera automatiquement.

---

## 🎨 Utilisation du Studio

### Créer une réalisation

1. Accédez à https://adelec83.com/studio
2. Entrez le mot de passe
3. Cliquez sur **"Réalisations"** dans le menu
4. Cliquez sur **"Create"** (bouton +)
5. Remplissez les champs :
   - **Titre** : "Villa moderne à Saint-Tropez"
   - **Slug** : Cliquez sur "Generate" à partir du titre
   - **Description** : Description courte
   - **Image** : Uploadez une photo
   - **Catégorie** : Sélectionnez (villa, commercial, etc.)
   - **Type de service** : **IMPORTANT** - Cochez un ou plusieurs types :
     - `villas-residences-standing` → Affichera sur la page Villas
     - `luxe-projets-exception` → Affichera sur la page Luxe
     - `climatisation` → Affichera sur la page Climatisation
     - etc.
   - **Featured** : Cochez si vous voulez l'afficher sur la page d'accueil
   - **Localisation** : "Saint-Tropez, Var"
   - **Année** : 2024
6. Cliquez sur **"Publish"**

### Créer un article de blog

1. Cliquez sur **"Articles de Blog"**
2. Créez un nouvel article
3. Utilisez l'éditeur Portable Text pour le contenu
4. Ajoutez des images dans le contenu
5. Publiez

---

## 🔄 Synchronisation automatique

Les données sont synchronisées en temps réel :
- ✅ Vous publiez dans Sanity Studio
- ✅ Les données sont immédiatement disponibles
- ✅ Le site affiche les nouvelles réalisations/articles

---

## 🔒 Sécurité

### Changer le mot de passe

1. **En local** : Modifiez `.env.local`
   ```env
   STUDIO_PASSWORD=votre_nouveau_mot_de_passe
   ```

2. **En production** : Modifiez dans Vercel
   - Dashboard → Settings → Environment Variables
   - Modifiez `STUDIO_PASSWORD`
   - Redéployez

### Qui peut accéder ?

- ✅ Toute personne avec le mot de passe peut accéder au Studio
- ✅ Sanity gère l'authentification pour les modifications
- ✅ Le mot de passe protège uniquement l'accès à l'interface

---

## 🆘 Dépannage

### Le Studio ne charge pas

1. Vérifiez que les variables d'environnement sont bien configurées dans Vercel
2. Vérifiez les CORS dans Sanity (doit inclure votre domaine)
3. Regardez les logs Vercel pour les erreurs

### Les images ne s'affichent pas

1. Vérifiez que le token API a les bonnes permissions
2. Vérifiez que `NEXT_PUBLIC_SANITY_PROJECT_ID` est correct

### Les réalisations n'apparaissent pas sur les pages

1. Vérifiez que vous avez coché les bons **Type de service**
2. Vérifiez que la réalisation est **publiée** (pas en brouillon)
3. Rechargez la page du site

---

## 📊 Filtrage par type de service

| Page du site | Tag à cocher dans Sanity |
|--------------|--------------------------|
| Page d'accueil | Cocher **Featured** |
| /services/villas-residences-standing | `villas-residences-standing` |
| /services/luxe-projets-exception | `luxe-projets-exception` |
| /services/climatisation | `climatisation` |
| /services/domotique | `domotique` |
| /services/bornes | `bornes` |
| /services/photovoltaique | `photovoltaique` |
| /services/electricite | `electricite` |
| /services/batiments-collectifs-tertiaires | `batiments-collectifs-tertiaires` |

**Astuce** : Une réalisation peut avoir plusieurs tags et apparaître sur plusieurs pages !

---

## ✅ Checklist de déploiement

- [ ] Variables d'environnement ajoutées dans Vercel
- [ ] CORS configurés dans Sanity
- [ ] Code poussé sur GitHub
- [ ] Déploiement Vercel réussi
- [ ] Test d'accès à https://adelec83.com/studio
- [ ] Première réalisation créée
- [ ] Vérification de l'affichage sur le site

---

## 🎉 C'est prêt !

Votre CMS Sanity est maintenant opérationnel sur **adelec83.com/studio** ! 

Vous pouvez gérer tout le contenu de votre site depuis cette interface.
