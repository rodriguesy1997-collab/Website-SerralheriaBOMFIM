import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp com a Serralheria Bomfim"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-graphite-900 px-3 py-1.5 font-body text-sm text-paper opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
