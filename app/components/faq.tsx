'use client';

import { useState } from 'react';

export function FAQ({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <dl className="space-y-4">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <dt>
              <button
                className="flex w-full items-center justify-between text-left text-base font-semibold text-slate-900 dark:text-white"
                onClick={() => setActive(open ? null : index)}
                aria-expanded={open}
              >
                <span>{item.question}</span>
                <span aria-hidden className="ml-4 text-2xl text-brand-blue">{open ? '−' : '+'}</span>
              </button>
            </dt>
            {open && <dd className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.answer}</dd>}
          </div>
        );
      })}
    </dl>
  );
}
