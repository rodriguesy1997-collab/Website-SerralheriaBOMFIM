import { Instagram, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Quem já contratou"
          title="Avaliações de clientes"
          description="Estamos reunindo as avaliações reais dos nossos clientes. Confira fotos de projetos e comentários diretamente no nosso Instagram."
          id="depoimentos-heading"
        />

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-lg border border-graphite-200 bg-paper px-6 py-12 text-center">
            <div className="flex gap-1 text-brass-500" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-6 w-6 fill-brass-500" />
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-graphite-600 sm:text-base">
              Avaliações reais de clientes em breve nesta página. Enquanto isso, veja fotos de
              projetos entregues e comentários de clientes no nosso Instagram.
            </p>
            <Button
              href={siteConfig.social.instagram}
              variant="secondary"
              icon={<Instagram className="h-4 w-4" aria-hidden="true" />}
            >
              Ver no Instagram
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
