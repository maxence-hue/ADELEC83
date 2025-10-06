import Link from "next/link";
import { company, navItems, citiesCovered, socialLinks } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 text-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{company.name}</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{company.baseline}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            <a href="tel:+33617020637" className="hover:text-primary">
              {company.phone}
            </a>
            <br />
            <a href="mailto:mc.alehause@sfr.fr" className="hover:text-primary">
              {company.email}
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Navigation</h4>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-600 transition hover:text-primary dark:text-slate-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Zones d’intervention</h4>
          <ul className="mt-4 columns-2 gap-2 text-slate-600 dark:text-slate-300">
            {citiesCovered.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Horaires</h4>
          <ul className="mt-4 space-y-1 text-slate-600 dark:text-slate-300">
            {company.hours.map((slot) => (
              <li key={slot.days}>
                <span className="font-medium text-slate-900 dark:text-white">{slot.days}</span> — {slot.hours}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.title} href={social.href} className="text-slate-500 transition hover:text-primary" aria-label={social.title}>
                <svg className="h-5 w-5" aria-hidden>
                  <use href={`/icons/${social.icon}.svg#icon`} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/70 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950">
        © {new Date().getFullYear()} {company.name}. Tous droits réservés. —
        <Link href="/legal/mentions-legales" className="mx-2 hover:text-primary">
          Mentions légales
        </Link>
        •
        <Link href="/legal/politique-confidentialite" className="mx-2 hover:text-primary">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}
