import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Differentials from "@/sections/Differentials";
import SocialProof from "@/sections/SocialProof";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Serralheria Industrial em Belford Roxo e Baixada Fluminense",
  description:
    "Estruturas metálicas, porta-paletes, portões automatizados e cercas de segurança sob medida. Mais de 10 anos de experiência, orçamento gratuito e instalação inclusa.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Portfolio />
      <Differentials />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
