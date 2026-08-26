import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/site";

export default function SocialProof() {
  return (
    <section aria-labelledby="prova-social-heading" className="border-y border-graphite-200 bg-paper py-14 sm:py-16">
      <Container>
        <h2 id="prova-social-heading" className="sr-only">
          Números da Serralheria Bomfim
        </h2>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <dl className="grid w-full grid-cols-2 gap-8 lg:w-auto lg:grid-cols-4 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center lg:text-left">
                <dd className="font-display text-3xl text-graphite-900 sm:text-4xl">{stat.value}</dd>
                <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-graphite-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-3 rounded-lg border border-graphite-200 bg-white px-5 py-4 transition-colors hover:border-brand-500/40 hover:shadow-md"
          >
            <Instagram className="h-6 w-6 text-brand-600" aria-hidden="true" />
            <span>
              <span className="block font-display text-sm uppercase tracking-wide text-graphite-900">
                @serralheria_bonfim
              </span>
              <span className="block text-xs text-graphite-500">Veja projetos entregues no Instagram</span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
