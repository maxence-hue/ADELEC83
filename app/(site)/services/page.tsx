import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '@/lib/content';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Section } from '@/components/section';
import { ButtonLink } from '@/components/button';

export const metadata: Metadata = {
  title: 'Services',
  description: "Les prestations ADElec 83 : électricité CFO/CFA, climatisation, domotique, IRVE, photovoltaïque et maintenance dans le Var."
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <Section
      title="Nos expertises électriques"
      subtitle="Découvrez les prestations ADElec 83 pour vos bâtiments collectifs, tertiaires et résidences."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Services', href: '/services' }
            ])
          )
        }}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{service.frontmatter.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{service.frontmatter.excerpt}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {service.frontmatter.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <ButtonLink href={`/services/${service.slug}`}>Voir le détail</ButtonLink>
              <Link href="/contact" className="text-sm font-semibold text-brand-blue">
                Demander un devis →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
