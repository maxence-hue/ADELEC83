import Script from "next/script";
import { company, citiesCovered } from "@/lib/config";
import { Section } from "../../components/section";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "À propos",
  description: "Depuis 1995, ADElec 83 accompagne copropriétés, PME et particuliers du Var pour tous leurs projets électriques et domotiques.",
  path: "/about"
});

const valeurs = [
  {
    title: "Proximité",
    description: "Une équipe basée à Solliès-Pont, disponible pour des visites sous 48h et un suivi personnalisé de chaque chantier."
  },
  {
    title: "Qualité",
    description: "Habilitations à jour, contrôles systématiques, matériaux certifiés et DOE numérique remis à la réception."
  },
  {
    title: "Sécurité",
    description: "Processus de consignation, EPI adaptés et formation continue aux normes NF C 15-100 et 18-510."
  }
];

const equipe = [
  {
    name: "Michel Alehause",
    role: "Fondateur & référent grands comptes",
    bio: "Électricien depuis 1995, Michel coordonne les projets collectifs et tertiaires et supervise les audits réglementaires."
  },
  {
    name: "Caroline Dupuis",
    role: "Cheffe de projets domotiques",
    bio: "Spécialiste KNX et Loxone, elle conçoit les scénarios de confort, sécurité et GTB pour les bâtiments connectés."
  },
  {
    name: "Romain Girard",
    role: "Responsable maintenance & dépannage",
    bio: "Ancien technicien d’exploitation, Romain pilote l’astreinte et la maintenance préventive pour les sites sensibles."
  }
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/about")) }}
      />
      <Section
        title="ADElec 83, partenaire électricité du Var depuis 1995"
        description="Créée à Solliès-Pont, l’entreprise familiale s’est développée autour d’un même objectif : sécuriser et moderniser les réseaux électriques des résidences, entreprises et collectivités locales."
      >
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <article className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
            <p>
              ADElec 83 accompagne les syndics, exploitants tertiaires et particuliers exigeants sur des projets allant de la rénovation de colonnes montantes à la mise en place de supervision énergétique. Chaque chantier est préparé avec une étude détaillée et une planification maîtrisée afin de limiter les coupures et d’assurer la sécurité des usagers.
            </p>
            <p>
              L’entreprise s’appuie sur un réseau d’artisans partenaires (CVC, courants faibles, solaire) pour proposer des offres complètes, en conservant un interlocuteur unique. Nous travaillons avec des marques reconnues : Schneider Electric, Hager, Legrand, Delta Dore, Socomec…
            </p>
            <p>
              Notre bureau reste ouvert du lundi au vendredi de 8h à 18h. Nous proposons un numéro d’urgence pour les copropriétés afin de garantir une intervention sous 24h ouvrées.
            </p>
          </article>
          <aside className="space-y-4">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Coordonnées</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                <a href="tel:+33617020637" className="hover:text-primary">
                  {company.phone}
                </a>
                <br />
                <a href="mailto:mc.alehause@sfr.fr" className="hover:text-primary">
                  {company.email}
                </a>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                {company.hours.map((slot) => (
                  <li key={slot.days}>
                    {slot.days} — {slot.hours}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-4 w-full">
                Prendre rendez-vous
              </Button>
            </Card>
          </aside>
        </div>
      </Section>
      <Section title="Notre équipe">
        <div className="grid gap-6 md:grid-cols-3">
          {equipe.map((member) => (
            <Card key={member.name}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm uppercase tracking-widest text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Nos valeurs">
        <div className="grid gap-6 md:grid-cols-3">
          {valeurs.map((valeur) => (
            <Card key={valeur.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{valeur.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{valeur.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Communes desservies">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          <p>
            ADElec 83 intervient principalement dans les communes suivantes : {citiesCovered.join(", ")}, et étudie toute demande dans le Var et les Bouches-du-Rhône limitrophes.
          </p>
        </div>
      </Section>
    </>
  );
}
