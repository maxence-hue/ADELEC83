import Script from "next/script";
import { ContactForm } from "../../components/contact-form";
import { Section } from "../../components/section";
import { Card } from "../../components/card";
import { company } from "@/lib/config";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contactez ADElec 83 pour un devis, une maintenance ou un dépannage électrique dans le Var. Réponse garantie sous 24h ouvrées.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Script
        id="breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/contact")) }}
      />
      <Section
        title="Parlez-nous de votre projet électrique"
        description="Remplissez le formulaire ou contactez-nous par téléphone pour planifier une visite technique."
      >
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <Card>
            <ContactForm />
          </Card>
          <div className="space-y-6">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Coordonnées directes</h2>
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
              <p className="mt-4 text-sm text-primary/80">
                Réponse sous 48h ouvrées avec suivi personnalisé de votre dossier.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Zone d’intervention</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Intervention dans tout le Var : métropole toulonnaise, Solliès, La Garde, La Valette, Hyères, Cuers...
              </p>
              <div className="mt-4 flex items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
                <svg viewBox="0 0 200 140" className="h-36 w-full max-w-xs text-primary" aria-hidden>
                  <rect x="10" y="10" width="180" height="120" rx="20" fill="currentColor" opacity="0.1" />
                  <path d="M100 30a35 35 0 0 0-35 35c0 30 35 55 35 55s35-25 35-55a35 35 0 0 0-35-35Zm0 50a15 15 0 1 1 0-30 15 15 0 0 1 0 30Z" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
