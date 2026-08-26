import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { differentials } from "@/data/differentials";

export default function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-heading" className="bg-graphite-900 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por que a Bomfim"
          title="Diferenciais que sustentam 10 anos de trabalho"
          description="Cada detalhe do atendimento foi pensado para reduzir imprevistos e entregar exatamente o que foi combinado."
          tone="light"
          id="diferenciais-heading"
        />

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-graphite-700 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.id} delay={(index % 3) * 80} className="h-full">
                <div className="h-full bg-graphite-900 p-6 transition-colors duration-200 hover:bg-graphite-800">
                  <Icon className="h-6 w-6 text-brand-500" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
