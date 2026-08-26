import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços em serralheria completa"
          description="Do desenho técnico à instalação final, atendemos projetos residenciais, comerciais e industriais com material de qualidade e prazo definido."
          id="servicos-heading"
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal as="li" key={service.id} delay={(index % 3) * 80}>
                <div className="group h-full rounded-lg border border-graphite-200 p-6 transition-all duration-200 hover:border-brand-500/40 hover:shadow-lg hover:shadow-graphite-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-graphite-900 transition-colors duration-200 group-hover:bg-brand-500">
                    <Icon className="h-6 w-6 text-paper" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-graphite-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-graphite-500">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
