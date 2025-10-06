import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { FeatureList } from '@/components/feature-list';
import { Steps } from '@/components/steps';
import { FAQ } from '@/components/faq';
import { TestimonialList } from '@/components/testimonial';
import { Gallery } from '@/components/gallery';
import { BlogCard } from '@/components/blog-card';
import { Badge } from '@/components/badge';
import { getServices, getRealisations, getBlogPosts } from '@/lib/content';
import { faqs, steps, testimonials, company, cities } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Accueil',
  description: `${company.baseline} — installations électriques, domotique, climatisation, photovoltaïque et maintenance dans le Var.`
};

export default async function HomePage() {
  const [services, realisations, blogPosts] = await Promise.all([
    getServices(),
    getRealisations(),
    getBlogPosts()
  ]);

  const featuredServices = services.slice(0, 3);
  const featuredRealisations = realisations.slice(0, 3).map((item) => ({
    title: item.title,
    description: `${item.ville} • ${item.annee}`,
    href: `/realisations#${item.slug}`
  }));
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="bg-gradient-to-br from-white via-brand-light to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <Badge>Depuis 1995</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              L'électricité sur-mesure pour vos sites collectifs, tertiaires et résidentiels.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              ADElec 83 garantit des installations sécurisées, conformes et performantes dans tout le Var. Nos équipes coordonnent vos travaux d'électricité, domotique, climatisation et photovoltaïque avec une disponibilité réactive pendant les heures ouvrées.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink variant="outline" href="tel:+33617020637">
                Appeler l'équipe
              </ButtonLink>
              <ButtonLink variant="secondary" href="tel:+33617020637">
                Urgence électrique
              </ButtonLink>
            </div>
            <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">Ancienneté</dt>
                <dd className="mt-1 text-slate-600 dark:text-slate-300">29 ans de chantiers livrés sans retard.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">Domaines</dt>
                <dd className="mt-1 text-slate-600 dark:text-slate-300">Collectif, tertiaire, ERP, résidentiel premium.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">Zones</dt>
                <dd className="mt-1 text-slate-600 dark:text-slate-300">{cities.join(', ')}.</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <svg
              className="h-full max-h-[320px] w-full max-w-[420px] text-brand-blue"
              viewBox="0 0 400 320"
              role="img"
              aria-labelledby="hero-title"
            >
              <title id="hero-title">Schéma chantier électrique ADElec 83</title>
              <rect x="20" y="20" width="360" height="200" rx="24" fill="none" stroke="currentColor" strokeWidth="8" />
              <path d="M60 70h280M60 110h280" stroke="currentColor" strokeWidth="4" />
              <path d="M100 200v60l40-20 40 20v-60" stroke="currentColor" strokeWidth="4" fill="none" />
              <circle cx="280" cy="240" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M260 240l20-20 20 20-20 20z" fill="currentColor" />
            </svg>
          </div>
        </Container>
      </section>

      <Section
        id="services"
        eyebrow="Compétences clés"
        title="Des services complets pour piloter vos installations électriques"
        subtitle="Du bureau d'études à la maintenance, ADElec 83 sécurise vos projets avec des équipes certifiées et des process documentés."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.frontmatter.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{service.frontmatter.excerpt}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {service.frontmatter.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-auto inline-flex pt-4 text-sm font-semibold text-brand-blue">
                Découvrir →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <ButtonLink variant="outline" href="/services">
            Voir tous les services
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Méthodologie"
        title="Un déroulé de chantier transparent"
        subtitle="Chaque étape est tracée dans un carnet de chantier partagé pour garantir la conformité réglementaire et la sécurité des occupants."
      >
        <Steps steps={steps} />
      </Section>

      <Section
        eyebrow="Garanties"
        title="Pourquoi les collectivités et entreprises du Var nous confient leurs réseaux"
      >
        <FeatureList
          items={[
            {
              title: 'Assurances & certifications',
              description:
                'Responsabilité civile et décennale, habilitations NFC 18-510, attestations Consuel et Qualifelec fournies à la livraison.'
            },
            {
              title: 'Suivi réactif',
              description: 'Réponse sous 2 heures ouvrées, astreinte téléphonique et reporting photo de chaque intervention.'
            },
            {
              title: 'Approche globale',
              description: 'Électricité CFO/CFA, climatisation, domotique KNX, IRVE et photovoltaïque pilotés par une équipe unique.'
            }
          ]}
        />
      </Section>

      <Section eyebrow="Réalisations" title="Chantiers récents" subtitle="Quelques projets marquants livrés dans le Var.">
        <Gallery items={featuredRealisations} />
      </Section>

      <Section eyebrow="Témoignages" title="Ils parlent de notre accompagnement">
        <TestimonialList items={testimonials} />
      </Section>

      <Section eyebrow="Questions fréquentes" title="Sécurité et conformité : vos questions">
        <FAQ items={faqs} />
      </Section>

      <Section eyebrow="Dernières actus" title="Blog ADElec 83">
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
            />
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl bg-brand-blue px-8 py-12 text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Besoin d'un devis rapide ?</h2>
              <p className="mt-3 text-brand-light">
                Décrivez-nous votre projet : nous planifions une visite technique et un devis détaillé en moins de 48 heures.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <ButtonLink href="/contact" className="bg-white text-brand-blue hover:bg-brand-light">
                Formulaire de contact
              </ButtonLink>
              <ButtonLink variant="outline" href="tel:+33617020637" className="border-white text-white hover:bg-white/10">
                06 17 02 06 37
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
