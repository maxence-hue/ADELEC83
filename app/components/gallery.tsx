import { Card } from './card';

export function Gallery({
  items
}: {
  items: { title: string; description: string; href: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <div className="flex h-40 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
            <svg className="h-16 w-16 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
              <path d="M3 15l5-5 4 4 3-3 4 4" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          <a className="mt-4 inline-flex text-sm font-semibold text-brand-blue" href={item.href}>
            Voir le projet →
          </a>
        </Card>
      ))}
    </div>
  );
}
