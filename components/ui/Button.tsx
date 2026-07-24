// components/ui/Button.tsx
import type {
  ButtonHTMLAttributes,
  ComponentProps,
  PropsWithChildren,
} from "react";
import Link from "next/link";
import type { Route } from "next";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type BaseProps = PropsWithChildren<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}>;

interface ButtonAsButton
  extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: Route;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-b from-signal-strong to-signal text-white shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] hover:brightness-110 active:scale-[0.98] active:brightness-95",
  secondary:
    "bg-surface-elevated text-text-primary border border-border hover:border-signal/50 hover:bg-surface active:scale-[0.98]",
  ghost: "text-text-secondary hover:text-text-primary active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-10 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-[1rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-200 whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;

    // O Link recebe suas props nativas (incluindo eventos como onClick) para
    // preservar o comportamento de navegação do Next.js e a tipagem do elemento <a>.
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
