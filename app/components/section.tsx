import clsx from 'clsx';
import { Container } from './container';

export function Section({
  children,
  title,
  eyebrow,
  subtitle,
  id,
  className
}: {
  children: React.ReactNode;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={clsx('py-16 sm:py-20', className)}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
