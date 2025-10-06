import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

export function FeatureList({
  items,
  columns = 2
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <ul className={clsx("grid gap-4", columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl bg-white/70 p-4 shadow-sm dark:bg-slate-900/60">
          <CheckCircleIcon className="mt-1 h-6 w-6 text-primary" aria-hidden />
          <span className="text-base text-slate-700 dark:text-slate-200">{item}</span>
        </li>
      ))}
    </ul>
  );
}
