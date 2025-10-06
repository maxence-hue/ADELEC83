export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Table des matières" className="sticky top-24 space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm dark:border-slate-800 dark:bg-slate-900/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Sommaire</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level > 2 ? "ml-4" : undefined}>
            <a href={`#${item.id}`} className="text-slate-600 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-slate-300">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
