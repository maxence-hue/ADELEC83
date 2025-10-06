export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{step}</p>
        </li>
      ))}
    </ol>
  );
}
