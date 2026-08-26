export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

// Fotos reais de projetos entregues pela Serralheria Bomfim.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "trailer-gourmet",
    title: "Trailer gourmet sob medida",
    category: "Projeto sob medida",
    image: "/images/portfolio/trailer-gourmet.jpg",
    alt: "Trailer gourmet de aço fabricado sob medida, com balcão e toldo",
  },
  {
    id: "mastro-metalico",
    title: "Mastro metálico ramificado sob medida",
    category: "Projeto sob medida",
    image: "/images/portfolio/mastro-metalico-sob-medida.webp",
    alt: "Estrutura de mastro metálico ramificado sendo instalada em área aeroportuária",
  },
  {
    id: "portao-correr-instalacao",
    title: "Portão de correr — instalação em obra",
    category: "Portões de correr",
    image: "/images/portfolio/portao-correr-instalacao.webp",
    alt: "Equipe instalando portão de correr de aço verde em muro de obra",
  },
  {
    id: "cerca-anti-escalada",
    title: "Cerca anti-escalada industrial",
    category: "Grades e proteção",
    image: "/images/portfolio/cerca-anti-escalada.webp",
    alt: "Cerca metálica verde com barras anti-escalada em perímetro industrial",
  },
  {
    id: "cobertura-metalica",
    title: "Cobertura metálica estrutural",
    category: "Estruturas e coberturas",
    image: "/images/portfolio/cobertura-metalica-estrutural.webp",
    alt: "Estrutura de cobertura metálica com vigas de aço em construção",
  },
  {
    id: "portao-automatizado",
    title: "Portão automatizado industrial",
    category: "Portões automáticos",
    image: "/images/portfolio/portao-automatizado-industrial.jpg",
    alt: "Portão de aço automatizado azul com concertina instalado em fachada industrial",
  },
  {
    id: "cerca-concertina",
    title: "Cerca de segurança perimetral",
    category: "Grades e proteção",
    image: "/images/portfolio/cerca-concertina-industrial.webp",
    alt: "Cerca metálica extensa com concertina para segurança perimetral industrial",
  },
  {
    id: "porta-paletes",
    title: "Instalação de porta-paletes industrial",
    category: "Estruturas metálicas",
    image: "/images/portfolio/porta-paletes-industrial.jpg",
    alt: "Fileiras de porta-paletes industrial com proteção amarela instaladas em galpão",
  },
  {
    id: "portao-correr-estampado",
    title: "Portão de correr — acabamento estampado",
    category: "Portões de correr",
    image: "/images/portfolio/portao-correr-estampado.webp",
    alt: "Portão de correr de aço com painéis estampados finalizado em muro residencial",
  },
];
