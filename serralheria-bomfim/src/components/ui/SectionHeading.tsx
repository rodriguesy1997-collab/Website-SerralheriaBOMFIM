import { cn } from "@/lib/utils";
import HazardRule from "@/components/ui/HazardRule";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-2xl", isCenter && "mx-auto text-center")}>
      <p
        className={cn(
          "font-mono text-xs font-semibold uppercase tracking-[0.2em]",
          isLight ? "text-brand-400" : "text-brand-600",
        )}
      >
        {eyebrow}
      </p>
      <HazardRule className={cn("mt-3", isCenter && "mx-auto")} />
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          isLight ? "text-paper" : "text-graphite-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            isLight ? "text-graphite-200" : "text-graphite-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
