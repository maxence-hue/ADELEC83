"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqsClasses = "divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/60";

export function FAQ({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className={faqsClasses}>
      {items.map((item, index) => (
        <Disclosure key={item.question} as="div" defaultOpen={index === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-medium text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-slate-100">
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  aria-hidden
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300">
                {item.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
