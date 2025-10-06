import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Section({
  id,
  children,
  title,
  kicker,
  description,
  className
}: {
  id?: string;
  children: ReactNode;
  title?: string;
  kicker?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("section", className)}>
      {(title || kicker || description) && (
        <div className="mb-10 max-w-3xl">
          {kicker && <p className="text-sm font-semibold uppercase tracking-widest text-primary">{kicker}</p>}
          {title && <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h2>}
          {description && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
