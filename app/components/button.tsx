import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { Route } from "next";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-glow hover:bg-primary/90 focus-visible:outline-primary",
        outline:
          "border border-slate-300 text-slate-900 hover:border-primary hover:text-primary focus-visible:outline-primary dark:border-slate-700 dark:text-slate-100",
        ghost:
          "text-slate-900 hover:text-primary focus-visible:outline-primary dark:text-slate-100",
        subtle:
          "bg-white text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline-primary dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  {
    href?: string;
    children: ReactNode;
    className?: string;
  } &
  (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({ href, children, className, variant, size, ...props }: ButtonProps) {
  const classes = clsx(buttonStyles({ variant, size }), className);

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href as Route} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
