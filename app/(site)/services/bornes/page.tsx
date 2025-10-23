import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { RealisationCard } from '@/components/realisation-card';
import { supabase } from '@/lib/supabase';
import { Zap, Home, Building2, Users, Shield, Smartphone, Phone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bornes de recharge IRVE pour véhicules électriques dans le Var – ADELEC83',
  description: 'ADELEC83 installe vos bornes de recharge certifiées IRVE dans tout le Var. Solutions pour particuliers, entreprises et copropriétés.',
  keywords: ['borne recharge Var', 'IRVE Toulon', 'installation borne électrique', 'wallbox Var', 'borne recharge entreprise'],
};

export default async function BornesPage() {
  // Récupération des réalisations bornes
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'bornes-recharge')
    .order('order_index', { ascending: true })
    .limit(6) as any;

  const advantages = [
    {
      icon: Zap,
      title: 'Charge rapide et sécurisée',
      description: 'Rechargez votre véhicule en toute sécurité'
    },
    {
      icon: Home,
      title: 'Compatible toutes marques',
      description: 'Tesla, Renault, Peugeot, BMW, etc.'
    },
    {
      icon: Shield,
      title: 'Éligible au crédit d\'impôt',
      description: 'Aides ADVENIR et crédit d\'impôt disponibles'
    },
    {
      icon: Smartphone,
      title: 'Pilotage intelligent',
      description: 'Suivi de consommation et programmation'
    }
  ];

  const solutions = [
    {
      icon: Home,
      title: 'Particuliers',
      description: 'Borne murale (7,4 à 11 kW), installation clé en main à domicile.',
      features: ['Installation en 1 journée', 'Devis gratuit', 'Garantie 2 ans', 'SAV réactif']
    },
    {
      icon: Building2,
      title: 'Entreprises',
      description: 'Bornes doubles ou sur pied, gestion de flottes et accès sécurisé.',
      features: ['Gestion multi-utilisateurs', 'Facturation intégrée', 'Maintenance préventive', 'Supervision à distance']
    },
    {
      icon: Users,
      title: 'Copropriétés',
      description: 'Étude technique et installation conforme à la loi sur le droit à la prise.',
      features: ['Droit à la prise', 'Installation collective', 'Répartition des coûts', 'Accompagnement AG']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Installation de bornes de recharge IRVE dans le Var"
        subtitle="ADELEC83 installe des bornes de recharge pour véhicules électriques et hybrides rechargeables, à domicile ou en entreprise."
        image="/images/hero-bornes.jpg"
        cta={{
          text: 'Obtenir mon devis borne de recharge',
          href: '/contact',
        }}
      />

      {/* Pourquoi installer une borne */}
      <Section
        eyebrow="Les avantages"
        title="Rechargez votre véhicule électrique en toute sécurité et à moindre coût"
        subtitle="Une borne de recharge certifiée IRVE (Infrastructure de Recharge pour Véhicules Électriques) vous permet de gagner du temps, sécuriser votre installation et optimiser la charge de votre véhicule."
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
      </Section>

      {/* Nos prestations */}
      <Section
        eyebrow="Nos solutions"
        title="Solutions de recharge pour particuliers et professionnels"
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
            Faire une demande d'installation
          </Link>
        </div>
      </Section>

      {/* Pourquoi choisir une borne certifiée IRVE */}
      <Section
        eyebrow="Sécurité & conformité"
        title="Pourquoi choisir une installation certifiée IRVE ?"
        subtitle="La certification IRVE est obligatoire pour toute installation de borne de recharge supérieure à 3,7 kW. Elle garantit la sécurité de votre installation et vous permet de bénéficier des aides financières."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Sécurité garantie</h3>
            <p className="text-gray-600">Installation conforme aux normes électriques et protection contre les surcharges.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💶</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Aides financières</h3>
            <p className="text-gray-600">Crédit d'impôt de 300€ et programme ADVENIR pour les entreprises et copropriétés.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-brand-gray mb-3">Charge optimisée</h3>
            <p className="text-gray-600">Gestion intelligente de la puissance et programmation des heures creuses.</p>
          </div>
        </div>
      </Section>

      {/* ADELEC83, installateur certifié IRVE */}
      <Section
        eyebrow="Votre installateur local"
        title="ADELEC83, installateur certifié IRVE"
        subtitle="ADELEC83 est certifiée IRVE et intervient dans tout le Var (Toulon, Hyères, Solliès, Brignoles, Saint-Tropez). Nous accompagnons les particuliers, entreprises et syndics dans la pose, le raccordement et la maintenance de leur borne de recharge."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Shield className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Certification IRVE</h3>
            <p className="text-gray-600 mb-6">
              Notre certification IRVE (Infrastructure de Recharge pour Véhicules Électriques) vous garantit une installation professionnelle, sécurisée et conforme aux normes en vigueur.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-blue">200+</div>
                <div className="text-sm text-gray-600">bornes installées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">100%</div>
                <div className="text-sm text-gray-600">conformes IRVE</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">24h</div>
                <div className="text-sm text-gray-600">délai de réponse</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">2 ans</div>
                <div className="text-sm text-gray-600">garantie</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="tel:0494912753"
              className="inline-flex items-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez un technicien IRVE : 04 94 91 27 53
            </a>
          </div>
        </div>
      </Section>

      {/* Nos réalisations */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos réalisations"
          title="Installations de bornes de recharge dans le Var"
          subtitle="Découvrez quelques exemples de nos installations de bornes de recharge pour particuliers, entreprises et copropriétés."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation: any, index: number) => (
              <RealisationCard key={realisation.id} {...realisation} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* CTA Final */}
      <Section
        eyebrow="Prêt à installer votre borne ?"
        title="Demandez votre devis gratuit"
        subtitle="Nos techniciens IRVE vous conseillent et vous proposent la solution la plus adaptée à vos besoins et à votre installation électrique."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors text-center"
          >
            Demander un devis IRVE
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
