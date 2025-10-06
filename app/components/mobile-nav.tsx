"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navItems } from "@/lib/config";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-900/50" aria-hidden="true" />
      <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-xl dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-lg font-semibold text-slate-900 dark:text-white">Menu</Dialog.Title>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:text-slate-300"
            aria-label="Fermer le menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-slate-200"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-8 space-y-3">
          <Button href="tel:+33617020637" variant="outline" className="w-full">
            Appeler ADElec 83
          </Button>
          <Button href="/contact" className="w-full">
            Demander un devis
          </Button>
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
