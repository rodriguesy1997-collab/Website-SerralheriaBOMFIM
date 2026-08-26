import { ClipboardCheck, MapPinned, MessageCircle, PaintBucket, Truck, Users } from "lucide-react";
import type { Differential } from "@/types";

export const differentials: Differential[] = [
  {
    id: "visita-tecnica",
    title: "Visita técnica gratuita",
    description: "Nossa equipe vai até o local para medir, entender o espaço e sugerir a melhor solução.",
    icon: MapPinned,
  },
  {
    id: "projeto-exclusivo",
    title: "Projeto sob medida",
    description: "Nenhum projeto é padrão. Cada peça é desenhada para o espaço e o estilo do cliente.",
    icon: ClipboardCheck,
  },
  {
    id: "acabamento",
    title: "Pintura eletrostática",
    description: "Acabamento resistente a ferrugem e intempéries, com durabilidade muito superior à pintura comum.",
    icon: PaintBucket,
  },
  {
    id: "equipe",
    title: "Equipe própria e especializada",
    description: "Serralheiros e instaladores próprios, sem terceirização — o mesmo padrão do início ao fim.",
    icon: Users,
  },
  {
    id: "entrega",
    title: "Instalação inclusa",
    description: "O serviço só termina quando a peça está instalada, testada e funcionando no local.",
    icon: Truck,
  },
  {
    id: "atendimento",
    title: "Atendimento direto pelo WhatsApp",
    description: "Fale direto com quem vai atender seu projeto, sem central de atendimento ou robôs.",
    icon: MessageCircle,
  },
];
