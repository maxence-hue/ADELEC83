import { Section } from "../../../components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles ADElec 83.",
  path: "/legal/politique-confidentialite"
});

export default function PolitiqueConfidentialitePage() {
  return (
    <Section className="pt-16">
      <div className="container-prose">
        <h1>Politique de confidentialité</h1>
        <p>
          ADElec 83 s’engage à respecter la confidentialité des données personnelles collectées via ce site. Les informations communiquées via le formulaire de contact sont destinées exclusivement au traitement des demandes et ne sont jamais revendues.
        </p>
        <h2>Données collectées</h2>
        <p>
          Nous collectons uniquement les données nécessaires à la prise de contact : nom, email, téléphone, adresse, informations sur le projet et consentement.
        </p>
        <h2>Finalités</h2>
        <p>
          Les données permettent de répondre aux demandes de devis, planifier les interventions et assurer le suivi commercial. Nous pouvons également envoyer des informations relatives aux services ADElec 83.
        </p>
        <h2>Durée de conservation</h2>
        <p>Les données sont conservées pendant la durée nécessaire au traitement de la demande puis archivées pendant 3 ans.</p>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données. Contactez mc.alehause@sfr.fr pour exercer vos droits.
        </p>
        <h2>Sécurité</h2>
        <p>
          ADElec 83 met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre toute atteinte (accès non autorisé, perte, altération).
        </p>
        <h2>Contact</h2>
        <p>
          Pour toute question relative à la protection des données, écrivez à mc.alehause@sfr.fr ou à ADElec 83 — 1 Chemin de l’Enclos, 83210 Solliès-Pont.
        </p>
      </div>
    </Section>
  );
}
