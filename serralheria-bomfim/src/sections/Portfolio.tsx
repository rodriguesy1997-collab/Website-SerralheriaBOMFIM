import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { portfolioItems } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="projetos" aria-labelledby="projetos-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos entregues"
          description="Uma amostra de trabalhos executados pela nossa equipe — de peças sob medida a estruturas industriais de grande porte."
          id="projetos-heading"
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 3) * 80}>
              <figure className="group relative h-full overflow-hidden rounded-lg border border-graphite-200">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/50 to-transparent p-4 pt-10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-400">
                    {item.category}
                  </span>
                  <p className="mt-1 font-display text-base uppercase tracking-wide text-paper">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
