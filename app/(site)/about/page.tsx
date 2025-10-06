import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { cities, company } from '@/lib/config';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'À propos',
  description: "Histoire d'ADElec 83 : électriciens varois depuis 1995, experts en collectif, tertiaire et résidentiel haut de gamme."
};

export default function AboutPage() {
  return (
    <Section title="Une équipe ancrée dans le Var depuis 1995" subtitle="ADElec 83 est née de la volonté d'assurer des installations fiables pour les bailleurs sociaux, syndics et entreprises locales.">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', href: '/' },
              { name: 'À propos', href: '/about' }
            ])
          )
        }}
      />
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Fondée par Michel Alehause, ADElec 83 intervient depuis près de trente ans sur les chantiers électriques les plus
          exigeants du Var. Notre croissance s'est bâtie sur la confiance des syndics de copropriété, des maîtres d'ouvrage
          publics et des entreprises tertiaires qui recherchent un partenaire capable de combiner conseil, exécution et
          maintenance.
        </p>
        <p>
          L'équipe compte aujourd'hui des chargés d'affaires, un bureau d'études interne et des techniciens habilités sur tous
          les domaines de tension. Notre organisation agile permet de mobiliser rapidement des ressources pour les projets
          complexes : résidences neuves, rénovation d'ERP, data rooms, solutions de pilotage domotique ou encore installations
          photovoltaïques autoconsommation.
        </p>
        <h3>Valeurs qui nous guident</h3>
        <ul>
          <li><strong>Proximité :</strong> interlocuteur dédié, reporting hebdomadaire et visites régulières de chantier.</li>
          <li>
            <strong>Qualité :</strong> procédures de contrôle inspirées de la NF C 15-100 et plan qualité sécurité systématique.
          </li>
          <li><strong>Sécurité :</strong> formations continues, habilitations à jour et consignations documentées.</li>
        </ul>
        <h3>Une équipe pluridisciplinaire</h3>
        <table>
          <thead>
            <tr>
              <th>Rôle</th>
              <th>Expertises</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chargés d'affaires</td>
              <td>Gestion multi-sites, coordination lots techniques, relation syndic</td>
            </tr>
            <tr>
              <td>Bureau d'études</td>
              <td>Dimensionnement CFO/CFA, calculs d'éclairement, schémas unifilaires</td>
            </tr>
            <tr>
              <td>Techniciens terrain</td>
              <td>Installations IRVE, mise en sécurité, climatisation et systèmes domotiques KNX</td>
            </tr>
          </tbody>
        </table>
        <h3>Zones d'intervention</h3>
        <p>
          ADElec 83 couvre un périmètre large autour de Solliès-Pont : {cities.join(', ')}. Nous intervenons également sur
          Toulon Provence Méditerranée et ses zones d'activité (Grand Var, Six-Fours, Ollioules) selon les besoins.
        </p>
        <h3>Coordonnées</h3>
        <p>
          {company.address.street}
          <br />
          {company.address.postalCode} {company.address.city}
          <br />
          Tél. : {company.phone} — {company.email}
        </p>
      </div>
    </Section>
  );
}
