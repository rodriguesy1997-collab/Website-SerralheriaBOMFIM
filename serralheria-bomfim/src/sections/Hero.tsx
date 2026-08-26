import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { buildWhatsAppLink, defaultWhatsAppMessage, siteConfig } from "@/data/site";
import { stats } from "@/data/stats";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-graphite-950">
      {/* Foto real de projeto entregue, com sobreposição escura para legibilidade */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/portfolio/estrutura-industrial-galpao.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/90 to-graphite-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/40" />
      </div>

      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-brand-600/20 blur-[100px] sm:h-96 sm:w-96"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-32">
          <div className="lg:col-span-7">
            <Badge>
              <span className="h-1.5 w-1.5 animate-spark rounded-full bg-brand-500" />
              Há {siteConfig.foundedYearsAgo} anos em {siteConfig.address.area}
            </Badge>

            <h1 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Soluções em
              <span className="block text-brand-500">serralheria industrial</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite-300 sm:text-lg">
              Estruturas metálicas, porta-paletes, portões automatizados e cercas de segurança sob
              medida. Projeto, fabricação e instalação com equipe própria, do primeiro corte até a
              última solda.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={buildWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" size="lg" icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}>
                Solicitar orçamento
              </Button>
              <Button
                href="#servicos"
                variant="outline-light"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              >
                Ver serviços
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-lg border border-graphite-800 bg-graphite-900/60 p-5 backdrop-blur-sm"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-graphite-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-brand-500 sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {/* Corte diagonal de transição — elemento assinatura */}
      <div
        aria-hidden="true"
        className="h-10 w-full bg-paper"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
