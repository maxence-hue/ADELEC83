import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { RealisationCard } from '@/components/realisation-card';
import { supabase } from '@/lib/supabase';
import { Sun, Euro, Home, Smartphone, TrendingUp, Battery, Phone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Installation de panneaux solaires photovoltaïques dans le Var – ADELEC83',
  description: 'ADELEC83 installe vos panneaux solaires dans tout le Var. Autoconsommation, revente totale, batteries, études gratuites.',
  keywords: ['panneaux solaires Var', 'photovoltaïque Toulon', 'installation solaire Hyères', 'RGE QualiPV', 'autoconsommation solaire'],
};

export default async function PhotovoltaiquePage() {
  // Récupération des réalisations photovoltaïque
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'photovoltaique')
    .order('order_index', { ascending: true })
    .limit(6) as any;

  const advantages = [
    {
      icon: Sun,
      title: 'Production d\'énergie verte et gratuite',
      description: 'Profitez du soleil généreux du Var'
    },
    {
      icon: Euro,
      title: 'Aides et primes de l\'État',
      description: 'Primes autoconsommation disponibles'
    },
    {
      icon: TrendingUp,
      title: 'Rentabilité moyenne : 7 à 9 ans',
      description: 'Investissement rapidement amorti'
    },
    {
      icon: Smartphone,
      title: 'Suivi de production en temps réel',
      description: 'Application mobile incluse'
    }
  ];

  const offers = [
    {
      icon: Sun,
      title: 'Autoconsommation avec revente de surplus',
      description: 'Vous consommez votre énergie et revendez le reste à EDF OA.',
      features: [
        'Réduction de 50 à 70% de votre facture',
        'Prime à l\'autoconsommation',
        'Revente du surplus à 0,13€/kWh',
        'Solution la plus rentable'
      ]
    },
    {
      icon: Euro,
      title: 'Revente totale',
      description: 'Votre toiture devient une source de revenus.',
      features: [
        'Tarif de rachat garanti 20 ans',
        'Revente à 0,17€/kWh',
        'Revenus réguliers',
        'Investissement sécurisé'
      ]
    },
    {
      icon: Battery,
      title: 'Batterie virtuelle ou physique',
      description: 'Stockez votre énergie pour une autonomie maximale.',
      features: [
        'Autonomie énergétique',
        'Utilisation différée',
        'Protection contre les coupures',
        'Indépendance totale'
      ]
    }
  ];

  const realisationsExamples = [
    {
      power: '9 kWc',
      location: 'Carqueiranne',
      type: 'Autoconsommation avec batterie virtuelle',
      savings: '1 200€/an'
    },
    {
      power: '12 kWc',
      location: 'La Crau',
      type: 'Revente totale',
      savings: '2 040€/an'
    },
    {
      power: '6 kWc',
      location: 'Solliès-Pont',
      type: 'Autoconsommation',
      savings: '900€/an'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Installation de panneaux solaires photovoltaïques dans le Var"
        subtitle="ADELEC83, entreprise RGE QualiPV, installe des panneaux solaires pour particuliers et professionnels afin de produire une électricité locale, propre et rentable."
        image="/images/hero-photovoltaique.jpg"
        cta={{
          text: 'Demander mon étude gratuite',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Simuler mes économies',
          href: '/contact',
        }}
      />

      {/* Pourquoi passer à l'énergie solaire */}
      <Section
        eyebrow="Les avantages"
        title="Produisez votre propre électricité et réduisez vos factures"
        subtitle="Grâce au photovoltaïque, vous pouvez réduire jusqu'à 70 % vos dépenses d'électricité tout en valorisant votre patrimoine. ADELEC83 vous accompagne dans toutes les étapes : étude, installation, raccordement et suivi de production."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <advantage.icon className="w-10 h-10 text-brand-gray" />
              </div>
              <h3 className="font-bold text-brand-gray mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Nos offres photovoltaïques */}
      <Section
        eyebrow="Nos solutions"
        title="Des solutions adaptées à votre profil"
        className="bg-gray-50"
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                <offer.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <ul className="space-y-2">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Obtenir mon devis solaire
          </Link>
        </div>
      </Section>

      {/* Calculateur d'économies */}
      <Section
        eyebrow="Simulation"
        title="Combien pouvez-vous économiser ?"
        subtitle="Dans le Var, avec un ensoleillement exceptionnel de plus de 2 800 heures par an, le photovoltaïque est particulièrement rentable."
        className="bg-gradient-to-br from-brand-yellow/10 to-brand-blue/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-brand-gray mb-6 text-center">Exemple pour une maison de 100m² dans le Var</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brand-blue mb-4">Installation 6 kWc</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Production annuelle</span>
                    <strong>8 400 kWh</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Autoconsommation (60%)</span>
                    <strong>5 040 kWh</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Revente surplus (40%)</span>
                    <strong>3 360 kWh</strong>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span>Économies annuelles</span>
                    <strong className="text-brand-blue text-xl">1 250€</strong>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-blue mb-4">Rentabilité</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Coût installation</span>
                    <strong>10 500€</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Prime autoconsommation</span>
                    <strong className="text-green-600">-1 500€</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Coût net</span>
                    <strong>9 000€</strong>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span>Retour sur investissement</span>
                    <strong className="text-brand-yellow text-xl">7-8 ans</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-brand-blue/5 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                <strong>Durée de vie des panneaux :</strong> 25-30 ans avec garantie de production
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ADELEC83, installateur solaire local */}
      <Section
        eyebrow="Votre installateur local"
        title="ADELEC83, installateur solaire local"
        subtitle="Implantés à Solliès-Pont, nous réalisons chaque année plusieurs dizaines d'installations solaires dans le Var et les départements voisins. Nos équipes maîtrisent toutes les étapes : étude technique, pose, raccordement, entretien et déclaration Enedis."
      >
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Sun className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Certification RGE QualiPV</h3>
            <p className="text-gray-600 mb-6">
              Notre certification RGE QualiPV vous garantit une installation conforme aux normes et vous permet de bénéficier des aides de l'État et des primes à l'autoconsommation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-yellow">20+</div>
                <div className="text-sm text-gray-600">ans d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-yellow">100+</div>
                <div className="text-sm text-gray-600">installations/an</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-yellow">25 ans</div>
                <div className="text-sm text-gray-600">garantie panneaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-yellow">100%</div>
                <div className="text-sm text-gray-600">satisfaits</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="tel:0494912753"
              className="inline-flex items-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez nos experts photovoltaïques : 04 94 91 27 53
            </a>
          </div>
        </div>
      </Section>

      {/* Nos réalisations solaires */}
      <Section
        eyebrow="Nos réalisations"
        title="Nos installations photovoltaïques dans le Var"
        className="bg-gray-50"
      >
        {realisations && realisations.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {realisationsExamples.map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-brand-yellow mb-2">{example.power}</div>
                <h3 className="text-xl font-bold text-brand-gray mb-2">{example.location}</h3>
                <p className="text-gray-600 mb-3">{example.type}</p>
                <div className="pt-3 border-t">
                  <span className="text-sm text-gray-500">Économies annuelles</span>
                  <div className="text-2xl font-bold text-brand-blue">{example.savings}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link
            href="/realisations"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Voir toutes nos réalisations solaires
          </Link>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        eyebrow="Prêt à passer au solaire ?"
        title="Demandez votre étude gratuite"
        subtitle="Nos experts photovoltaïques analysent votre toiture, votre consommation et vous proposent la solution la plus rentable pour votre projet."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors text-center"
          >
            Demander une étude gratuite
          </Link>
          <a
            href="tel:0494912753"
            className="inline-flex items-center justify-center bg-white text-brand-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            04 94 91 27 53
          </a>
        </div>
      </Section>
    </>
  );
}
