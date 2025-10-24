import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { RealisationCard } from '@/components/realisation-card';
import { supabase } from '@/lib/supabase';
import { Smartphone, Euro, Shield, Thermometer, Home, Building2, Camera, Phone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Installation de systèmes domotiques et maison connectée dans le Var – ADELEC83',
  description: 'ADELEC83 installe vos solutions de domotique et maison connectée dans tout le Var : confort, sécurité et économies d\'énergie.',
  keywords: ['domotique Var', 'maison connectée Toulon', 'installation domotique Hyères', 'habitat intelligent', 'Somfy Var'],
};

export default async function DomotiquePage() {
  // Récupération des réalisations domotique
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'domotique')
    .order('order_index', { ascending: true })
    .limit(6) as any;

  const advantages = [
    {
      icon: Smartphone,
      title: 'Contrôle à distance',
      description: 'Pilotez votre maison depuis votre smartphone avec scénarios automatiques'
    },
    {
      icon: Euro,
      title: 'Réduction de consommation',
      description: 'Jusqu\'à 25% d\'économies d\'énergie grâce à la gestion intelligente'
    },
    {
      icon: Shield,
      title: 'Sécurité renforcée',
      description: 'Caméras, alarmes, capteurs et notifications en temps réel'
    },
    {
      icon: Thermometer,
      title: 'Confort optimisé',
      description: 'Température, éclairage et volets adaptés à vos habitudes'
    }
  ];

  const solutions = [
    {
      icon: Home,
      title: 'Habitat neuf',
      description: 'Conception complète du réseau domotique dès la construction.',
      features: [
        'Câblage structuré',
        'Intégration native',
        'Évolutivité maximale',
        'Design épuré'
      ]
    },
    {
      icon: Building2,
      title: 'Rénovation',
      description: 'Ajout de modules connectés sans gros travaux.',
      features: [
        'Installation sans câblage',
        'Modules sans fil',
        'Compatible existant',
        'Mise en service rapide'
      ]
    },
    {
      icon: Camera,
      title: 'Sécurité connectée',
      description: 'Alarmes, caméras, capteurs et contrôle d\'accès.',
      features: [
        'Vidéosurveillance HD',
        'Détection de mouvement',
        'Alertes smartphone',
        'Enregistrement cloud'
      ]
    }
  ];

  const compatibilities = [
    'Alexa (Amazon)',
    'Google Home',
    'Somfy TaHoma',
    'Delta Dore',
    'Legrand Céliane',
    'Schneider Wiser'
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Installation de systèmes domotiques dans le Var"
        subtitle="ADELEC83 vous aide à transformer votre maison en habitat connecté : confort, sécurité et économies d'énergie au bout des doigts."
        image="/images/hero-domotique.jpg"
        cta={{
          text: 'Demander un devis domotique personnalisé',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Découvrir les solutions connectées',
          href: '#solutions',
        }}
      />

      {/* Pourquoi opter pour la domotique */}
      <Section
        eyebrow="Les avantages"
        title="Simplifiez votre quotidien avec un habitat intelligent"
        subtitle="La domotique permet de piloter tous vos équipements depuis votre smartphone, votre tablette ou une commande murale : volets, lumières, climatisation, portail, alarme, caméra, borne de recharge… ADELEC83 conçoit des installations fiables, sécurisées et faciles à utiliser, pour améliorer votre confort et réduire vos consommations."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <advantage.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-brand-gray mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Compatibilités */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-brand-gray mb-6">Compatible avec vos équipements préférés</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {compatibilities.map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-brand-blue font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Nos prestations domotiques */}
      <Section
        id="solutions"
        eyebrow="Nos solutions"
        title="Une solution personnalisée pour chaque type d'habitat"
        className="bg-gray-50"
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                <solution.icon className="w-8 h-8 text-brand-gray" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0" />
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
            Faire une étude gratuite de mon projet domotique
          </Link>
        </div>
      </Section>

      {/* Équipements pilotables */}
      <Section
        eyebrow="Équipements"
        title="Tout ce que vous pouvez piloter avec la domotique"
        subtitle="Centralisez le contrôle de tous vos équipements sur une seule application"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-bold text-brand-gray mb-2">Éclairage</h3>
            <p className="text-sm text-gray-600">Variation d'intensité, scénarios, détection de présence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🪟</div>
            <h3 className="font-bold text-brand-gray mb-2">Volets & stores</h3>
            <p className="text-sm text-gray-600">Ouverture/fermeture automatique selon l'heure et la météo</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🌡️</div>
            <h3 className="font-bold text-brand-gray mb-2">Chauffage & climatisation</h3>
            <p className="text-sm text-gray-600">Régulation pièce par pièce, programmation horaire</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🚪</div>
            <h3 className="font-bold text-brand-gray mb-2">Portail & garage</h3>
            <p className="text-sm text-gray-600">Ouverture à distance, contrôle d'accès</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">📹</div>
            <h3 className="font-bold text-brand-gray mb-2">Caméras & alarme</h3>
            <p className="text-sm text-gray-600">Surveillance en direct, notifications d'intrusion</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-brand-gray mb-2">Borne de recharge</h3>
            <p className="text-sm text-gray-600">Programmation heures creuses, suivi de consommation</p>
          </div>
        </div>
      </Section>

      {/* ADELEC83, expert domotique */}
      <Section
        eyebrow="Votre installateur local"
        title="ADELEC83, expert domotique dans le Var"
        subtitle="Basée à Solliès-Pont, notre équipe intervient dans tout le Var (83) pour l'installation de systèmes domotiques sur mesure. Nos techniciens intègrent vos équipements selon vos besoins et assurent leur mise en service complète."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Smartphone className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Installation professionnelle</h3>
            <p className="text-gray-600 mb-6">
              Nos techniciens certifiés maîtrisent toutes les technologies domotiques du marché et vous accompagnent de A à Z dans votre projet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-blue">20+</div>
                <div className="text-sm text-gray-600">ans d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">100+</div>
                <div className="text-sm text-gray-600">maisons connectées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">25%</div>
                <div className="text-sm text-gray-600">d'économies moyennes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">100%</div>
                <div className="text-sm text-gray-600">satisfaits</div>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-brand-gray mb-3">Zone d'intervention</h4>
            <p className="text-gray-600 mb-2">
              Toulon • Hyères • Brignoles • La Crau • Carqueiranne • Saint-Tropez • Solliès-Pont
            </p>
            <p className="text-sm text-gray-500">Et tout le département du Var (83)</p>
          </div>

          <div className="mt-8">
            <a
              href="tel:0494912753"
              className="inline-flex items-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez nos experts domotiques : 04 94 91 27 53
            </a>
          </div>
        </div>
      </Section>

      {/* Exemple de réalisation */}
      {realisations && realisations.length > 0 ? (
        <Section
          eyebrow="Nos réalisations"
          title="Maisons connectées installées dans le Var"
          subtitle="Découvrez quelques exemples de nos installations domotiques chez nos clients."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        </Section>
      ) : (
        <Section
          eyebrow="Exemple de réalisation"
          title="Maison connectée installée à La Crau"
          subtitle="ADELEC83 a équipé cette villa d'un système complet de gestion à distance : climatisation, volets roulants, éclairage et portail motorisé. Le propriétaire pilote tout depuis son smartphone, avec un gain énergétique de 25 % sur sa facture annuelle."
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brand-gray mb-6">Équipements installés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-blue mb-3">Confort</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Climatisation multi-split pilotable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      8 volets roulants automatisés
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Éclairage intelligent (15 points)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Portail motorisé connecté
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-3">Sécurité</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      4 caméras IP extérieures
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Alarme avec détecteurs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Simulation de présence
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow mr-2" />
                      Notifications temps réel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-brand-yellow/10 rounded-lg text-center">
                <p className="text-brand-gray font-semibold">
                  Économies réalisées : <span className="text-2xl text-brand-blue">25%</span> sur la facture annuelle
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/realisations"
              className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              Découvrir nos réalisations connectées
            </Link>
          </div>
        </Section>
      )}

      {/* CTA Final */}
      <Section
        eyebrow="Prêt à connecter votre maison ?"
        title="Demandez votre étude domotique gratuite"
        subtitle="Nos experts analysent vos besoins et vous proposent une solution sur mesure adaptée à votre budget et à votre habitat."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors text-center"
          >
            Demander un devis domotique
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
