import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { FAQ } from '@/components/faq';
import { supabase } from '@/lib/supabase';
import { Wind, Thermometer, Droplets, Volume2, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Climatisation Réversible dans le Var - ADELEC83',
  description: 'Installation et entretien de climatisation réversible Daikin, Mitsubishi, Atlantic dans le Var. Devis gratuit, entreprise RGE.',
};

export default async function ClimatisationPage() {
  const { data: pageData } = (await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'climatisation')
    .single()) as any;

  const brands = [
    { name: 'Daikin', description: 'Leader mondial de la climatisation' },
    { name: 'Mitsubishi Electric', description: 'Technologie japonaise de pointe' },
    { name: 'Atlantic', description: 'Marque française de référence' },
    { name: 'Toshiba', description: 'Innovation et fiabilité' },
    { name: 'Panasonic', description: 'Performance et silence' },
    { name: 'Hitachi', description: 'Qualité professionnelle' },
  ];

  const benefits = [
    {
      icon: Thermometer,
      title: 'Confort été comme hiver',
      description: 'Climatisation en été, chauffage économique en hiver avec la pompe à chaleur réversible',
    },
    {
      icon: Wind,
      title: 'Air purifié et sain',
      description: 'Filtres haute performance pour un air débarrassé des allergènes et polluants',
    },
    {
      icon: Volume2,
      title: 'Ultra silencieux',
      description: 'Technologies dernière génération pour un confort acoustique optimal',
    },
    {
      icon: Droplets,
      title: 'Déshumidification',
      description: 'Régulation automatique de l\'humidité pour un air plus sain',
    },
  ];

  const services = [
    {
      title: 'Installation',
      items: [
        'Étude thermique gratuite',
        'Choix du matériel adapté',
        'Installation soignée et rapide',
        'Mise en service et réglages',
        'Formation à l\'utilisation',
      ],
    },
    {
      title: 'Entretien',
      items: [
        'Contrat de maintenance annuel',
        'Nettoyage des filtres',
        'Vérification du fluide frigorigène',
        'Contrôle des performances',
        'Intervention rapide en cas de panne',
      ],
    },
    {
      title: 'Dépannage',
      items: [
        'Diagnostic précis',
        'Réparation toutes marques',
        'Pièces détachées d\'origine',
        'Intervention sous 48h',
        'Devis gratuit',
      ],
    },
  ];

  const faqItems = [
    {
      question: "Quelle puissance de climatisation pour mon logement ?",
      answer: "La puissance nécessaire dépend de plusieurs facteurs : surface, isolation, exposition, hauteur sous plafond. En moyenne, comptez 100W/m² pour une pièce bien isolée. Nous réalisons une étude thermique gratuite pour déterminer la puissance optimale."
    },
    {
      question: "Quelle est la différence entre climatisation et pompe à chaleur ?",
      answer: "Une climatisation réversible EST une pompe à chaleur air/air. Elle peut rafraîchir en été et chauffer en hiver avec un excellent rendement (COP de 3 à 5). C'est la solution 2-en-1 idéale dans le Var."
    },
    {
      question: "Combien coûte l'installation d'une climatisation ?",
      answer: "Pour un split de 2,5 kW, comptez entre 1500€ et 2500€ pose comprise. Pour un multi-split 3 pièces, entre 4000€ et 6000€. Le prix varie selon la marque, la puissance et la complexité de l'installation."
    },
    {
      question: "L'entretien est-il obligatoire ?",
      answer: "Pour les climatisations contenant plus de 2kg de fluide frigorigène (>7kW environ), un contrôle annuel est obligatoire. Pour les autres, c'est fortement recommandé pour maintenir les performances et prolonger la durée de vie."
    },
    {
      question: "Quelles sont les aides pour une pompe à chaleur ?",
      answer: "Les PAC air/air ne sont pas éligibles à MaPrimeRénov' mais peuvent bénéficier des CEE (Certificats d'Économies d'Énergie) et de la TVA à 10% en rénovation. Nous vous accompagnons dans vos démarches."
    },
    {
      question: "Quelle est la durée de vie d'une climatisation ?",
      answer: "Avec un entretien régulier, une climatisation de qualité dure 15 à 20 ans. Les compresseurs inverter modernes sont particulièrement fiables et économiques."
    },
  ];

  return (
    <>
      <Hero
        title={pageData?.hero_title || "Climatisation Réversible"}
        subtitle={pageData?.hero_subtitle || "Confort optimal été comme hiver dans le Var"}
        image="/images/hero-clim.jpg"
        cta={{
          text: 'Devis gratuit',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Avec des étés de plus en plus chauds dans le Var, la climatisation est devenue indispensable.
            ADELEC83 installe et entretient vos systèmes de climatisation réversible depuis plus de 20 ans.
            Nous travaillons avec les meilleures marques pour vous garantir confort, économies et fiabilité.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Les avantages"
        title="Pourquoi choisir la climatisation réversible ?"
        subtitle="Une solution complète pour votre confort thermique"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nos marques partenaires</h2>
          <p className="text-gray-600">Nous travaillons avec les leaders du marché</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#0047AB]">{brand.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{brand.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center mb-8">Nos prestations complètes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#0047AB] text-white">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Économisez avec la climatisation réversible</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF8C42] mr-3 text-xl">✓</span>
                <div>
                  <strong>COP de 3 à 5</strong>
                  <p className="text-white/90 text-sm">Pour 1 kWh consommé, 3 à 5 kWh de chaleur produits</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C42] mr-3 text-xl">✓</span>
                <div>
                  <strong>-50% vs chauffage électrique</strong>
                  <p className="text-white/90 text-sm">Division par deux de votre facture de chauffage</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C42] mr-3 text-xl">✓</span>
                <div>
                  <strong>Technologie Inverter</strong>
                  <p className="text-white/90 text-sm">Adaptation automatique pour minimiser la consommation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF8C42] mr-3 text-xl">✓</span>
                <div>
                  <strong>Pilotage intelligent</strong>
                  <p className="text-white/90 text-sm">Programmation et contrôle à distance via smartphone</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Exemple d'économies</h3>
            <p className="text-white/90 mb-4">Pour une maison de 100m² dans le Var :</p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Chauffage électrique classique</span>
                <strong>2 400€/an</strong>
              </div>
              <div className="flex justify-between">
                <span>Climatisation réversible</span>
                <strong>1 200€/an</strong>
              </div>
              <div className="border-t border-white/20 pt-3 flex justify-between">
                <span>Économies annuelles</span>
                <strong className="text-[#FF8C42] text-xl">1 200€</strong>
              </div>
              <div className="text-center pt-2">
                <p className="text-sm text-white/90">Amortissement en 3-4 ans</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Questions fréquentes"
        title="Tout savoir sur la climatisation"
      >
        <FAQ items={faqItems} />
      </Section>

      <CTASection
        title="Installez votre climatisation avec ADELEC83"
        subtitle="Étude gratuite et devis personnalisé sous 48h"
      />
    </>
  );
}
