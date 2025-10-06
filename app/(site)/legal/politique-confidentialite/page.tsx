import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { breadcrumbJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et gestion des données personnelles pour le site ADElec 83.'
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section title="Politique de confidentialité">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Politique de confidentialité', href: '/legal/politique-confidentialite' }
            ])
          )
        }}
      />
      <div className="prose prose-slate max-w-none text-sm dark:prose-invert">
        <p>
          Cette politique décrit la manière dont ADElec 83 collecte, utilise et protège les données à caractère personnel transmises
          via son site internet.
        </p>
        <h2>Données collectées</h2>
        <ul>
          <li>Identité : nom, prénom, société, fonction.</li>
          <li>Coordonnées : email, téléphone, adresse de chantier.</li>
          <li>Informations liées au projet : type de prestation, message libre.</li>
        </ul>
        <h2>Finalités</h2>
        <p>Les données sont utilisées pour :</p>
        <ul>
          <li>Répondre aux demandes de devis ou d'assistance technique.</li>
          <li>Préparer des propositions commerciales et planifier des interventions.</li>
          <li>Assurer un suivi qualité et sécurité des chantiers.</li>
        </ul>
        <h2>Durée de conservation</h2>
        <p>
          Les données de contact sont conservées pendant trois ans à compter du dernier échange, sauf obligation légale contraire.
        </p>
        <h2>Partage des données</h2>
        <p>
          Les informations sont destinées exclusivement aux équipes internes d'ADElec 83. Aucun transfert ni revente à des tiers
          n'est effectué sans votre accord, hors obligations légales.
        </p>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement et
          d'opposition. Pour exercer ces droits, contactez {company.email} en précisant votre demande et un justificatif d'identité.
        </p>
        <h2>Sécurité</h2>
        <p>
          ADElec 83 met en place des mesures organisationnelles et techniques (droits d'accès restreints, sauvegardes chiffrées)
          pour protéger les données contre toute perte, accès non autorisé ou divulgation.
        </p>
        <h2>Contact</h2>
        <p>
          Pour toute question relative à cette politique, vous pouvez écrire à {company.email} ou par courrier à {company.address.street},
          {company.address.postalCode} {company.address.city}.
        </p>
      </div>
    </Section>
  );
}
