import { Section } from "../../../components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site ADElec 83.",
  path: "/legal/mentions-legales"
});

export default function MentionsLegalesPage() {
  return (
    <Section className="pt-16">
      <div className="container-prose">
        <h1>Mentions légales</h1>
        <p>
          Le site ADElec 83 est édité par la société ADElec 83, dont le siège social est situé au 1 Chemin de l’Enclos, 83210
          Solliès-Pont.
        </p>
        <h2>Éditeur</h2>
        <p>ADElec 83 — Alehause Domotique Électricité</p>
        <p>SIRET : 000 000 000 00000 (remplacer par votre numéro)</p>
        <p>Email : mc.alehause@sfr.fr — Téléphone : 06 17 02 06 37</p>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        <h2>Responsabilité</h2>
        <p>
          ADElec 83 met tout en œuvre pour assurer l’exactitude des informations publiées. Toutefois, elle ne saurait être tenue responsable des erreurs ou omissions. Les contenus sont fournis à titre informatif.
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus (textes, illustrations, logos) est la propriété de ADElec 83 ou de ses partenaires. Toute reproduction est soumise à autorisation écrite préalable.
        </p>
        <h2>Crédits</h2>
        <p>Conception et réalisation : ADElec 83.</p>
      </div>
    </Section>
  );
}
