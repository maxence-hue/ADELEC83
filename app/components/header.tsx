import Link from 'next/link';
import { navigation, company } from '@/lib/config';
import { Container } from './container';
import { ButtonLink } from './button';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="bg-brand-blue text-white">
        <Container className="flex flex-col items-center justify-between gap-2 py-1 text-xs sm:flex-row">
          <p className="font-semibold">{company.emergency}</p>
          <p>
            {company.hours.map((item) => item.day).join(' • ')} : {company.hours[0]?.hours}
          </p>
        </Container>
      </div>
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold text-slate-900 dark:text-white">
            ADElec 83
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-blue">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink variant="outline" href="tel:+33617020637">
              Appeler
            </ButtonLink>
            <ButtonLink variant="primary" href="/contact">
              Demander un devis
            </ButtonLink>
            <ButtonLink variant="secondary" href="tel:+33617020637">
              Urgence
            </ButtonLink>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
