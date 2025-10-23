import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { FAQ } from '@/components/faq';
import { Stats } from '@/components/stats';
import { supabase } from '@/lib/supabase';
import { Sun, Battery, TrendingUp, Leaf, Euro, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Photovoltaïques - ADELEC83',
  description: 'Installation de panneaux photovoltaïques dans le Var. Autoconsommation, revente totale, batterie virtuelle. Entreprise RGE QualiPV.',
};

export default async function PhotovoltaiquePage() {
  const pageData = await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'photovoltaique')
    .single();

  const stats = [
    { value: 1400, suffix: ' kWh/kWc', label: 'Production annuelle dans le Var' },
    { value: 70, suffix: '%', label: 'D\'économies possibles' },
    { value: 25, suffix: ' ans', label: 'Garantie production' },
    { value: 8, suffix: ' ans', label: 'Retour sur investissement' },
  ];

  const solutions = [
    {
      title: 'Autoconsommation avec vente du surplus',
      description: 'Consommez votre production et vendez le surplus à EDF OA',
      benefits: ['Prime à l\'autoconsommation jusqu\'à 430€/kWc', 'Rachat garanti 13c€/kWh pendant 20 ans', 'Économies immédiates sur votre facture'],
      icon: Sun,
    },
    {
      title: 'Revente totale',
      description: 'Vendez l\'intégralité de votre production à EDF',
      benefits: ['Tarif garanti pendant 20 ans', 'Revenus réguliers', 'Idéal pour les grandes toitures'],
      icon: Euro,
    },
    {
      title: 'Batterie virtuelle MySmartBattery',
      description: 'Stockez virtuellement votre surplus sur le réseau',
      benefits: ['Récupération gratuite de votre surplus', 'Pas de limite de stockage', 'Sans batterie physique coûteuse'],
      icon: Battery,
    },
  ];

  const process = [
    { title: 'Étude personnalisée', description: 'Analyse de votre consommation et dimensionnement optimal' },
    { title: 'Démarches administratives', description: 'Nous gérons toutes les autorisations et demandes' },
    { title: 'Installation', description: 'Pose par nos techniciens certifiés en 1-2 jours' },
    { title: 'Raccordement', description: 'Mise en service avec Enedis sous 2-3 mois' },
    { title: 'Suivi de production', description: 'Application mobile pour suivre vos économies' },
  ];

  const faqItems = [
    {
      question: "Quelle est la production solaire dans le Var ?",
      answer: "Le Var bénéficie d'un ensoleillement exceptionnel avec environ 2800 heures de soleil par an. La production moyenne est de 1400 kWh par kWc installé, soit l'une des meilleures de France."
    },
    {
      question: "Quelles sont les aides pour l'installation de panneaux solaires ?",
      answer: "Vous pouvez bénéficier de la prime à l'autoconsommation (jusqu'à 430€/kWc pour une installation de 3 kWc), de la TVA à 10%, et du rachat garanti par EDF OA pendant 20 ans."
    },
    {
      question: "Comment fonctionne la batterie virtuelle MySmartBattery ?",
      answer: "MySmartBattery stocke virtuellement votre surplus de production sur le réseau. Vous le récupérez gratuitement quand vous en avez besoin, sans limite de temps ni perte d'énergie."
    },
    {
      question: "Quelle est la durée de vie des panneaux ?",
      answer: "Les panneaux solaires ont une durée de vie de 25 à 30 ans minimum, avec une garantie de production à 80% après 25 ans. Les onduleurs sont garantis 10 ans minimum."
    },
    {
      question: "Faut-il nettoyer les panneaux solaires ?",
      answer: "Dans le Var, la pluie suffit généralement à nettoyer les panneaux. Un nettoyage annuel peut être bénéfique en cas de salissures importantes (pollution, poussière, fientes)."
    },
    {
      question: "Mon toit est-il adapté au photovoltaïque ?",
      answer: "L'idéal est une orientation sud avec une pente de 30°, mais les orientations est/ouest fonctionnent aussi très bien. Nous réalisons une étude gratuite pour évaluer le potentiel de votre toiture."
    },
  ];

  return (
    <>
      <Hero
        title={pageData.data?.hero_title || "Panneaux Photovoltaïques"}
        subtitle={pageData.data?.hero_subtitle || "Produisez votre propre électricité solaire dans le Var"}
        image="/images/hero-solar.jpg"
        cta={{
          text: 'Simulation gratuite',
          href: '/contact',
        }}
      />

      {/* Stats Section */}
      <Stats stats={stats} />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Avec plus de 2800 heures d'ensoleillement par an, le Var est le territoire idéal pour l'énergie solaire.
            ADELEC83, certifié RGE QualiPV, vous accompagne de A à Z dans votre projet photovoltaïque : 
            étude personnalisée, démarches administratives, installation et suivi de production.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Nos solutions"
        title="Choisissez la formule adaptée à vos besoins"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FF8C42] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1e1e1e]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-[#0047AB] mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
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
                  <div className="w-8 h-8 bg-[#0047AB] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Exemple de rentabilité</h3>
            <p className="text-gray-600 mb-4">Pour une installation de 6 kWc à Toulon :</p>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Production annuelle</span>
                <strong>8 400 kWh</strong>
              </li>
              <li className="flex justify-between">
                <span>Économies annuelles</span>
                <strong>1 500€</strong>
              </li>
              <li className="flex justify-between">
                <span>Prime autoconsommation</span>
                <strong>1 800€</strong>
              </li>
              <li className="flex justify-between">
                <span>Retour sur investissement</span>
                <strong>7-9 ans</strong>
              </li>
              <li className="flex justify-between border-t pt-3">
                <span>Économies sur 25 ans</span>
                <strong className="text-[#0047AB]">37 500€</strong>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nos engagements qualité</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Certification RGE QualiPV</h3>
            <p className="text-gray-600 text-sm">
              Qualification indispensable pour bénéficier des aides de l'État
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Garantie de production</h3>
            <p className="text-gray-600 text-sm">
              Production garantie à 80% minimum après 25 ans
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Impact écologique</h3>
            <p className="text-gray-600 text-sm">
              Réduisez votre empreinte carbone de 2 tonnes de CO2 par an
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Questions fréquentes"
        title="Tout savoir sur le photovoltaïque"
      >
        <FAQ items={faqItems} />
      </Section>

      <CTASection
        title="Prêt à produire votre électricité solaire ?"
        subtitle="Étude gratuite et sans engagement"
      />
    </>
  );
}
