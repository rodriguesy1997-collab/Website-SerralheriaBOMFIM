import { Award, Clock3, HandCoins, ShieldCheck } from "lucide-react";
import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    id: "experiencia",
    title: "Mais de 10 anos de estrada",
    description:
      "Uma década atendendo residências, condomínios e empresas com seriedade e compromisso em cada projeto entregue.",
    icon: Award,
  },
  {
    id: "orcamento",
    title: "Orçamento sem compromisso",
    description:
      "Visita técnica e orçamento detalhado antes de iniciar qualquer serviço, sem letras miúdas e sem surpresas.",
    icon: HandCoins,
  },
  {
    id: "prazo",
    title: "Prazo combinado, prazo cumprido",
    description:
      "Planejamento de produção realista para entregar exatamente o que foi combinado, dentro do prazo definido.",
    icon: Clock3,
  },
  {
    id: "garantia",
    title: "Garantia em todo serviço",
    description:
      "Material de qualidade e mão de obra especializada, com garantia formal sobre estrutura e instalação.",
    icon: ShieldCheck,
  },
];
