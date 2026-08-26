import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  service: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}
