import type {
  ButtonHTMLAttributes,
  ComponentProps,
  PropsWithChildren,
} from "react";

import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onInk" | "onInkGhost" | "accent";
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
    bg-signal text-[#101418]
    border border-signal

    hover:bg-signal-strong hover:border-signal-strong
    hover:shadow-[var(--shadow-float)]

    active:bg-[#d6932e]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-signal
    focus-visible:ring-offset-2 focus-visible:ring-offset-background
  `,

  secondary: `
    border border-border-strong bg-transparent text-text-primary

    hover:border-text-secondary hover:bg-surface-elevated

    active:bg-surface

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-signal
    focus-visible:ring-offset-2 focus-visible:ring-offset-background
  `,

  ghost: `
    text-text-primary
    px-0

    hover:text-signal-strong

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-signal
    focus-visible:ring-offset-2 focus-visible:ring-offset-background
  `,

  /** Para uso sobre superfícies escuras (blocos de fechamento). */
  onInk: `
    bg-[#f4f1ea] text-[#15181d]
    border border-[#f4f1ea]

    hover:bg-[#ffffff] hover:border-[#ffffff]

    active:bg-[#e8e4da]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#f4f1ea]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#15181d]
  `,

  /** Variante de texto sobre superfícies escuras. */
  onInkGhost: `
    text-[#f4f1ea]/75 px-0

    hover:text-[#f4f1ea]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#f4f1ea]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#15181d]
  `,

  /** Sinal âmbar sobre tinta — uso na Home (Sala de Operações). */
  accent: `
    bg-[#e8a33d] text-[#101418]
    border border-[#e8a33d]

    hover:bg-[#f2b45c] hover:border-[#f2b45c]

    active:bg-[#d6932e]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#e8a33d]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#101418]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-[1rem]",
};

const base = `
  group inline-flex items-center justify-center gap-2.5
  rounded-[var(--radius-sm)]
  font-medium leading-none whitespace-nowrap
  cursor-pointer select-none
  transition-[background-color,border-color,color,box-shadow,transform]
  duration-200 ease-[var(--ease-precise)]
  hover:-translate-y-px
  disabled:cursor-not-allowed disabled:opacity-50
  disabled:hover:translate-y-0 disabled:hover:shadow-none
`;

/**
 * Seta que acompanha o botão: desliza levemente no hover do grupo.
 * Usar como último filho do botão para a microinteração padrão.
 */
export function ButtonArrow({ size = 16 }: { size?: number }) {
  return (
    <ArrowRight
      size={size}
      strokeWidth={1.75}
      aria-hidden="true"
      className="transition-transform duration-200 ease-[var(--ease-precise)] group-hover:translate-x-1"
    />
  );
}

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
