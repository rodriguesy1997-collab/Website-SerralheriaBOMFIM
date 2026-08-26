import { cn } from "@/lib/utils";

interface HazardRuleProps {
  className?: string;
}

/**
 * Friso diagonal inspirado em fita de segurança de oficina.
 * Elemento de assinatura visual da marca — usar com moderação (1–2 vezes por página).
 */
export default function HazardRule({ className }: HazardRuleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-1.5 w-16 rounded-full bg-[repeating-linear-gradient(45deg,theme(colors.brand.500)_0,theme(colors.brand.500)_6px,theme(colors.graphite.900)_6px,theme(colors.graphite.900)_12px)]",
        className,
      )}
    />
  );
}
