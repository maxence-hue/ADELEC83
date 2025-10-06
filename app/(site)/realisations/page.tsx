import Script from "next/script";
import { getRealisations } from "@/lib/content";
import { Section } from "../../components/section";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Réalisations",
  description: "Sélection de chantiers ADElec 83 : rénovation électrique de résidences, bornes de recharge, climatisation et photovoltaïque dans le Var.",
  path: "/realisations"
});

export default async function RealisationsPage() {
  const realisations = await getRealisations();

  return (
    <>
      <Script
        id="breadcrumb-realisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/realisations")) }}
      />
      <Section
        title="Chantiers livrés"
        description="Chaque projet est suivi par un chef de chantier ADElec 83 : coordination multi-corps d’état, consignations, rapports détaillés et maintenance programmée."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realisations.map((realisation) => (
            <Card key={realisation.slug} className="flex h-full flex-col">
              <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/30 text-primary">
                <svg viewBox="0 0 140 90" className="h-20 w-28" aria-hidden>
                  <rect x="10" y="15" width="120" height="60" rx="12" fill="currentColor" opacity="0.12" />
                  <path d="M20 60 45 40l22 18 20-14 25 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="45" cy="35" r="7" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{realisation.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">{realisation.description}</p>
                <p className="text-xs uppercase tracking-widest text-primary">
                  {realisation.ville} • {realisation.annee}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                  {realisation.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Nous confier votre projet
          </Button>
        </div>
      </Section>
    </>
  );
}
