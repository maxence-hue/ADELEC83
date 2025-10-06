'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/lib/config';
import { ButtonLink } from './button';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Ouvrir le menu</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div id="mobile-menu" className="absolute left-0 right-0 top-full z-50 bg-white shadow-xl dark:bg-slate-900">
          <div className="space-y-2 p-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-900 hover:bg-brand-blue/10 dark:text-white"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="grid gap-3">
              <ButtonLink variant="primary" href="tel:+33617020637">
                Appeler
              </ButtonLink>
              <ButtonLink variant="outline" href="/contact" onClick={() => setOpen(false)}>
                Demander un devis
              </ButtonLink>
              <ButtonLink variant="secondary" href="tel:+33617020637" onClick={() => setOpen(false)}>
                Urgence
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
