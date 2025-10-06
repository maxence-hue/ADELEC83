import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/content";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Section } from "../../../components/section";
import { FeatureList } from "../../../components/feature-list";
import { FAQ } from "../../../components/faq";
import { Button } from "../../../components/button";
import { TableOfContents } from "../../../components/toc";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug).catch(() => null);
  if (!service) {
    return createMetadata({ title: "Service", path: `/services/${params.slug}` });
  }
  return createMetadata({
    title: service.frontmatter.title,
    description: service.frontmatter.excerpt,
    path: `/services/${params.slug}`,
    type: "article"
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await getServiceBySlug(params.slug).catch(() => null);

  if (!service) {
    notFound();
  }

  const { content, frontmatter, headings } = service;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: frontmatter.title,
    description: frontmatter.excerpt,
    areaServed: "Var",
    provider: {
      "@type": "Organization",
      name: "ADElec 83"
    }
  };

  return (
    <>
      <Script
        id={`breadcrumb-service-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(`/services/${params.slug}`)) }}
      />
      <Script
        id={`service-jsonld-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Section className="pt-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{frontmatter.hero}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{frontmatter.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{frontmatter.excerpt}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Demander un devis</Button>
              <Button href="tel:+33617020637" variant="outline">
                Contacter un expert
              </Button>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">Bénéfices clés</h2>
              <ul className="mt-3 space-y-2">
                {frontmatter.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden w-64 flex-none lg:block">
            <TableOfContents items={headings} />
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[2fr,1fr]">
          <article className="container-prose">{content}</article>
          <aside className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Livrables concrets</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {frontmatter.deliverables.map((deliverable) => (
                  <li key={deliverable}>• {deliverable}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Processus d’intervention</h3>
              <FeatureList columns={1} items={frontmatter.process} />
            </div>
          </aside>
        </div>
      </Section>
      <Section title="Questions fréquentes" description="Préparez votre projet en toute transparence.">
        <FAQ items={frontmatter.faq.map((item) => ({ question: item.q, answer: item.a }))} />
      </Section>
    </>
  );
}
