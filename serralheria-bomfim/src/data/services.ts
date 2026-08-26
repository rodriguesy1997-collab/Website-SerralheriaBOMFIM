import {
  Warehouse,
  DoorOpen,
  ShieldAlert,
  Building2,
  Ruler,
  Milestone,
  Flame,
  Wrench,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "porta-paletes",
    title: "Porta-paletes e armazenagem industrial",
    description:
      "Estruturas porta-paletes para galpões e centros de distribuição, com projeto conforme o layout e a carga do cliente.",
    icon: Warehouse,
    highlights: ["Dimensionamento por carga", "Proteções de coluna incluídas", "Instalação por equipe própria"],
  },
  {
    id: "portoes",
    title: "Portões automatizados e de correr",
    description:
      "Portões de aço para acessos industriais, comerciais e residenciais, com ou sem automação.",
    icon: DoorOpen,
    highlights: ["Correr, basculante ou de giro", "Automação compatível", "Pintura eletrostática"],
  },
  {
    id: "cercas-seguranca",
    title: "Cercas e proteções perimetrais",
    description:
      "Cercas de segurança com concertina, anti-escalada ou tela soldada para delimitar e proteger o perímetro.",
    icon: ShieldAlert,
    highlights: ["Concertina ou anti-escalada", "Projeto para grandes extensões", "Padrão industrial"],
  },
  {
    id: "estruturas-coberturas",
    title: "Estruturas e coberturas metálicas",
    description:
      "Coberturas e estruturas em aço para galpões, garagens e áreas externas, com cálculo estrutural próprio.",
    icon: Building2,
    highlights: ["Cálculo estrutural incluso", "Telha metálica ou policarbonato", "Vãos livres maiores"],
  },
  {
    id: "projetos-sob-medida",
    title: "Projetos sob medida",
    description:
      "Peças e estruturas exclusivas — de mastros a suportes especiais — do desenho técnico à instalação final.",
    icon: Ruler,
    highlights: ["Desenho técnico incluso", "Peças exclusivas", "Acompanhamento até a entrega"],
  },
  {
    id: "grades-corrimaos",
    title: "Grades, corrimãos e guarda-corpos",
    description:
      "Grades de proteção, corrimãos e guarda-corpos em aço carbono ou inox para uso residencial e comercial.",
    icon: Milestone,
    highlights: ["Inox ou aço carbono", "Modelos decorativos", "Medição no local"],
  },
  {
    id: "portas-aco",
    title: "Portas de aço e corta-fogo",
    description:
      "Portas reforçadas para uso residencial, comercial e industrial, incluindo modelos corta-fogo certificados.",
    icon: Flame,
    highlights: ["Reforço de segurança", "Modelos corta-fogo", "Fechaduras multiponto"],
  },
  {
    id: "manutencao",
    title: "Manutenção e reforma industrial",
    description:
      "Recuperação de estruturas metálicas com tratamento antiferrugem, solda de reforço e repintura.",
    icon: Wrench,
    highlights: ["Tratamento antiferrugem", "Troca de dobradiças e trilhos", "Repintura"],
  },
];
