import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 text-graphite-300">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <a href="#inicio" aria-label={`${siteConfig.name} — página inicial`}>
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-graphite-400">{siteConfig.description}</p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil da Serralheria Bomfim no Instagram"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-graphite-800 text-graphite-200 transition-colors hover:bg-brand-500 hover:text-paper"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="font-display text-sm uppercase tracking-wider text-paper">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-graphite-400 transition-colors hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços">
            <h3 className="font-display text-sm uppercase tracking-wider text-paper">Serviços</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href={`#servicos`}
                    className="text-sm text-graphite-400 transition-colors hover:text-brand-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-paper">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-graphite-400">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <a href={`tel:+${siteConfig.whatsappNumber}`} className="hover:text-brand-400">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-400">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-graphite-800 pt-8 text-xs text-graphite-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>
            CNPJ: {siteConfig.cnpj} · {siteConfig.address.city}, {siteConfig.address.region}
          </p>
        </div>
      </Container>
    </footer>
  );
}
