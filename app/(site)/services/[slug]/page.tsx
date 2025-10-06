import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceSlugs, getServiceBySlug } from '@/lib/content';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import { Section } from '@/components/section';
import { ButtonLink } from '@/components/button';
import { FAQ } from '@/components/faq';

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  if (!service) return { title: 'Service introuvable' };
  return {
    title: service.frontmatter.title,
    description: service.frontmatter.excerpt,
    openGraph: {
      title: service.frontmatter.title,
      description: service.frontmatter.excerpt
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  const { frontmatter, Content } = service;

  return (
    <Section title={frontmatter.title} subtitle={frontmatter.hero}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Services', href: '/services' },
              { name: frontmatter.title, href: `/services/${service.slug}` }
            ])
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: frontmatter.title,
              description: frontmatter.excerpt,
              slug: service.slug
            })
          )
        }}
      />
      <div className="prose prose-slate max-w-none dark:prose-invert">
        {Content}
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Bénéfices clients</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {frontmatter.benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Livrables</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {frontmatter.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Process d'intervention</h3>
        <ol className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          {frontmatter.process.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Questions fréquentes</h3>
        <FAQ items={frontmatter.faq.map(({ q, a }) => ({ question: q, answer: a }))} />
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Demander un devis</ButtonLink>
        <ButtonLink variant="outline" href="tel:+33617020637">
          Contacter un technicien
        </ButtonLink>
      </div>
    </Section>
  );
}
