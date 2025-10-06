"use client";

import { PhoneIcon, ChatBubbleLeftRightIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center lg:hidden">
      <div className="mx-4 flex w-full max-w-md items-center justify-between gap-3 rounded-full border border-slate-200 bg-white/95 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/90">
        <Link
          href="tel:+33617020637"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden />
          Appeler
        </Link>
        <Link
          href="https://wa.me/330617020637"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden />
          WhatsApp
        </Link>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white shadow-glow"
        >
          <DocumentTextIcon className="h-5 w-5" aria-hidden />
          Devis
        </Link>
      </div>
    </div>
  );
}
