import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { CTASection } from '@/components/cta-section';
import { FAQ } from '@/components/faq';
import { supabase } from '@/lib/supabase';
import { Zap, CheckCircle, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Électricité Générale - ADELEC83',
  description: 'Installation électrique, rénovation, mise en conformité et dépannage électrique dans le Var. Entreprise certifiée RGE.',
};

export default async function ElectricitePage() {
  const { data: pageData } = (await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'electricite')
    .single()) as any;

  const services = [
    {
      title: 'Installation neuve',
      description: 'Création complète de votre installation électrique pour construction neuve',
      icon: Zap,
    },
    {
      title: 'Rénovation électrique',
      description: 'Mise aux normes et modernisation de votre installation existante',
      icon: Shield,
    },
    {
      title: 'Mise en conformité',
      description: 'Diagnostic et mise en conformité selon les normes NF C 15-100',
      icon: CheckCircle,
    },
    {
      title: 'Dépannage 7j/7',
      description: 'Intervention rapide pour tous vos problèmes électriques urgents',
      icon: Clock,
    },
  ];

  const faqItems = [
    {
      question: "Quand faut-il rénover son installation électrique ?",
      answer: "Une rénovation est recommandée si votre installation a plus de 15-20 ans, si vous avez des disjonctions fréquentes, des prises qui chauffent, ou si vous n'avez pas de différentiel 30mA. Un diagnostic électrique permet d'identifier les points à améliorer."
    },
    {
      question: "Combien coûte une rénovation électrique complète ?",
      answer: "Le prix varie selon la surface et la complexité, généralement entre 80€ et 120€/m² pour une rénovation complète. Nous établissons un devis détaillé gratuit après visite technique."
    },
    {
      question: "Quelle est la durée des travaux ?",
      answer: "Pour une maison de 100m², comptez 5 à 10 jours selon la complexité. Pour un appartement de 60m², 3 à 5 jours suffisent généralement."
    },
    {
      question: "Mes travaux sont-ils éligibles aux aides ?",
      answer: "Certains travaux d'économie d'énergie peuvent bénéficier de la TVA réduite à 10%. Nous vous accompagnons dans vos démarches."
    },
  ];

  return (
    <>
      <Hero
        title={pageData?.hero_title || "Électricité Générale"}
        subtitle={pageData?.hero_subtitle || "Installation, rénovation et dépannage électrique dans le Var"}
        image="/images/hero-electricite.jpg"
        cta={{
          text: 'Demander un devis',
          href: '/contact',
        }}
      />

      <Section>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Depuis plus de 20 ans, ADELEC83 est votre partenaire de confiance pour tous vos travaux d'électricité 
            dans le Var. Entreprise familiale basée à Solliès-Pont, nous intervenons chez les particuliers et 
            professionnels avec le même engagement : sécurité, qualité et conformité.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Nos prestations"
        title="Une expertise complète en électricité"
        subtitle="De l'installation neuve au dépannage d'urgence"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir ADELEC83 ?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#0047AB] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Certification Qualifelec</strong>
                  <span className="text-gray-600">Garantie d'un travail professionnel et aux normes</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#0047AB] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Assurance décennale</strong>
                  <span className="text-gray-600">Votre installation garantie pendant 10 ans</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#0047AB] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Devis gratuit et détaillé</strong>
                  <span className="text-gray-600">Transparence totale sur les tarifs</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#0047AB] mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Intervention rapide</strong>
                  <span className="text-gray-600">Disponible 7j/7 pour les urgences</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Nos domaines d'intervention</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-[#0047AB]">Résidentiel</h3>
                <p className="text-sm text-gray-600">Maisons individuelles, appartements, villas</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-[#0047AB]">Tertiaire</h3>
                <p className="text-sm text-gray-600">Bureaux, commerces, locaux professionnels</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-[#0047AB]">Industriel</h3>
                <p className="text-sm text-gray-600">Entrepôts, ateliers, sites de production</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-[#0047AB]">Collectivités</h3>
                <p className="text-sm text-gray-600">Écoles, mairies, équipements publics</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Questions fréquentes"
        title="Tout savoir sur nos prestations électriques"
      >
        <FAQ items={faqItems} />
      </Section>

      <CTASection
        title="Besoin d'un électricien dans le Var ?"
        subtitle="Devis gratuit et intervention rapide"
      />
    </>
  );
}
