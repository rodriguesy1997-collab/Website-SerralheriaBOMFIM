"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-md text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-graphite-950/70 transition-opacity duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col bg-graphite-900 shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-graphite-700 px-5">
          <span className="font-display text-lg uppercase tracking-wide text-paper">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu de navegação"
            className="flex h-10 w-10 items-center justify-center rounded-md text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navegação mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 font-display text-lg uppercase tracking-wide text-graphite-100 transition-colors hover:bg-graphite-800 hover:text-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-graphite-700 px-5 py-6">
          <a
            href={`tel:+${siteConfig.whatsappNumber}`}
            className="mb-4 flex items-center gap-2 font-mono text-sm text-graphite-300"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <Button href="#contato" onClick={() => setIsOpen(false)} className="w-full">
            Pedir orçamento
          </Button>
        </div>
      </div>
    </div>
  );
}
