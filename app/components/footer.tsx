import Link from 'next/link';
import { Container } from './container';
import { company, navigation, cities } from '@/lib/config';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-sm dark:border-slate-800 dark:bg-slate-950">
      <Container className="grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{company.legalName}</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{company.baseline}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <p className="mt-2">
            <a className="font-semibold text-brand-blue" href={`tel:${company.phone.replace(/\s+/g, '')}`}>
              {company.phone}
            </a>
            <br />
            <a className="text-brand-blue" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Navigation</h4>
          <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-blue">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Zones d'intervention</h4>
          <ul className="mt-3 space-y-1 text-slate-600 dark:text-slate-300">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Horaires</h4>
          <ul className="mt-3 space-y-1 text-slate-600 dark:text-slate-300">
            {company.hours.map((item) => (
              <li key={item.day}>
                <span className="font-medium text-slate-800 dark:text-slate-200">{item.day}</span> — {item.hours}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <Link href="/legal/mentions-legales" className="block text-slate-500 hover:text-brand-blue dark:text-slate-400">
              Mentions légales
            </Link>
            <Link
              href="/legal/politique-confidentialite"
              className="block text-slate-500 hover:text-brand-blue dark:text-slate-400"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {company.legalName}. Tous droits réservés.
      </Container>
    </footer>
  );
}
