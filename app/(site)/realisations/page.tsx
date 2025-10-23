import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { RealisationCard } from '@/components/realisation-card';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { supabase } from '@/lib/supabase';
import { Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Réalisations - ADELEC83 | Nos projets dans le Var',
  description: 'Découvrez nos réalisations en électricité, photovoltaïque, climatisation et bornes de recharge dans le Var. Plus de 600 installations.',
};

export default async function RealisationsPage() {
  const { data: realisations } = await supabase
    .from('realisations')
    .select('*')
    .order('order_index', { ascending: true });

  // Grouper les réalisations par catégorie
  const categories = {
    photovoltaique: 'Photovoltaïque',
    electricite: 'Électricité',
    climatisation: 'Climatisation',
    bornes: 'Bornes de recharge',
  };

  const realisationsByCategory = realisations?.reduce((acc, real) => {
    if (real.category) {
      if (!acc[real.category]) acc[real.category] = [];
      acc[real.category].push(real);
    }
    return acc;
  }, {} as Record<string, typeof realisations>) || {};

  return (
    <>
      <Hero
        title="Nos Réalisations"
        subtitle="Plus de 600 projets réussis dans tout le Var"
        image="/images/hero-realisations.jpg"
        cta={{
          text: 'Demander un devis',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 text-center">
            Découvrez une sélection de nos réalisations récentes. Chaque projet est unique et 
            témoigne de notre expertise en électricité, photovoltaïque, climatisation et bornes de recharge.
            Ces installations illustrent notre engagement pour la qualité et la satisfaction client.
          </p>
        </div>
      </Section>

      {/* Statistiques */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#0047AB]">600+</div>
            <p className="text-gray-600 mt-1">Projets réalisés</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF8C42]">200+</div>
            <p className="text-gray-600 mt-1">Installations solaires</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-500">150+</div>
            <p className="text-gray-600 mt-1">Climatisations</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">50+</div>
            <p className="text-gray-600 mt-1">Bornes IRVE</p>
          </div>
        </div>
      </Section>

      {/* Toutes les réalisations groupées par catégorie */}
      {Object.entries(categories).map(([key, label]) => {
        const categoryRealisations = realisationsByCategory[key];
        if (!categoryRealisations || categoryRealisations.length === 0) return null;
        
        return (
          <Section key={key}>
            <h2 className="text-2xl font-bold mb-6 text-[#1e1e1e]">{label}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryRealisations.map((realisation, index) => (
                <RealisationCard
                  key={realisation.id}
                  {...realisation}
                  index={index}
                />
              ))}
            </div>
          </Section>
        );
      })}

      {/* Si toutes les réalisations */}
      {(!realisations || realisations.length === 0) && (
        <Section>
          <p className="text-center text-gray-600">
            Nos réalisations seront bientôt disponibles.
          </p>
        </Section>
      )}

      {/* Zones d'intervention */}
      <Section className="bg-[#1e1e1e] text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nous intervenons dans tout le Var</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Basés à Solliès-Pont, nous rayonnons sur l'ensemble du département pour vos projets
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="font-semibold text-[#FF8C42]">Toulon</h3>
            <p className="text-sm text-gray-300">et agglomération</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="font-semibold text-[#FF8C42]">Hyères</h3>
            <p className="text-sm text-gray-300">Les Palmiers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="font-semibold text-[#FF8C42]">Brignoles</h3>
            <p className="text-sm text-gray-300">Cœur du Var</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="font-semibold text-[#FF8C42]">Draguignan</h3>
            <p className="text-sm text-gray-300">Dracénie</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Votre projet mérite notre expertise"
        subtitle="Rejoignez nos centaines de clients satisfaits"
      />
    </>
  );
}
