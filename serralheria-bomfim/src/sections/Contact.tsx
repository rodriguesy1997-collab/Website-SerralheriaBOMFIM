"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]?.title ?? "");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Olá! Vim pelo site da Serralheria Bomfim e gostaria de um orçamento.",
      `Nome: ${name || "Não informado"}`,
      `Serviço de interesse: ${service}`,
      message ? `Detalhes: ${message}` : null,
    ].filter(Boolean);

    const link = buildWhatsAppLink(lines.join("\n"));
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" aria-labelledby="contato-heading" className="bg-graphite-900 py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Fale com a gente"
              title="Solicite seu orçamento"
              description="Preencha os dados abaixo e conclua o pedido diretamente pelo WhatsApp — resposta rápida, sem espera em fila de atendimento."
              tone="light"
              id="contato-heading"
            />

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-graphite-400">Telefone</dt>
                  <dd className="text-sm text-paper">{siteConfig.phoneDisplay}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-graphite-400">E-mail</dt>
                  <dd className="text-sm text-paper">{siteConfig.email}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-graphite-400">
                    Área de atendimento
                  </dt>
                  <dd className="text-sm text-paper">{siteConfig.address.full}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-graphite-400">
                    Horário de atendimento
                  </dt>
                  <dd className="space-y-0.5 text-sm text-paper">
                    {siteConfig.hours.map((entry) => (
                      <p key={entry.day}>
                        {entry.day}: {entry.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-graphite-700 bg-graphite-800 p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-graphite-200">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-md border border-graphite-600 bg-graphite-900 px-4 py-2.5 text-sm text-paper placeholder:text-graphite-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-graphite-200">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="w-full rounded-md border border-graphite-600 bg-graphite-900 px-4 py-2.5 text-sm text-paper focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                >
                  {services.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                  <option value="Outro / não sei ainda">Outro / não sei ainda</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-graphite-200">
                  Conte um pouco sobre o projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Medidas aproximadas, prazo desejado, endereço para visita..."
                  className="w-full resize-none rounded-md border border-graphite-600 bg-graphite-900 px-4 py-2.5 text-sm text-paper placeholder:text-graphite-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}>
                Enviar pelo WhatsApp
              </Button>
              <p className="text-center text-xs text-graphite-500">
                Ao enviar, o WhatsApp abrirá com sua mensagem pronta para envio.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
