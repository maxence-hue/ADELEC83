import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { Certifications } from '@/components/certifications';
import { supabase } from '@/lib/supabase';
import { Users, Award, MapPin, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos - ADELEC83 | Entreprise familiale depuis 2005',
  description: 'Découvrez l\'histoire d\'ADELEC83, entreprise familiale d\'électricité dans le Var depuis 2005. 10 experts à votre service.',
};

export default async function AboutPage() {
  const { data: pageData } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'a-propos')
    .single();

  const values = [
    {
      icon: Heart,
      title: 'Entreprise familiale',
      description: 'Fondée par Daniel Alehause en 2005, aujourd\'hui dirigée par son fils Maxence',
    },
    {
      icon: Users,
      title: '10 experts qualifiés',
      description: 'Une équipe soudée et expérimentée pour tous vos projets',
    },
    {
      icon: MapPin,
      title: 'Ancrage local',
      description: 'Basés à Solliès-Pont, nous intervenons dans tout le Var',
    },
    {
      icon: Award,
      title: 'Certifications multiples',
      description: 'RGE QualiPV, IRVE, Qualifelec pour garantir la qualité',
    },
  ];

  const timeline = [
    { year: '2005', event: 'Création d\'ADELEC83 par Daniel Alehause' },
    { year: '2010', event: 'Certification Qualifelec et développement de l\'activité' },
    { year: '2015', event: 'Spécialisation dans le photovoltaïque, certification QualiPV' },
    { year: '2020', event: 'Certification IRVE pour les bornes de recharge' },
    { year: '2023', event: 'Maxence Alehause reprend l\'entreprise familiale' },
    { year: '2025', event: 'Plus de 600 installations réalisées dans le Var' },
  ];

  return (
    <>
      <Hero
        title={pageData?.hero_title || "Notre Histoire"}
        subtitle={pageData?.hero_subtitle || "Entreprise familiale depuis 2005"}
        image="/images/hero-about.jpg"
        cta={{
          text: 'Nous contacter',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            ADELEC83 est née de la passion de Daniel Alehause pour l'électricité et son désir d'apporter
            un service de qualité aux habitants du Var. Depuis 2005, nous avons bâti notre réputation sur
            le professionnalisme, la proximité et l'innovation.
          </p>
          <p className="text-lg text-gray-600">
            En 2023, Maxence Alehause a repris le flambeau, apportant une vision moderne tout en conservant
            les valeurs familiales qui font notre force. Aujourd'hui, avec une équipe de 10 experts,
            nous sommes fiers d'être votre partenaire énergétique de confiance.
          </p>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Nos valeurs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Notre parcours</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0 w-24 text-right pr-4">
                <span className="text-[#0047AB] font-bold">{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#FF8C42] rounded-full mt-1 relative">
                {index < timeline.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-300" />
                )}
              </div>
              <div className="flex-grow pl-4">
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#1e1e1e] text-white">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Une équipe à votre service</h2>
            <p className="text-gray-300 mb-6">
              Nos 10 collaborateurs partagent la même passion pour l'excellence et la satisfaction client.
              Électriciens, techniciens photovoltaïques, frigoristes : chaque expert apporte son savoir-faire
              pour garantir la réussite de votre projet.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-[#FF8C42] mr-3">✓</span>
                Formation continue sur les dernières technologies
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C42] mr-3">✓</span>
                Habilitations électriques à jour
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C42] mr-3">✓</span>
                Respect strict des normes de sécurité
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C42] mr-3">✓</span>
                Approche client personnalisée
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Nos engagements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#FF8C42]">Qualité</h4>
                <p className="text-sm text-gray-300">Matériel premium et installation soignée</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FF8C42]">Proximité</h4>
                <p className="text-sm text-gray-300">Intervention rapide dans tout le Var</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FF8C42]">Transparence</h4>
                <p className="text-sm text-gray-300">Devis détaillés et prix justes</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FF8C42]">Durabilité</h4>
                <p className="text-sm text-gray-300">Solutions écologiques et économiques</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Zone d'intervention</h2>
          <p className="text-gray-600">Nous intervenons dans tout le département du Var</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-[#0047AB]">Var (83)</h3>
            <p className="text-sm text-gray-600">Département principal</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-[#0047AB]">Bouches-du-Rhône (13)</h3>
            <p className="text-sm text-gray-600">Zones limitrophes</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-[#0047AB]">Alpes-Maritimes (06)</h3>
            <p className="text-sm text-gray-600">Zones limitrophes</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Principales villes : Toulon, Hyères, La Garde, La Valette, Solliès-Pont, 
            Brignoles, Draguignan, Saint-Raphaël, Fréjus
          </p>
        </div>
      </Section>

      <Certifications />

      <CTASection
        title="Faisons connaissance"
        subtitle="Rencontrons-nous pour discuter de votre projet"
      />
    </>
  );
}
