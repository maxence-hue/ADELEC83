import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { supabase } from '@/lib/supabase';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact - ADELEC83 | Devis gratuit dans le Var',
  description: 'Contactez ADELEC83 pour un devis gratuit en électricité, photovoltaïque, climatisation ou bornes de recharge. Réponse sous 48h.',
};

export default async function ContactPage() {
  const { data: pageData } = (await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'contact')
    .single()) as any;

  const { data: contactInfo } = (await supabase
    .from('company_info')
    .select('*')
    .eq('key', 'contact')
    .single()) as any;

  const contact = contactInfo?.value as any || {
    adresse: '226 Rue de la République, 83210 Solliès-Pont',
    telephone: '04 94 XX XX XX',
    email: 'contact@adelec83.fr',
    horaires: {
      'lundi-vendredi': '8h-12h / 14h-18h',
      'samedi': 'Sur rendez-vous',
      'dimanche': 'Fermé'
    }
  };

  return (
    <>
      <Hero
        title={pageData?.hero_title || 'Contactez-nous'}
        subtitle={pageData?.hero_subtitle || 'Demandez votre devis gratuit'}
        image="/images/hero-contact.jpg"
      />

      <Section>
        <div className="prose prose-lg max-w-none text-center">
          <p className="text-xl text-gray-700 mb-8">
            Vous avez un projet d\'électricité, de panneaux solaires, de climatisation ou de borne de recharge ?
            Contactez-nous pour un devis gratuit et personnalisé. Nous vous répondons sous 48h.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          {/* Formulaire */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Demande de devis</h2>
            <p className="text-gray-600 mb-6">
              Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de votre projet.
            </p>
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <aside className="space-y-6">
            {/* Coordonnées */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#0047AB]">Nos coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#0047AB] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-gray-600">{contact.adresse}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#0047AB] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href={`tel:${contact.telephone.replace(/\s/g, '')}`} className="text-sm text-[#0047AB] hover:underline">
                      {contact.telephone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#0047AB] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-[#0047AB] hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#0047AB] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <div className="text-sm text-gray-600">
                      {Object.entries(contact.horaires).map(([jour, horaire]) => (
                        <p key={jour}>
                          <span className="capitalize">{jour}</span>: {horaire as string}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-[#0047AB] text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Zone d\'intervention</h3>
              <p className="text-sm mb-2">
                Nous intervenons dans tout le département du Var :
              </p>
              <ul className="text-sm space-y-1">
                <li>• Toulon et agglomération</li>
                <li>• Hyères et les îles d\'Or</li>
                <li>• Brignoles et sa région</li>
                <li>• Draguignan et Dracénie</li>
                <li>• Saint-Raphaël et Fréjus</li>
              </ul>
              <p className="text-sm mt-3 text-[#FF8C42]">
                + zones limitrophes des départements 13 et 06
              </p>
            </div>

            {/* Urgence */}
            <div className="bg-[#FF8C42] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#1e1e1e]">Urgence électrique ?</h3>
              <p className="text-sm text-[#1e1e1e] mb-3">
                Pour toute urgence, contactez-nous directement :
              </p>
              <a
                href="tel:0494XXXXXX"
                className="inline-block bg-[#1e1e1e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e1e1e]/90 transition-colors"
              >
                <Phone className="inline w-5 h-5 mr-2" />
                04 94 XX XX XX
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* Carte Google Maps */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nous trouver</h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.844658775892!2d6.031!3d43.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEwJzUxLjYiTiA2wrAwMSczOS42IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            226 Rue de la République, 83210 Solliès-Pont
          </p>
        </div>
      </Section>
    </>
  );
}
