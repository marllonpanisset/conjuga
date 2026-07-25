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
  primary: `
    bg-gradient-to-b
    from-signal-strong
    to-signal
    text-white

    shadow-[var(--shadow-button)]

    hover:
      brightness-110
      -translate-y-[1px]
      shadow-[var(--shadow-button-hover)]

    active:
      translate-y-0
      scale-[0.98]

    focus-visible:
      outline-none
      ring-2
      ring-signal/40
      ring-offset-2
  `,

  secondary: `
    bg-surface-elevated
    text-text-primary

    border
    border-border

    hover:
      border-signal/40
      bg-surface
      -translate-y-[1px]

    active:
      translate-y-0
      scale-[0.98]

    focus-visible:
      outline-none
      ring-2
      ring-signal/30
      ring-offset-2
  `,

  ghost: `
    text-text-secondary

    hover:
      text-text-primary
      bg-surface

    active:
      scale-[0.98]

    focus-visible:
      outline-none
      ring-2
      ring-signal/30
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  md: `
    h-10
    px-5
    text-[0.9375rem]
  `,

  lg: `
    h-12
    px-7
    text-base
  `,
};

const base = `
  inline-flex
  items-center
  justify-center
  gap-2

  rounded-xl

  font-medium

  whitespace-nowrap

  cursor-pointer

  transition-all
  duration-200
  ease-out

  select-none
`;

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
