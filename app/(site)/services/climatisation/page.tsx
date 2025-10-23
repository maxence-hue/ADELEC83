import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { RealisationCard } from '@/components/realisation-card';
import { supabase } from '@/lib/supabase';
import { Euro, Globe, Home, Volume2, Wrench, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Climatisation réversible et pompe à chaleur dans le Var – ADELEC83',
  description: 'ADELEC83 installe et entretient vos climatisations réversibles et pompes à chaleur air/air dans tout le Var. Entreprise RGE QualiClimafroid.',
  keywords: ['climatisation Var', 'pompe à chaleur Var', 'climatisation réversible Toulon', 'installation climatisation Hyères', 'RGE QualiClimafroid'],
};

export default async function ClimatisationPage() {
  // Récupération des réalisations climatisation
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .eq('category', 'climatisation')
    .order('order_index', { ascending: true })
    .limit(6) as any;

  const advantages = [
    {
      icon: Euro,
      title: 'Jusqu\'à 60 % d\'économies d\'énergie',
      description: 'Réduisez considérablement votre facture de chauffage'
    },
    {
      icon: Globe,
      title: 'Éligible aux aides de l\'État',
      description: 'Primes CEE et aides disponibles'
    },
    {
      icon: Home,
      title: 'Confort thermique optimal',
      description: 'Température idéale toute l\'année'
    },
    {
      icon: Volume2,
      title: 'Systèmes silencieux',
      description: 'Technologie connectée et discrète'
    }
  ];

  const services = [
    {
      title: 'Installation complète',
      description: 'Étude thermique, choix du matériel, pose et mise en service.',
      details: 'Marques partenaires : Daikin, Mitsubishi, Atlantic.'
    },
    {
      title: 'Remplacement d\'un ancien système',
      description: 'Optimisez vos performances énergétiques avec un matériel nouvelle génération.',
      details: 'Diagnostic gratuit de votre installation actuelle.'
    },
    {
      title: 'Entretien & maintenance annuelle',
      description: 'Contrôle des fluides, nettoyage et vérification des performances.',
      details: 'Contrats d\'entretien sur mesure disponibles.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Installation et entretien de climatisation réversible dans le Var"
        subtitle="ADELEC83, entreprise RGE QualiClimafroid, installe et entretient vos systèmes de climatisation réversible et pompes à chaleur air/air dans tout le Var (83)."
        image="/images/hero-climatisation.jpg"
        cta={{
          text: 'Demandez votre devis gratuit',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Simuler mon projet clim',
          href: '/contact',
        }}
      />

      {/* Pourquoi choisir la climatisation réversible */}
      <Section
        eyebrow="Les avantages"
        title="Chauffez et rafraîchissez votre maison avec une seule installation"
        subtitle="La climatisation réversible, aussi appelée pompe à chaleur air/air, est aujourd'hui la solution la plus économique, écologique et confortable pour votre logement ou vos locaux. Elle capte les calories de l'air extérieur pour chauffer en hiver et les rejette pour rafraîchir en été."
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
        eyebrow="Nos services"
        title="Une solution adaptée à chaque besoin"
        className="bg-gray-50"
      >
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-gray" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <p className="text-sm text-brand-blue font-semibold">{service.details}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Demander un devis d'installation
          </Link>
        </div>
      </Section>

      {/* ADELEC83, votre installateur RGE */}
      <Section
        eyebrow="Votre installateur local"
        title="ADELEC83, votre installateur RGE dans le Var"
        subtitle="Basée à Solliès-Pont, ADELEC83 intervient dans tout le Var : Toulon, Hyères, La Crau, Brignoles, Carqueiranne, Saint-Maximin… Nos techniciens QualiClimafroid assurent un service réactif, soigné et conforme à la réglementation en vigueur."
        className="bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5"
      >
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Wrench className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Certification RGE QualiClimafroid</h3>
            <p className="text-gray-600 mb-6">
              Notre certification RGE (Reconnu Garant de l'Environnement) vous garantit une installation conforme aux normes et vous permet de bénéficier des aides de l'État.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-blue">20+</div>
                <div className="text-sm text-gray-600">ans d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-gray-600">installations/an</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">98%</div>
                <div className="text-sm text-gray-600">clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">48h</div>
                <div className="text-sm text-gray-600">délai d'intervention</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="tel:0494912753"
              className="inline-flex items-center bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez un expert climatisation : 04 94 91 27 53
            </a>
          </div>
        </div>
      </Section>

      {/* Nos réalisations */}
      {realisations && realisations.length > 0 && (
        <Section
          eyebrow="Nos réalisations"
          title="Installations climatisation dans le Var"
          subtitle="Découvrez quelques exemples de nos installations de climatisation réversible chez nos clients particuliers et professionnels."
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
        eyebrow="Prêt à installer votre climatisation ?"
        title="Demandez votre étude gratuite"
        subtitle="Nos techniciens vous conseillent et vous proposent la solution la plus adaptée à votre logement et à votre budget."
        className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-yellow/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-gray font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow-dark transition-colors text-center"
          >
            Demander un devis gratuit
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
