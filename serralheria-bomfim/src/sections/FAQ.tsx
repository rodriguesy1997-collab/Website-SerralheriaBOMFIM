import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-heading" className="bg-paper py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que mais recebemos"
          id="duvidas-heading"
        />

        <div className="mt-10 divide-y divide-graphite-200 rounded-lg border border-graphite-200 bg-white">
          {faqItems.map((item) => (
            <details key={item.id} className="group px-5 py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base uppercase tracking-wide text-graphite-900 marker:content-none">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-graphite-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
