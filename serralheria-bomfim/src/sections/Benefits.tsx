import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { benefits } from "@/data/benefits";

export default function Benefits() {
  return (
    <section aria-labelledby="beneficios-heading" className="bg-paper py-16 sm:py-20">
      <Container>
        <h2 id="beneficios-heading" className="sr-only">
          Benefícios de contratar a Serralheria Bomfim
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal as="li" key={benefit.id} delay={index * 80}>
                <div className="h-full rounded-lg border border-graphite-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-500/10">
                    <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-graphite-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
