"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-graphite-950/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-graphite-950",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a href="#inicio" aria-label={`${siteConfig.name} — página inicial`}>
            <Logo priority />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm font-medium text-graphite-200 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:+${siteConfig.whatsappNumber}`}
              className="flex items-center gap-2 font-mono text-sm text-graphite-200 hover:text-brand-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <Button href="#contato" size="md">
              Pedir orçamento
            </Button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
