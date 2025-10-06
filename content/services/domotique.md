---
title: "Domotique (confort, scénarios, sécurité)"
excerpt: "Supervision KNX, Loxone et systèmes hybrides pour piloter confort, éclairage, sécurité et énergie dans les bâtiments."
hero: "Bâtiments intelligents et sobres"
benefits:
  - "Une interface unique pour piloter chauffage, éclairage et accès"
  - "Scénarios personnalisés selon l’usage (bureaux, résidentiel, ERP)"
  - "Suivi des consommations en temps réel"
deliverables:
  - "Schéma fonctionnel domotique"
  - "Programmation des scénarios et supervision"
  - "Guide utilisateur et accès distant sécurisé"
process:
  - "Atelier de cadrage des usages et fonctionnalités"
  - "Choix des protocoles (KNX, Modbus, Zigbee) et équipements"
  - "Câblage ou configuration radio et intégration au tableau"
  - "Programmation des scénarios et interface utilisateur"
  - "Recette, transfert de compétences et maintenance logicielle"
faq:
  - q: "Peut-on intégrer des équipements existants ?"
    a: "Oui, nous exploitons des passerelles multi-protocoles pour reprendre éclairage, CVC, alarme ou multimédia."
  - q: "Comment sécuriser l’accès à distance ?"
    a: "Mise en place de VPN, authentification forte et segmentation réseau pour éviter tout accès non autorisé."
  - q: "Quels indicateurs de performance proposez-vous ?"
    a: "Suivi des consommations, alertes d’anomalies, statistiques d’occupation et rapports exportables."
---

## Scénarios types

- **Arrivée bureau** : ouverture motorisée, éclairage à 70 %, chauffage en mode confort, déverrouillage des accès.
- **Fermeture** : extinction générale, mise en alarme, abaissée des volets roulants et passage des prises sur off.
- **Résidentiel connecté** : simulation de présence, gestion de l’arrosage, pilotage du chauffe-eau selon le photovoltaïque.

### Architecture modulaire

```
[Capteurs KNX] -- [Automate logique] -- [Bus KNX]
                             |-- [Passerelle Modbus] -- [CTA / GTB]
                             |-- [Serveur Web] -- [Application mobile]
```

### Tableau d’exemple

| Fonction | Description | Valeur ajoutée |
|----------|-------------|----------------|
| Gestion d’éclairage DALI | Variation par zone, scénarios automatiques | Économies d’énergie jusqu’à 35 % |
| Supervision GTB | Visualisation en temps réel et alertes | Intervention rapide |
| Pilotage chauffage | Programmation hebdomadaire et dérogations | Confort et sobriété |

### Après-projet

- Formation des équipes sur site avec supports vidéo.
- Maintenance logicielle (mises à jour, sauvegardes).
- Assistance à distance avec prise en main sécurisée.
