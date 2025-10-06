'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-brand-blue border-brand-blue text-white hover:bg-brand-blue/90',
  secondary: 'bg-white border-slate-200 text-slate-900 hover:border-brand-blue hover:text-brand-blue dark:bg-slate-900 dark:text-slate-100',
  outline: 'bg-transparent border-brand-blue text-brand-blue hover:bg-brand-blue/10'
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
};

const ButtonInner = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', ...props },
  ref
) {
  return <button ref={ref} className={clsx(baseStyles, variants[variant], className)} {...props} />;
});

export const ButtonLink = ({ className, variant = 'primary', href, ...props }: AnchorProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  if (isExternal) {
    return (
      <a className={clsx(baseStyles, variants[variant], 'no-underline', className)} href={href} {...props} />
    );
  }

  return (
    <Link
      className={clsx(baseStyles, variants[variant], 'no-underline', className)}
      href={href}
      {...props}
    />
  );
};


export type { ButtonVariant };
export default ButtonInner;
