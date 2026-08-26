import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-display uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-500 text-paper hover:bg-brand-600 active:bg-brand-700",
  secondary: "bg-graphite-900 text-paper hover:bg-graphite-800 active:bg-graphite-700",
  ghost: "bg-transparent text-graphite-900 ring-1 ring-inset ring-graphite-300 hover:bg-graphite-100",
  "outline-light": "bg-transparent text-paper ring-1 ring-inset ring-graphite-600 hover:bg-graphite-800",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
        {icon}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
