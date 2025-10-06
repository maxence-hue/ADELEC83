export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="relative rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <span className="text-lg font-semibold">{index + 1}</span>
          </div>
          <p className="text-base text-slate-700 dark:text-slate-200">{step}</p>
        </li>
      ))}
    </ol>
  );
}
