import type { Metadata } from 'next';
import { getRealisations } from '@/lib/content';
import { breadcrumbJsonLd } from '@/lib/seo';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Sélection de chantiers ADElec 83 : résidences collectives, bâtiments tertiaires et installations énergétiques dans le Var.'
};

export default async function RealisationsPage() {
  const realisations = await getRealisations();

  return (
    <Section
      title="Réalisations récentes"
      subtitle="Chaque projet est suivi avec un plan de prévention, une documentation photo et des essais de mise en service."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Réalisations', href: '/realisations' }
            ])
          )
        }}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {realisations.map((item) => (
          <article
            id={item.slug}
            key={item.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-40 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
              <svg className="h-16 w-16 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h18M3 12h18M3 17h18" />
                <path d="M7 7v10M12 7v10M17 7v10" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-brand-blue">
              {item.ville} • {item.annee}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
