import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { RealisationCard } from '@/components/realisation-card';
import { sanityClient, REALISATIONS_BY_SERVICE_TYPE_QUERY, type Realisation } from '@/lib/sanity';
import { Award, CheckCircle, Sparkles, Shield, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Électricité de Luxe & Projets d\'exception - ADELEC83',
  description: 'La signature électrique des lieux d\'exception dans le Var. ADELEC83 conçoit et installe des systèmes électriques de haute précision pour architectes, décorateurs et propriétaires exigeants.',
  keywords: ['électricité luxe var', 'installation haut de gamme', 'électricien prestige saint-tropez', 'projet exception var', 'électricité design'],
};

export default async function LuxeExceptionPage() {
  // Récupération des réalisations filtrées par type de service "luxe-projets-exception"
  const realisations: Realisation[] = await sanityClient.fetch(
    REALISATIONS_BY_SERVICE_TYPE_QUERY,
    { serviceType: 'luxe-projets-exception' }
  ).catch(() => []);

  const equipments = [
    'Meljac',
    'Gira',
    'Jung',
    'Schneider Odace Styl',
    'Legrand',
    'Delta Dore',
  ];

  const technologies = [
    {
      icon: Sparkles,
      title: 'Pilotage complet via tablette murale',
      description: 'Interface intuitive et élégante intégrée à votre décoration',
    },
    {
      icon: Zap,
      title: 'Scénarios d\'éclairage',
      description: 'Dîner, détente, absence... Créez l\'ambiance parfaite en un clic',
    },
    {
      icon: Shield,
      title: 'Gestion climatique et énergétique',
      description: 'Optimisation automatique du confort et des consommations',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Matériaux premium',
      description: 'Sélection des meilleures marques européennes',
    },
    {
      icon: Users,
      title: 'Équipes hautement qualifiées',
      description: 'Techniciens experts formés aux installations de luxe',
    },
    {
      icon: CheckCircle,
      title: 'Respect des délais et des finitions',
      description: 'Engagement sur la qualité et les échéances',
    },
    {
      icon: Shield,
      title: 'Service après-vente réactif',
      description: 'Maintenance et suivi personnalisé',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Électricité de luxe & projets d'exception"
        subtitle="La signature électrique des lieux d'exception dans le Var. ADELEC83 conçoit et installe des systèmes électriques de haute précision, pensés pour les architectes, décorateurs et propriétaires exigeants."
        image="/images/hero-luxe.jpg"
        cta={{
          text: 'Obtenir une étude personnalisée',
          href: '/contact',
        }}
      />

      {/* Section positionnement */}
      <Section
        eyebrow="Électricité haut de gamme"
        title="L'art de l'électricité haut de gamme"
        subtitle="Dans un projet de prestige, chaque prise, chaque lumière, chaque détail compte. Nous travaillons en collaboration avec les plus grands noms de l'architecture et du design pour créer des installations à la hauteur de vos exigences."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-lg font-bold mb-2">Coordination avec architectes</h3>
            <p className="text-sm text-white/90">
              Collaboration étroite avec bureaux d'études
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-yellow to-brand-yellow-dark text-brand-gray p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg font-bold mb-2">Équipements premium</h3>
            <p className="text-sm text-brand-gray/80">
              Meljac, Gira, Jung, Schneider Odace Styl
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔌</div>
            <h3 className="text-lg font-bold mb-2">Intégration invisible</h3>
            <p className="text-sm text-white/90">
              Câbles, coffrets et modules totalement discrets
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-yellow to-brand-yellow-dark text-brand-gray p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-bold mb-2">Respect du design</h3>
            <p className="text-sm text-brand-gray/80">
              Finitions impeccables et harmonieuses
            </p>
          </div>
        </div>
      </Section>

      {/* Section domotique et innovation */}
      <Section 
        className="bg-gray-50"
        eyebrow="Innovation"
        title="La technologie au service du raffinement"
        subtitle="De la gestion centralisée des lumières à la sonorisation discrète des pièces, nous intégrons des technologies de pointe dans une logique d'esthétique et de simplicité. Notre objectif : vous offrir un contrôle total sans jamais altérer le style de votre intérieur."
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-gray">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section projets emblématiques */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos réalisations"
          title="Des chantiers d'exception réalisés dans le Var et les Alpes-Maritimes"
          subtitle="Villas contemporaines à Saint-Tropez, hôtels à Bandol, domaines viticoles à La Londe... ADELEC83 signe les installations électriques les plus élégantes du Sud."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/realisations"
              className="inline-block bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
            >
              Voir nos réalisations
            </a>
          </div>
        </Section>
      )}

      {/* Section valeur & engagement */}
      <Section
        className="bg-gradient-to-br from-brand-blue/10 to-brand-yellow/10"
        eyebrow="Nos engagements"
        title="Excellence, discrétion, précision"
        subtitle="ADELEC83 s'engage sur la qualité absolue de chaque installation"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-brand-gray" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-brand-gray">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section partenaires */}
      <Section
        eyebrow="Partenaires"
        title="Nos partenaires du luxe"
        subtitle="Nous collaborons avec les marques et acteurs reconnus du secteur, et des architectes locaux de renom."
        className="bg-brand-gray text-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {equipments.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="text-xl font-bold text-brand-yellow">{brand}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-white/90 italic">
            + Collaboration avec des architectes et décorateurs de renom dans toute la région
          </p>
        </div>
      </Section>

      {/* Section témoignages */}
      <Section
        eyebrow="Témoignages"
        title="Ce qu'ils disent de nous"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-brand-yellow text-3xl">
                ★★★★★
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-center italic text-gray-700 mb-6">
              "Un travail d'une précision remarquable, parfaitement intégré à la décoration intérieure."
            </blockquote>
            <p className="text-center font-semibold text-brand-blue">
              Atelier d'architecture G. Rossi, Toulon
            </p>
          </div>
        </div>
      </Section>

      {/* Secteurs d'intervention */}
      <Section
        title="Nos secteurs d'intervention"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-blue">
            <div className="text-4xl mb-3">🏡</div>
            <h3 className="font-bold text-brand-blue mb-2">Villas de prestige</h3>
            <p className="text-sm text-gray-600">Architecture contemporaine et traditionnelle haut de gamme</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-yellow">
            <div className="text-4xl mb-3">🏨</div>
            <h3 className="font-bold text-brand-blue mb-2">Hôtels & resorts</h3>
            <p className="text-sm text-gray-600">Établissements luxueux et boutique-hôtels</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-blue">
            <div className="text-4xl mb-3">🍷</div>
            <h3 className="font-bold text-brand-blue mb-2">Domaines viticoles</h3>
            <p className="text-sm text-gray-600">Châteaux et caves de dégustation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-yellow">
            <div className="text-4xl mb-3">🏢</div>
            <h3 className="font-bold text-brand-blue mb-2">Showrooms & boutiques</h3>
            <p className="text-sm text-gray-600">Espaces commerciaux premium</p>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <CTASection
        title="Vous recherchez un partenaire de confiance pour vos projets d'exception ?"
        subtitle="Nos équipes interviennent sur tout le littoral varois et les Alpes-Maritimes pour donner vie à vos projets les plus ambitieux."
      />
    </>
  );
}
