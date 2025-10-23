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
  title: 'ADELEC83 – Électricien, climatisation et panneaux solaires dans le Var (83)',
  description: 'ADELEC83, votre expert en électricité, climatisation, bornes de recharge et panneaux solaires dans le Var. Études, installation et maintenance depuis 2005. Devis gratuit.',
  keywords: ['électricien Var', 'climatisation Solliès-Pont', 'installation panneau solaire Var', 'borne de recharge Toulon', 'entreprise électricité Hyères', 'artisan solaire RGE Var'],
  openGraph: {
    title: 'ADELEC83 – Électricien, climatisation et panneaux solaires dans le Var',
    description: 'ADELEC83, votre expert en électricité, climatisation, bornes de recharge et panneaux solaires dans le Var. Études, installation et maintenance depuis 2005.',
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
  ] = (await Promise.all([
    supabase.from('pages').select('*').eq('slug', 'accueil').single(),
    supabase.from('realisations').select('*').eq('featured', true).order('order_index', { ascending: true }).limit(4),
    supabase.from('temoignages').select('*').eq('featured', true).limit(3),
    supabase.from('faq').select('*').eq('active', true).order('order_index', { ascending: true }).limit(6),
    supabase.from('company_info').select('*').eq('key', 'stats').single(),
  ])) as any;

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
        title="Électricien, climatisation et panneaux solaires dans le Var depuis 2005"
        subtitle="ADELEC83 accompagne particuliers et professionnels dans la modernisation de leurs installations électriques, climatiques et solaires, avec des solutions locales et durables."
        image="/images/hero-home.jpg"
        cta={{
          text: 'Demandez votre étude gratuite',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Voir nos réalisations',
          href: '/realisations',
        }}
        badges={[
          '✅ Entreprise RGE QualiPV & QualiClimafroid',
          '✅ 20 ans d\'expérience dans l\'énergie',
          '✅ Plus de 500 installations réalisées dans le Var'
        ]}
        showScrollIndicator
      />

      {/* Stats Section */}
      <Stats stats={statsArray} />

      {/* Services Section */}
      <Section
        id="services"
        eyebrow="Nos domaines d'expertise"
        title="Nos expertises"
        subtitle="ADELEC83 intervient sur tous vos projets d'énergie : de l'électricité générale à la production solaire, en passant par la climatisation et les bornes de recharge. Découvrez nos spécialités."
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
          eyebrow="Nos dernières réalisations"
          title="Nos réalisations dans le Var"
          subtitle="Découvrez quelques-unes de nos installations réalisées dans le Var et les Alpes-Maritimes : du particulier à l'entreprise, chaque projet est unique."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Pourquoi nous choisir */}
      <Section
        eyebrow="Pourquoi nous faire confiance ?"
        title="Pourquoi choisir ADELEC83 ?"
        subtitle="Depuis plus de 20 ans, nous mettons notre savoir-faire au service de la performance énergétique. Choisir ADELEC83, c'est choisir la fiabilité, la proximité et l'expérience d'un artisan du Var engagé pour l'avenir."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mt-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🧱
            </div>
            <h3 className="text-lg font-bold mb-2">20 ans d'expérience</h3>
            <p className="text-gray-600 text-sm">
              dans les travaux électriques et climatiques
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              ⚡
            </div>
            <h3 className="text-lg font-bold mb-2">Techniciens qualifiés</h3>
            <p className="text-gray-600 text-sm">
              et formés chaque année
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🌞
            </div>
            <h3 className="text-lg font-bold mb-2">Entreprise locale RGE</h3>
            <p className="text-gray-600 text-sm">
              implantée à Solliès-Pont
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🔍
            </div>
            <h3 className="text-lg font-bold mb-2">Accompagnement complet</h3>
            <p className="text-gray-600 text-sm">
              étude, pose, maintenance
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              💬
            </div>
            <h3 className="text-lg font-bold mb-2">Contact direct</h3>
            <p className="text-gray-600 text-sm">
              et réactif avec un interlocuteur unique
            </p>
          </div>
        </div>
      </Section>

      {/* Économies Section */}
      <Section
        eyebrow="Économies d'énergie"
        title="Réduisez votre facture d'électricité jusqu'à 70 %"
        subtitle="Grâce à nos solutions sur mesure (panneaux solaires, climatisation performante, bornes connectées), vous produisez et consommez votre propre énergie verte. Nous étudions votre consommation, votre toiture et vos besoins pour concevoir la solution la plus rentable."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-blue mb-2">+500</div>
            <p className="text-gray-600">installations solaires</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-yellow mb-2">70%</div>
            <p className="text-gray-600">d'économies possibles</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-blue mb-2">3</div>
            <p className="text-gray-600">départements couverts (83, 13, 06)</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors">
            Je simule mes économies
          </a>
        </div>
      </Section>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <Section eyebrow="Témoignages clients" title="Ils nous ont fait confiance">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial: any) => (
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
          <FAQ items={faqItems.map((item: any) => ({
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
