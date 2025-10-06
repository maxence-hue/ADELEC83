import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { FeatureList } from "../components/feature-list";
import { Section } from "../components/section";
import { Steps } from "../components/steps";
import { Gallery } from "../components/gallery";
import { Testimonial } from "../components/testimonial";
import { FAQ } from "../components/faq";
import { testimonials, faqs } from "@/lib/config";
import { getServices, getRealisations, getBlogPosts } from "@/lib/content";
import { BlogCard } from "../components/blog-card";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "ADElec 83, électricien du Var depuis 1995. Installations collectives, tertiaires et résidentielles : domotique, climatisation, photovoltaïque, bornes de recharge et maintenance.",
  path: "/"
});

export default async function HomePage() {
  const [services, realisations, blogPosts] = await Promise.all([
    getServices(),
    getRealisations(),
    getBlogPosts()
  ]);

  return (
    <>
      <Script
        id="breadcrumb-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/")) }}
      />
      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge>Électricien certifié depuis 1995</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              ADElec 83 — électricité, domotique et énergie pour vos bâtiments collectifs, tertiaires et résidentiels
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Études, travaux neufs et rénovation, maintenance et dépannages rapides : notre équipe intervient dans tout le Var pour sécuriser vos installations et optimiser votre confort énergétique.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg">
                Demander un devis
              </Button>
              <Button href="tel:+33617020637" variant="outline" size="lg">
                Appeler maintenant
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-slate-500 dark:text-slate-400">Expérience</dt>
                <dd className="text-2xl font-semibold text-slate-900 dark:text-white">+29 ans</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500 dark:text-slate-400">Domaines</dt>
                <dd className="text-2xl font-semibold text-slate-900 dark:text-white">Collectif · Tertiaire · Résidentiel</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500 dark:text-slate-400">Zone</dt>
                <dd className="text-2xl font-semibold text-slate-900 dark:text-white">Var &amp; métropole toulonnaise</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/10 to-primary/30 p-10 shadow-lg dark:border-slate-800 dark:from-primary/20 dark:to-primary/40">
              <svg
                viewBox="0 0 240 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-primary"
                role="img"
                aria-label="Illustration d'un chantier électrique"
              >
                <rect x="10" y="40" width="220" height="120" rx="16" fill="currentColor" opacity="0.1" />
                <path d="M30 130h60l20-40 24 30 22-18 34 28" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <rect x="60" y="70" width="40" height="30" rx="6" fill="currentColor" opacity="0.3" />
                <rect x="140" y="70" width="40" height="30" rx="6" fill="currentColor" opacity="0.3" />
                <path d="M120 20v30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <circle cx="120" cy="14" r="10" fill="currentColor" />
              </svg>
              <div className="absolute -bottom-6 left-1/2 w-11/12 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Coordination de chantier</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Planning, consignation, contrôle qualité, rapport numérique.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="services"
        title="Nos services clés pour vos infrastructures électriques"
        description="Une approche transversale pour répondre aux besoins des copropriétés, entreprises et collectivités."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.slug} className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{service.excerpt}</p>
              </div>
              <Button href={`/services/${service.slug}`} variant="ghost" className="mt-6 self-start">
                En savoir plus
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Pourquoi choisir ADElec 83 ?"
        description="Des engagements clairs pour sécuriser vos installations et accompagner vos usagers au quotidien."
      >
        <FeatureList
          columns={3}
          items={[
            "Ingénierie intégrée : diagnostics thermiques, calculs de sections et bilans de puissance",
            "Assurances décennales et RC pro pour les projets collectifs et tertiaires",
            "Techniciens habilités B2V BR, interventions consignées",
            "Gestion numérique des rapports et DOE",
            "Maintenance préventive planifiée",
            "Astuce énergie : pilotage des consommations en domotique"
          ]}
        />
      </Section>

      <Section title="Notre méthodologie éprouvée" description="Un déroulé maîtrisé pour chaque chantier, de la première visite à la maintenance.">
        <Steps
          steps={[
            "Étude sur site et relevé des installations existantes",
            "Proposition technique et devis détaillé",
            "Planification des travaux en coordination avec vos équipes",
            "Installation et câblage dans le respect des normes",
            "Tests, mise en service et formation des utilisateurs",
            "Maintenance préventive et astreinte dépannage"
          ]}
        />
      </Section>

      <Section
        id="realisations"
        title="Réalisations récentes dans le Var"
        description="Des chantiers menés en copropriété, dans les PME et chez les particuliers exigeants."
      >
        <Gallery
          items={realisations.slice(0, 3).map((realisation) => ({
            title: realisation.title,
            description: realisation.description,
            href: `/realisations`,
            meta: `${realisation.ville} • ${realisation.annee}`
          }))}
        />
      </Section>

      <Section title="Ils nous font confiance">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section title="Questions fréquentes" description="Sécurité, délais, garanties : nous répondons aux questions les plus posées.">
        <FAQ items={faqs} />
      </Section>

      <Section
        title="Nos actus et conseils énergie"
        description="Retours d’expérience, réglementation et bonnes pratiques pour vos installations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section className="pb-24 text-center" title="Prêts à sécuriser votre réseau électrique ?">
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Contactez ADElec 83 pour planifier une visite technique et obtenir un devis précis sous 48h ouvrées.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg">
            Prendre rendez-vous
          </Button>
          <Button href="tel:+33617020637" variant="outline" size="lg">
            Nous appeler
          </Button>
        </div>
      </Section>
    </>
  );
}
