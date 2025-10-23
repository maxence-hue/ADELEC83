import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { FAQ } from '@/components/faq';
import { supabase } from '@/lib/supabase';
import { BatteryCharging, Car, Home, Building2, CheckCircle, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Installation Borne de Recharge IRVE - ADELEC83',
  description: 'Installation de bornes de recharge pour véhicules électriques dans le Var. Certification IRVE, aides Advenir, particuliers et entreprises.',
};

export default async function BornesPage() {
  const { data: pageData } = (await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'bornes')
    .single()) as any;

  const solutions = [
    {
      icon: Home,
      title: 'Particuliers',
      description: 'Installation à domicile',
      features: [
        'Borne 7,4 kW ou 22 kW',
        'Compatible tous véhicules',
        'Pilotage intelligent',
        'Installation en 1 journée',
      ],
    },
    {
      icon: Building2,
      title: 'Copropriétés',
      description: 'Solution collective ou individuelle',
      features: [
        'Droit à la prise',
        'Infrastructure collective',
        'Gestion des accès',
        'Facturation individuelle',
      ],
    },
    {
      icon: Car,
      title: 'Entreprises',
      description: 'Flotte et parkings',
      features: [
        'Bornes multiples',
        'Gestion centralisée',
        'Badge RFID',
        'Supervision à distance',
      ],
    },
  ];

  const process = [
    {
      title: 'Audit électrique',
      description: 'Vérification de votre installation et dimensionnement',
    },
    {
      title: 'Choix de la borne',
      description: 'Sélection du matériel adapté à vos besoins et véhicule',
    },
    {
      title: 'Démarches administratives',
      description: 'Demande d\'aides, autorisation syndic si nécessaire',
    },
    {
      title: 'Installation certifiée',
      description: 'Pose par nos électriciens qualifiés IRVE',
    },
    {
      title: 'Mise en service',
      description: 'Tests, paramétrage et formation à l\'utilisation',
    },
  ];

  const aids = [
    {
      title: 'Crédit d\'impôt',
      amount: '300€',
      description: 'Pour les particuliers',
      conditions: 'Résidence principale',
    },
    {
      title: 'Prime Advenir',
      amount: '50%',
      description: 'Jusqu\'à 960€ en copropriété',
      conditions: 'Solution partagée',
    },
    {
      title: 'TVA réduite',
      amount: '5,5%',
      description: 'Sur l\'installation',
      conditions: 'Logement > 2 ans',
    },
    {
      title: 'Aide entreprise',
      amount: '40%',
      description: 'Programme Advenir',
      conditions: 'Parking ouvert au public',
    },
  ];

  const faqItems = [
    {
      question: "Quelle puissance de borne choisir ?",
      answer: "Pour un usage domestique, une borne de 7,4 kW (32A monophasé) convient parfaitement et permet une recharge complète en une nuit. Une borne de 22 kW (32A triphasé) est plus rapide mais nécessite une installation triphasée."
    },
    {
      question: "Combien coûte l'installation d'une borne ?",
      answer: "Le prix varie de 1200€ à 2500€ pour un particulier (borne + installation), déduction faite des aides. En copropriété, comptez 1500€ à 3000€ selon la complexité."
    },
    {
      question: "Qu'est-ce que la certification IRVE ?",
      answer: "IRVE (Infrastructure de Recharge pour Véhicules Électriques) est une qualification obligatoire pour installer des bornes de plus de 3,7 kW. Elle garantit une installation sécurisée et conforme, et est nécessaire pour bénéficier des aides."
    },
    {
      question: "Comment fonctionne le droit à la prise ?",
      answer: "Tout occupant d'un immeuble peut demander l'installation d'une borne à ses frais sur sa place de parking. Le syndic ne peut refuser sauf motif légitime et sérieux. Nous gérons toute la procédure pour vous."
    },
    {
      question: "Puis-je utiliser ma production solaire ?",
      answer: "Oui ! Nous installons des bornes intelligentes qui peuvent privilégier l'énergie solaire pour recharger votre véhicule, maximisant ainsi votre autoconsommation et vos économies."
    },
    {
      question: "Quelle est la durée de vie d'une borne ?",
      answer: "Une borne de qualité a une durée de vie de 10 à 15 ans minimum. Les bornes que nous installons sont garanties 2 ans pièces et main d'œuvre."
    },
  ];

  return (
    <>
      <Hero
        title={pageData?.hero_title || "Bornes de Recharge IRVE"}
        subtitle={pageData?.hero_subtitle || "Installation professionnelle pour véhicules électriques"}
        image="/images/hero-borne.jpg"
        cta={{
          text: 'Demander un devis',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Avec l'essor de la mobilité électrique, disposer d'une borne de recharge devient indispensable.
            ADELEC83, certifié IRVE, installe vos bornes de recharge dans le Var pour particuliers, 
            copropriétés et entreprises. Nous gérons l'ensemble du projet : audit, aides, installation et maintenance.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Nos solutions"
        title="Une borne adaptée à chaque besoin"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre processus d'installation</h2>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-[#0047AB] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">Pourquoi choisir ADELEC83 ?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BatteryCharging className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block">Certification IRVE</strong>
                    <span className="text-gray-600 text-sm">Qualification obligatoire et gage de qualité</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <BatteryCharging className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block">Gestion complète</strong>
                    <span className="text-gray-600 text-sm">Audit, devis, aides, installation et SAV</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <BatteryCharging className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block">Toutes marques</strong>
                    <span className="text-gray-600 text-sm">Wallbox, Schneider, Legrand, Hager...</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <BatteryCharging className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block">Maintenance</strong>
                    <span className="text-gray-600 text-sm">Contrat d'entretien et dépannage rapide</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Aides financières disponibles</h2>
          <p className="text-gray-600">Réduisez le coût de votre installation</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aids.map((aid, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Euro className="w-8 h-8 text-[#FF8C42] mx-auto mb-3" />
              <h3 className="font-semibold text-lg">{aid.title}</h3>
              <p className="text-3xl font-bold text-[#0047AB] my-2">{aid.amount}</p>
              <p className="text-sm text-gray-600">{aid.description}</p>
              <p className="text-xs text-gray-500 mt-2">{aid.conditions}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-green-50">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rechargez avec votre production solaire</h2>
            <p className="text-gray-700 mb-4">
              Combinez panneaux solaires et borne de recharge pour maximiser vos économies !
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <strong>Recharge gratuite</strong>
                  <p className="text-gray-600 text-sm">Utilisez votre surplus solaire pour charger votre véhicule</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <strong>Pilotage intelligent</strong>
                  <p className="text-gray-600 text-sm">La borne ajuste la puissance selon la production</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <strong>100% écologique</strong>
                  <p className="text-gray-600 text-sm">Mobilité zéro émission avec une énergie verte</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <strong>Rentabilité accrue</strong>
                  <p className="text-gray-600 text-sm">Amortissement plus rapide de vos panneaux solaires</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Exemple de coût de recharge</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Pour 100 km</span>
                <span className="font-semibold">Coût</span>
              </div>
              <div className="flex justify-between">
                <span>Essence</span>
                <strong>12€</strong>
              </div>
              <div className="flex justify-between">
                <span>Électricité réseau</span>
                <strong>3€</strong>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Solaire autoconsommation</span>
                <strong>0€</strong>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-gray-600 text-center">
                  Économisez jusqu'à 2000€/an sur vos déplacements
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Questions fréquentes"
        title="Tout savoir sur les bornes de recharge"
      >
        <FAQ items={faqItems} />
      </Section>

      <CTASection
        title="Passez à la mobilité électrique"
        subtitle="Installation de votre borne de recharge par des professionnels certifiés"
      />
    </>
  );
}
