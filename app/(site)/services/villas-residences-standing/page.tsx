import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { RealisationCard } from '@/components/realisation-card';
import { supabase } from '@/lib/supabase';
import { CheckCircle, Home, Lightbulb, Shield, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Électricité pour Villa & Résidences de standing - ADELEC83',
  description: 'Installation électrique haut de gamme pour villas de prestige dans le Var et les Alpes-Maritimes. ADELEC83 crée des installations sur mesure, élégantes et performantes.',
  keywords: ['électricité villa var', 'installation villa luxe', 'électricien villa saint-tropez', 'domotique villa', 'électricité villa prestige'],
};

export default async function VillasResidencesPage() {
  // Récupération des réalisations de villas
  const { data: realisations } = (await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'villa')
    .order('created_at', { ascending: false })
    .limit(6)) as any;

  const expertises = [
    {
      icon: Shield,
      title: 'Études techniques et plans d\'exécution complets',
      description: 'Conception sur mesure avec coordination architecte/décorateur',
    },
    {
      icon: Lightbulb,
      title: 'Tableaux électriques sur mesure',
      description: 'Installation de tableaux haute performance et discrets',
    },
    {
      icon: Home,
      title: 'Gestion d\'éclairage intérieur / extérieur',
      description: 'Mise en valeur de votre villa de jour comme de nuit',
    },
    {
      icon: Smartphone,
      title: 'Solutions domotiques KNX, Legrand, Delta Dore',
      description: 'Pilotage intelligent de toute votre installation',
    },
    {
      icon: Shield,
      title: 'Alarme, vidéosurveillance, portail motorisé',
      description: 'Sécurité complète et intégrée à votre domotique',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Étude & plans techniques',
      description: 'Coordination avec architecte / décorateur',
    },
    {
      number: '2',
      title: 'Installation',
      description: 'Équipes formées aux standards les plus exigeants',
    },
    {
      number: '3',
      title: 'Tests & réglages',
      description: 'Sécurité, confort, conformité',
    },
    {
      number: '4',
      title: 'Maintenance & suivi',
      description: 'Contrat d\'entretien dédié',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Électricité haut de gamme pour villas dans le Var"
        subtitle="Des installations élégantes, performantes et parfaitement intégrées à votre résidence. ADELEC83 conçoit et réalise des installations électriques sur mesure pour villas de prestige, du tableau principal à la gestion domotique complète."
        image="/images/hero-villa.jpg"
        cta={{
          text: 'Demander un rendez-vous personnalisé',
          href: '/contact',
        }}
      />

      {/* Section expertise */}
      <Section
        eyebrow="Excellence résidentielle"
        title="Un savoir-faire au service de l'excellence résidentielle"
        subtitle="Depuis plus de 20 ans, ADELEC83 accompagne les propriétaires et architectes dans la conception d'installations électriques fiables, durables et invisibles. Chaque détail compte : harmonie des appareillages, intégration esthétique, confort et sécurité totale."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-blue">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-brand-gray">{expertise.title}</h3>
                <p className="text-gray-600 text-sm">{expertise.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section design & confort */}
      <Section 
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
        title="Allier esthétique, confort et technologie"
        subtitle="Nous travaillons avec les plus grandes marques de design électrique (Gira, Bticino, Meljac…) et intégrons des solutions de pilotage invisibles, discrètes et hautement technologiques. Votre villa devient un espace intelligent, confortable et sûr."
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3 text-brand-gray">Design premium</h3>
            <p className="text-gray-600">
              Interrupteurs et prises des plus grandes marques européennes, finitions haut de gamme
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-xl font-bold mb-3 text-brand-gray">Éclairage sur mesure</h3>
            <p className="text-gray-600">
              Mise en valeur de votre intérieur avec éclairage indirect et gestion de scénarios
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3 text-brand-gray">Pilotage mobile</h3>
            <p className="text-gray-600">
              Contrôlez votre villa depuis votre smartphone, où que vous soyez
            </p>
          </div>
        </div>
      </Section>

      {/* Section réalisations */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos réalisations"
          title="Quelques-unes de nos réalisations de villas"
          subtitle="ADELEC83 intervient sur tout le littoral varois (Saint-Tropez, Bormes, Hyères, Bandol…) pour des installations complètes, du câblage initial à la mise en service. Découvrez quelques exemples de villas électriques haut de gamme réalisées récemment."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Section process */}
      <Section
        eyebrow="Notre méthode"
        title="Notre méthode sur-mesure"
        className="bg-gray-50"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-2xl font-bold text-brand-gray mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-brand-gray">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 text-brand-yellow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Section témoignages */}
      <Section
        eyebrow="Témoignages"
        title="Ils nous ont fait confiance"
        className="bg-brand-blue text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-xl italic mb-4">
            "Une installation parfaite, discrète, et un accompagnement digne d'un vrai partenaire de chantier."
          </blockquote>
          <p className="text-brand-yellow font-semibold">Architecte, Saint-Raphaël</p>
        </div>
      </Section>

      {/* Zone d'intervention */}
      <Section
        title="Nos zones d'intervention"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 text-lg mb-8">
            Nous intervenons sur tout le Var et les Alpes-Maritimes pour des projets neufs ou de rénovation de villas de prestige.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="font-bold text-brand-blue mb-2">Littoral varois</h3>
              <p className="text-sm text-gray-600">Saint-Tropez, Sainte-Maxime, Cavalaire, Le Lavandou</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">🌴</div>
              <h3 className="font-bold text-brand-blue mb-2">Hyères & Îles</h3>
              <p className="text-sm text-gray-600">Hyères, Porquerolles, Port-Cros, Île du Levant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="font-bold text-brand-blue mb-2">Alpes-Maritimes</h3>
              <p className="text-sm text-gray-600">Cannes, Antibes, Nice et arrière-pays</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <CTASection
        title="Vous avez un projet de villa ? Parlons-en."
        subtitle="Nos équipes interviennent sur tout le Var et les Alpes-Maritimes pour des projets neufs ou de rénovation."
      />
    </>
  );
}
