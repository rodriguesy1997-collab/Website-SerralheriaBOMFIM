import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  priority?: boolean;
}

/**
 * Monograma oficial da Serralheria Bomfim sobre uma plaqueta clara.
 * A plaqueta garante contraste da metade escura do símbolo sobre fundos escuros.
 */
export default function Logo({ className, showWordmark = true, priority = false }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-paper p-1.5 sm:h-11 sm:w-11">
        <Image
          src="/images/brand/monogram.png"
          alt="Serralheria Bomfim"
          width={64}
          height={64}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </span>
      {showWordmark ? (
        <span className="font-display text-lg uppercase leading-none tracking-wide text-paper sm:text-xl">
          Serralheria
          <span className="block text-xs font-normal normal-case tracking-normal text-graphite-400">
            Bomfim
          </span>
        </span>
      ) : null}
    </span>
  );
}
