export function TableOfContents({
  items
}: {
  items: { id: string; title: string; level: number }[];
}) {
  if (!items.length) return null;

  return (
    <nav aria-label="Table des matières" className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 text-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="font-semibold text-slate-900 dark:text-white">Sommaire</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level > 1 ? 'ml-4' : undefined}>
            <a className="text-slate-600 hover:text-brand-blue dark:text-slate-300" href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
