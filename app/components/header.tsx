"use client";

import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { navItems, company } from "@/lib/config";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">ADE</span>
              <div className="flex flex-col leading-tight">
                <span>ADElec 83</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Électricien depuis 1995</span>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 lg:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <Button href="tel:+33617020637" variant="outline" size="sm">
              Appeler
            </Button>
            <Button href="/contact" size="sm">
              Demander un devis
            </Button>
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:text-slate-300 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary">
          <div>
            Urgence électricité ? Appelez le <strong>{company.phone}</strong> — réponse sous 30 min sur horaires ouvrés.
          </div>
          <div className="flex items-center gap-2 text-xs text-primary/80">
            <PhoneIcon className="h-4 w-4" aria-hidden /> Lun–Ven 8h–18h
          </div>
        </div>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
