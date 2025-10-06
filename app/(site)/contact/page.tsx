import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { company, cities } from '@/lib/config';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez ADElec 83 pour un devis électricité, domotique, climatisation, bornes de recharge ou photovoltaïque."
};

export default function ContactPage() {
  return (
    <Section title="Entrons en contact" subtitle="Nous répondons sous 2 heures ouvrées et planifions rapidement une visite technique.">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Contact', href: '/contact' }
            ])
          )
        }}
      />
      <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Formulaire de demande</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Merci de préciser vos besoins : nous reviendrons vers vous avec une proposition de rendez-vous et les documents
            nécessaires (plans, schémas, dossiers administratifs).
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Coordonnées</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {company.address.street}
              <br />
              {company.address.postalCode} {company.address.city}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Tél. : <a className="font-semibold text-brand-blue" href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
              <br />
              Email : <a className="text-brand-blue" href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-brand-blue">Horaires</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {company.hours.map((item) => (
                <li key={item.day}>
                  <span className="font-medium text-slate-900 dark:text-white">{item.day}</span> — {item.hours}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-blue/60 bg-brand-blue/5 p-6 text-sm text-slate-600 dark:text-slate-300">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Zones d'intervention</h3>
            <p className="mt-2">{cities.join(', ')} et alentours.</p>
            <p className="mt-4">Intervention urgente ? Appelez directement le <a className="font-semibold text-brand-blue" href={`tel:${company.phone.replace(/\s+/g, '')}`}>06 17 02 06 37</a>.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Carte</h3>
            <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
              <svg className="h-20 w-20 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Localisation indicative — rendez-vous sur site sous 48h.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
