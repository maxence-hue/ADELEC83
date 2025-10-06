import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { breadcrumbJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: "Mentions légales du site ADElec 83 — Alehause Domotique Électricité."
};

export default function MentionsLegalesPage() {
  return (
    <Section title="Mentions légales">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'Mentions légales', href: '/legal/mentions-legales' }
            ])
          )
        }}
      />
      <div className="prose prose-slate max-w-none text-sm dark:prose-invert">
        <h2>Éditeur du site</h2>
        <p>
          {company.legalName}
          <br />
          {company.address.street}, {company.address.postalCode} {company.address.city}
          <br />
          Téléphone : {company.phone} — Email : {company.email}
        </p>
        <h2>Directeur de la publication</h2>
        <p>Michel Alehause, gérant.</p>
        <h2>Hébergement</h2>
        <p>Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, éléments graphiques, maquette) sont la propriété de ADElec 83 ou
          font l'objet d'autorisations d'utilisation. Toute reproduction, représentation, modification ou adaptation sans accord
          préalable est interdite.
        </p>
        <h2>Responsabilité</h2>
        <p>
          ADElec 83 met en œuvre tous les moyens à sa disposition pour assurer une information fiable et une mise à jour
          régulière du site. Toutefois, des erreurs ou omissions peuvent survenir ; l'utilisateur est invité à vérifier les
          informations et à signaler toute inexactitude.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées uniquement pour instruire les demandes commerciales
          ou techniques. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression en écrivant
          à {company.email}.
        </p>
      </div>
    </Section>
  );
}
