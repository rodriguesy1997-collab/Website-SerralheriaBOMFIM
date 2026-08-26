import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-graphite-950 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(45deg,theme(colors.brand.500)_0,theme(colors.brand.500)_14px,theme(colors.graphite.900)_14px,theme(colors.graphite.900)_28px)]"
      />
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 id="cta-heading" className="max-w-2xl font-display text-3xl uppercase leading-tight tracking-tight text-paper sm:text-4xl">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="max-w-xl text-base text-graphite-300 sm:text-lg">
            Fale agora com a nossa equipe e receba um orçamento sem compromisso para portões, grades,
            estruturas e projetos sob medida.
          </p>
          <Button
            href={buildWhatsAppLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
          >
            Chamar no WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
