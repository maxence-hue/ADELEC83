import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary", className)}>
      {children}
    </span>
  );
}
