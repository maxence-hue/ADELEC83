import Link from "next/link";
import { getServices } from "@/lib/content";
import { Section } from "../../components/section";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = createMetadata({
  title: "Services",
  description: "Découvrez les prestations ADElec 83 : électricité collective, domotique, climatisation, photovoltaïque, bornes de recharge et dépannage.",
  path: "/services"
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <Script
        id="breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/services")) }}
      />
      <Section
        title="Prestations électriques, domotiques et énergétiques"
        description="Chaque service est pensé pour accompagner syndic, exploitant tertiaire ou particulier exigeant avec une même exigence : sécurité, performance, maintenance durable."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">{service.excerpt}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <Button href={`/services/${service.slug}`} variant="ghost" className="mt-6 self-start">
                Voir le détail
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
