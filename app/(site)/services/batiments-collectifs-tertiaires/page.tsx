import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { RealisationCard } from '@/components/realisation-card';
import { CTASection } from '@/components/cta-section';
import { supabase } from '@/lib/supabase';
import { Building2, FileCheck, Wrench, Users, CheckCircle2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADELEC83 – Électricité et climatisation pour bâtiments collectifs et tertiaires dans le Var',
  description: 'ADELEC83, expert en installations électriques, climatisation et photovoltaïque pour bâtiments collectifs et tertiaires dans le Var. Partenaire de Daprom, Unity, Marignan et plus.',
  keywords: ['bâtiment collectif Var', 'électricité tertiaire Var', 'installation électrique immeuble', 'climatisation immeuble Var', 'promoteur immobilier électricien', 'ADELEC83'],
};

export default async function BatimentsCollectifsPage() {
  // Récupération des réalisations B2B
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'batiments-collectifs')
    .order('order_index', { ascending: true })
    .limit(6) as any;

  const expertises = [
    {
      icon: FileCheck,
      title: 'Études & plans d\'exécution',
      description: 'Dossiers complets validés par les maîtres d\'œuvre'
    },
    {
      icon: Wrench,
      title: 'Rigueur de pose',
      description: 'Respect des normes NFC 15-100 et RT2012/RE2020'
    },
    {
      icon: Users,
      title: 'Suivi de chantier',
      description: 'Communication directe avec conducteur de travaux'
    },
    {
      icon: CheckCircle2,
      title: 'Maintenance & SAV',
      description: 'Accompagnement après livraison'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Étude & chiffrage précis',
      description: 'Analyse du CCTP et visite de site'
    },
    {
      number: '2',
      title: 'Validation technique',
      description: 'Plans, dimensionnement, choix matériel'
    },
    {
      number: '3',
      title: 'Installation',
      description: 'Réalisation par nos équipes qualifiées'
    },
    {
      number: '4',
      title: 'Contrôle & essais',
      description: 'Vérification de conformité et mesure de performance'
    },
    {
      number: '5',
      title: 'Livraison & suivi',
      description: 'Dossier DOE + service après-travaux'
    }
  ];

  const partners = ['URBAT', 'DAPROM', 'Marignan', 'JDS Construction', '1001 Vies Habitat', 'Erilia'];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Travaux d'électricité et climatisation pour bâtiments collectifs et tertiaires dans le Var"
        subtitle="Depuis plus de 20 ans, ADELEC83 accompagne les promoteurs, bailleurs et gestionnaires de bâtiments dans la conception, l'installation et la maintenance de leurs équipements électriques et climatiques."
        image="/images/hero-batiments-collectifs.jpg"
        cta={{
          text: 'Demandez une étude technique personnalisée',
          href: '/contact',
        }}
        badges={[
          '✅ Entreprise RGE et Qualifelec',
          '✅ Plus de 500 logements équipés chaque année',
          '✅ Interventions dans le Var, les Bouches-du-Rhône et les Alpes-Maritimes'
        ]}
      />

      {/* Notre expertise B2B */}
      <Section
        eyebrow="Notre savoir-faire"
        title="Notre expertise au service des professionnels du bâtiment"
        subtitle="ADELEC83 met à disposition des professionnels son expertise dans la conception, l'installation et la maintenance des réseaux électriques, de climatisation et de production d'énergie. Nous travaillons en étroite collaboration avec les promoteurs immobiliers, les architectes, les maîtres d'œuvre et les collectivités locales pour garantir des installations performantes, conformes aux normes et livrées dans les délais."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mt-12">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-brand-gray mb-2">Études techniques</h3>
            <p className="text-sm text-gray-600">et plans d'exécution</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-brand-gray mb-2">Installations électriques</h3>
            <p className="text-sm text-gray-600">courants forts et faibles</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌬️</span>
            </div>
            <h3 className="font-bold text-brand-gray mb-2">Climatisation & VMC</h3>
            <p className="text-sm text-gray-600">pose et mise en service</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">☀️</span>
            </div>
            <h3 className="font-bold text-brand-gray mb-2">Photovoltaïque</h3>
            <p className="text-sm text-gray-600">solutions collectives</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🧱</span>
            </div>
            <h3 className="font-bold text-brand-gray mb-2">Maintenance</h3>
            <p className="text-sm text-gray-600">et suivi post-chantier</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
            Télécharger notre plaquette B2B
          </a>
        </div>
      </Section>

      {/* Nos partenaires */}
      <Section
        eyebrow="Nos partenaires"
        title="Ils nous font confiance"
        subtitle="ADELEC83 collabore avec les principaux acteurs de la promotion et de la construction dans le sud-est de la France. Notre fiabilité, notre réactivité et la qualité de nos livrables nous ont permis de bâtir des partenariats solides et durables."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-brand-blue">{partner}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/realisations" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
            Voir nos références complètes
          </a>
        </div>
      </Section>

      {/* Nos réalisations */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos chantiers"
          title="Nos réalisations dans le Var et les Bouches-du-Rhône"
          subtitle="Découvrez quelques exemples d'opérations réalisées par notre équipe sur des bâtiments collectifs et tertiaires. Du logement social aux bureaux, ADELEC83 garantit des installations pérennes, conformes et esthétiques."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/realisations" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
              Voir plus de réalisations
            </a>
          </div>
        </Section>
      )}

      {/* Nos engagements qualité */}
      <Section
        eyebrow="Qualité & sécurité"
        title="Des chantiers maîtrisés du plan à la livraison"
        subtitle="ADELEC83 s'engage sur la qualité, la sécurité et la performance énergétique de chaque chantier. Notre expérience nous permet de répondre aux exigences des marchés publics et privés, avec une traçabilité complète de toutes les étapes du projet."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {expertises.map((expertise, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <expertise.icon className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-gray mb-2">{expertise.title}</h3>
              <p className="text-sm text-gray-600">{expertise.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
            Nous contacter pour une consultation technique
          </a>
        </div>
      </Section>

      {/* Processus de collaboration */}
      <Section
        eyebrow="Notre méthode"
        title="Un accompagnement sur mesure pour chaque projet"
        subtitle="De la conception initiale à la livraison, ADELEC83 accompagne ses partenaires à chaque étape du chantier."
      >
        <div className="relative mt-12">
          {/* Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-blue/20 -translate-y-1/2" />
          
          <div className="grid gap-8 md:grid-cols-5 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg relative z-10">
                  {step.number}
                </div>
                <h3 className="font-bold text-brand-gray mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
            Demander un devis pour votre programme immobilier
          </a>
        </div>
      </Section>

      {/* Zone d'intervention */}
      <Section
        eyebrow="Nos interventions"
        title="Présents sur tout le Var et la région Sud"
        subtitle="Basés à Solliès-Pont, nous intervenons sur l'ensemble du Var (83) et les départements voisins : Bouches-du-Rhône (13) et Alpes-Maritimes (06). Nos équipes interviennent régulièrement à Toulon, Hyères, Brignoles, La Garde, Marseille, Aix-en-Provence et Nice."
        className="bg-gray-50"
      >
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Building2 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Zones d'intervention</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-bold text-brand-blue mb-2">Var (83)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Toulon</li>
                  <li>• Hyères</li>
                  <li>• La Garde</li>
                  <li>• Solliès-Pont</li>
                  <li>• Brignoles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-blue mb-2">Bouches-du-Rhône (13)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Marseille</li>
                  <li>• Aix-en-Provence</li>
                  <li>• Aubagne</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-blue mb-2">Alpes-Maritimes (06)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Nice</li>
                  <li>• Cannes</li>
                  <li>• Antibes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
              Prendre contact avec un chargé d'affaires
            </a>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        eyebrow="Contactez-nous"
        title="Vous avez un projet de construction ou de rénovation ?"
        subtitle="Contactez ADELEC83 dès aujourd'hui pour bénéficier d'un accompagnement complet et d'une installation réalisée dans les règles de l'art. Nos équipes techniques sont à votre disposition pour étudier votre dossier et vous remettre un devis détaillé sous 72 h."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors text-center">
            Demander un devis B2B
          </a>
          <a href="/contact" className="inline-block bg-white text-brand-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center">
            Télécharger notre brochure professionnelle
          </a>
        </div>
        <div className="text-center mt-8">
          <a href="tel:0494912753" className="inline-flex items-center text-white hover:text-brand-yellow transition-colors text-lg font-semibold">
            <Phone className="w-6 h-6 mr-2" />
            04 94 91 27 53
          </a>
        </div>
      </Section>
    </>
  );
}
