import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { Zap, Wrench, Clock, Shield, Phone, CheckCircle2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dépannage et réparation électrique dans le Var – ADELEC83',
  description: 'ADELEC83 intervient rapidement pour tout dépannage et réparation électrique dans le Var : coupure, court-circuit, tableau, prise, mise en sécurité.',
  keywords: ['dépannage électrique Var', 'électricien urgence Toulon', 'réparation électrique Hyères', 'panne électricité', 'électricien 24h'],
};

export default function DepannagePage() {
  const interventions = [
    {
      icon: Zap,
      title: 'Coupures et courts-circuits',
      description: 'Diagnostic et réparation rapide de vos pannes électriques'
    },
    {
      icon: Wrench,
      title: 'Prises et éclairages défectueux',
      description: 'Remplacement et réparation de prises, interrupteurs et luminaires'
    },
    {
      icon: AlertTriangle,
      title: 'Dysfonctionnement de tableau',
      description: 'Réparation et mise aux normes de votre tableau électrique'
    },
    {
      icon: Shield,
      title: 'Surchauffe ou odeur de brûlé',
      description: 'Intervention d\'urgence pour sécuriser votre installation'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Diagnostic rapide',
      description: 'Par téléphone ou sur place pour identifier la panne'
    },
    {
      number: '2',
      title: 'Intervention rapide',
      description: 'Dans la journée selon la gravité de la situation'
    },
    {
      number: '3',
      title: 'Réparation immédiate',
      description: 'Ou remplacement du matériel défectueux'
    },
    {
      number: '4',
      title: 'Contrôle de sécurité',
      description: 'Vérification complète de votre installation électrique'
    }
  ];

  const brands = ['Schneider Electric', 'Hager', 'Legrand'];

  const zones = [
    'Toulon',
    'Hyères',
    'Solliès-Pont',
    'Brignoles',
    'Saint-Maximin',
    'Draguignan',
    'La Garde',
    'La Crau',
    'Carqueiranne'
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Dépannage et réparation électrique dans le Var"
        subtitle="Panne, court-circuit, tableau en défaut ? ADELEC83 intervient rapidement pour tout dépannage électrique dans le Var, pour particuliers et professionnels."
        image="/images/hero-depannage.jpg"
        cta={{
          text: 'Appeler un électricien dès maintenant',
          href: 'tel:0494912753',
        }}
        secondaryCta={{
          text: 'Faire une demande d\'intervention',
          href: '/contact',
        }}
      />

      {/* Nos interventions rapides */}
      <Section
        eyebrow="Nos interventions"
        title="Nous intervenons sous 24 h pour tous vos dépannages électriques"
        subtitle="Une coupure, un disjoncteur qui saute ou une prise qui chauffe ? Nos techniciens qualifiés se déplacent rapidement dans tout le Var pour diagnostiquer et réparer la panne. ADELEC83 vous garantit sécurité, transparence et efficacité à chaque intervention."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {interventions.map((intervention, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <intervention.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-brand-gray mb-2">{intervention.title}</h3>
              <p className="text-sm text-gray-600">{intervention.description}</p>
            </div>
          ))}
        </div>

        {/* Urgence */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-red-900 mb-2">Urgence électrique ?</h3>
          <p className="text-red-800 mb-4">
            En cas de danger immédiat (odeur de brûlé, étincelles, fumée), coupez le disjoncteur général et appelez-nous immédiatement.
          </p>
          <a
            href="tel:0494912753"
            className="inline-flex items-center bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Appeler maintenant : 04 94 91 27 53
          </a>
        </div>
      </Section>

      {/* Déroulement d'un dépannage */}
      <Section
        eyebrow="Notre méthode"
        title="Un service réactif et transparent"
        subtitle="Nous travaillons avec du matériel professionnel de marques reconnues (Schneider, Hager, Legrand) et garantissons toutes nos interventions."
        className="bg-gray-50"
      >
        <div className="relative mt-12">
          {/* Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-blue/20 -translate-y-1/2" />
          
          <div className="grid gap-8 md:grid-cols-4 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-gray shadow-lg relative z-10">
                  {step.number}
                </div>
                <h3 className="font-bold text-brand-gray mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marques */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-brand-gray mb-6">Matériel professionnel</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                <span className="text-brand-blue font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Demander un dépannage
          </Link>
        </div>
      </Section>

      {/* Zone d'intervention */}
      <Section
        eyebrow="Nos interventions"
        title="Des électriciens disponibles dans tout le Var"
        subtitle="Nos équipes interviennent sur tout le département 83. Pour les urgences, nous priorisons les dépannages dans un rayon de 30 km autour de Solliès-Pont."
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Clock className="w-16 h-16 text-brand-blue mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-brand-gray mb-6 text-center">Zones d'intervention</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {zones.map((zone, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow mr-2 flex-shrink-0" />
                  {zone}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Et toutes les communes du Var (83)
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="tel:0494912753"
              className="inline-flex items-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contacter notre équipe de dépannage : 04 94 91 27 53
            </a>
          </div>
        </div>
      </Section>

      {/* Conseils prévention */}
      <Section
        eyebrow="Prévention"
        title="Évitez les pannes avec un entretien régulier"
        subtitle="Un contrôle annuel de votre tableau électrique et de vos équipements peut éviter la majorité des incidents. ADELEC83 propose des contrats de maintenance pour particuliers, copropriétés et professionnels."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Contrôle annuel</h3>
            <p className="text-gray-600 mb-4">
              Vérification complète de votre installation électrique et de votre tableau.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Test des disjoncteurs
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Vérification des connexions
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Mesure de la terre
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Mise en conformité</h3>
            <p className="text-gray-600 mb-4">
              Mise aux normes NFC 15-100 de votre installation électrique.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Diagnostic complet
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Travaux de mise en sécurité
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Attestation Consuel
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Contrat de maintenance</h3>
            <p className="text-gray-600 mb-4">
              Forfait annuel avec interventions prioritaires et tarifs préférentiels.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                2 visites/an incluses
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                Dépannage prioritaire
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                -20% sur les pièces
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Souscrire à un contrat de maintenance
          </Link>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        eyebrow="Besoin d'un électricien ?"
        title="Intervention rapide dans tout le Var"
        subtitle="Nos électriciens qualifiés interviennent rapidement pour diagnostiquer et réparer votre panne électrique en toute sécurité."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="tel:0494912753"
            className="inline-flex items-center justify-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Appeler : 04 94 91 27 53
          </a>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
          >
            Demander une intervention
          </Link>
        </div>
        <p className="text-center text-white mt-6 text-sm">
          Intervention sous 24h • Devis gratuit • Garantie sur les réparations
        </p>
      </Section>
    </>
  );
}
