import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { ServiceCard } from '@/components/service-card';
import { RealisationCard } from '@/components/realisation-card';
import { Stats } from '@/components/stats';
import { CTASection } from '@/components/cta-section';
import { Certifications } from '@/components/certifications';
import { Testimonial } from '@/components/testimonial';
import { FAQ } from '@/components/faq';
import { Section } from '@/components/section';
import { supabase } from '@/lib/supabase';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADELEC83 - Électricité, Climatisation et Panneaux Solaires dans le Var',
  description: 'Entreprise familiale spécialisée en électricité générale, photovoltaïque, climatisation et bornes de recharge dans le Var depuis 2005',
  openGraph: {
    title: 'ADELEC83 - Votre électricien dans le Var',
    description: 'Installation électrique, panneaux solaires, climatisation et bornes de recharge',
    images: ['/images/og-image.jpg'],
  },
};

export default async function HomePage() {
  // Récupération des données depuis Supabase
  const [
    { data: pageData },
    { data: realisations },
    { data: testimonials },
    { data: faqItems },
    { data: companyInfo }
  ] = await Promise.all([
    supabase.from('pages').select('*').eq('slug', 'accueil').single(),
    supabase.from('realisations').select('*').eq('featured', true).order('order_index', { ascending: true }).limit(4),
    supabase.from('temoignages').select('*').eq('featured', true).limit(3),
    supabase.from('faq').select('*').eq('active', true).order('order_index', { ascending: true }).limit(6),
    supabase.from('company_info').select('*').eq('key', 'stats').single(),
  ]);

  const stats = companyInfo?.value as any || {
    annees_experience: 20,
    installations: 600,
    clients_satisfaits: 98,
    employes: 10
  };

  const services = [
    {
      title: 'Électricité Générale',
      description: 'Installation, rénovation et dépannage électrique pour particuliers et professionnels',
      iconName: 'zap' as const,
      href: '/services/electricite',
      color: 'blue' as const,
    },
    {
      title: 'Photovoltaïque',
      description: 'Installation de panneaux solaires en autoconsommation ou revente totale',
      iconName: 'sun' as const,
      href: '/services/photovoltaique',
      color: 'yellow' as const,
    },
    {
      title: 'Climatisation',
      description: 'Pose et entretien de climatisation réversible Daikin, Mitsubishi, Atlantic',
      iconName: 'wind' as const,
      href: '/services/climatisation',
      color: 'cyan' as const,
    },
    {
      title: 'Bornes de Recharge',
      description: 'Installation de bornes IRVE pour véhicules électriques, certification garantie',
      iconName: 'battery' as const,
      href: '/services/bornes',
      color: 'green' as const,
    },
  ];

  const statsArray = [
    { value: stats.annees_experience, suffix: '+', label: 'Années d\'expérience' },
    { value: stats.installations, suffix: '+', label: 'Installations réalisées' },
    { value: stats.clients_satisfaits, suffix: '%', label: 'Clients satisfaits' },
    { value: stats.employes, label: 'Experts qualifiés' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={pageData?.hero_title || 'Électricité, Climatisation et Panneaux Solaires dans le Var depuis 2005'}
        subtitle={pageData?.hero_subtitle || 'Votre partenaire local pour tous vos projets énergétiques'}
        image="/images/hero-home.jpg"
        cta={{
          text: 'Demander un devis gratuit',
          href: '/contact',
        }}
        showScrollIndicator
      />

      {/* Stats Section */}
      <Stats stats={statsArray} />

      {/* Services Section */}
      <Section
        id="services"
        eyebrow="Nos Expertises"
        title="Des services complets pour tous vos projets énergétiques"
        subtitle="De l'électricité générale au photovoltaïque, nous accompagnons particuliers et professionnels dans le Var"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Réalisations Section */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos Réalisations"
          title="Des projets réussis dans tout le Var"
          subtitle="Découvrez quelques-unes de nos dernières installations"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation, index) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Pourquoi nous choisir */}
      <Section
        eyebrow="Pourquoi ADELEC83"
        title="Une entreprise familiale à votre service"
        subtitle="Basée à Solliès-Pont, nous intervenons dans tout le Var avec professionnalisme et réactivité"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise reconnue</h3>
            <p className="text-gray-600">
              Plus de 20 ans d'expérience et 600+ installations réalisées dans le Var
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[#1e1e1e]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accompagnement complet</h3>
            <p className="text-gray-600">
              Gestion des démarches administratives, aides financières et SAV local
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1e1e1e] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualité certifiée</h3>
            <p className="text-gray-600">
              Certifications RGE QualiPV, IRVE et Qualifélec pour votre tranquillité
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <Section eyebrow="Témoignages" title="Ils nous font confiance">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                city={testimonial.city || ''}
                rating={testimonial.rating || 5}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Certifications */}
      <Certifications />

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <Section eyebrow="Questions fréquentes" title="Tout savoir sur nos services">
          <FAQ items={faqItems.map(item => ({
            question: item.question,
            answer: item.answer,
          }))} />
        </Section>
      )}

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
