import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-graphite-800 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-brand-400 ring-1 ring-inset ring-graphite-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
