export function Gallery({
  items
}: {
  items: { title: string; description: string; href: string; meta: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              className="h-24 w-24 text-primary/60"
              role="img"
              aria-hidden
            >
              <rect x="15" y="20" width="90" height="60" rx="12" fill="currentColor" opacity="0.2" />
              <path d="M15 70 45 50l25 18 20-12 20 14" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="45" cy="40" r="8" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <div className="text-xs uppercase tracking-widest text-primary">{item.meta}</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
