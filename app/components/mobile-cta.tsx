'use client';

import { useEffect, useState } from 'react';

const actions = [
  { label: 'Appeler', href: 'tel:+33617020637' },
  { label: 'WhatsApp', href: '#', disabled: true },
  { label: 'Devis', href: '/contact' }
];

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 200);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-lg transition md:hidden dark:border-slate-800 dark:bg-slate-900/95 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 text-sm font-semibold">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`flex-1 rounded-full px-4 py-2 text-center ${
              action.disabled
                ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                : 'bg-brand-blue text-white shadow'
            }`}
            aria-disabled={action.disabled}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
