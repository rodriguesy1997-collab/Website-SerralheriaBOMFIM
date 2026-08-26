// Fonte única de verdade para dados institucionais.
// Atualize aqui telefone, endereço e redes — todo o site consome estes valores.

export const siteConfig = {
  name: "Serralheria Bomfim",
  legalName: "Serralheria Bomfim Ltda",
  cnpj: "32.183.952/0001-84",
  shortName: "Bomfim",
  tagline: "Soluções em serralheria industrial",
  description:
    "Serralheria industrial com mais de 10 anos de mercado, especializada em estruturas metálicas, porta-paletes, portões automatizados, cercas de segurança e projetos sob medida na Baixada Fluminense.",
  url: "https://www.serralheriabomfim.com.br",
  whatsappNumber: "5521965729836",
  phoneDisplay: "(21) 96572-9836",
  email: "Serralheriabomfimltda2024@gmail.com",
  address: {
    city: "Belford Roxo",
    region: "RJ",
    area: "Baixada Fluminense",
    full: "Belford Roxo e região — Baixada Fluminense, RJ",
  },
  hours: [
    { day: "Segunda a sexta", time: "08h às 18h" },
    { day: "Sábado", time: "08h às 13h" },
  ],
  social: {
    instagram: "https://www.instagram.com/serralheria_bonfim",
  },
  foundedYearsAgo: 10,
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento com a Serralheria Bomfim.";
