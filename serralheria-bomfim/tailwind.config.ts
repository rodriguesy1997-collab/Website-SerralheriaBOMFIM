import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        // Grafite — base neutra, inspirada em aço oxidado/chapa escura (não é preto puro)
        graphite: {
          950: "#101214",
          900: "#17191B",
          800: "#202327",
          700: "#2A2E32",
          600: "#3A3F45",
          500: "#565C63",
          400: "#7A8087",
          300: "#A4A9AE",
          200: "#CBCED1",
          100: "#E7E8EA",
        },
        // Brand — verde extraído da logo oficial da Serralheria Bonfim
        brand: {
          400: "#4C9A5C",
          500: "#1E6B2C",
          600: "#175423",
          700: "#0E3B17",
        },
        // Brass — amarelo latão, uso pontual restrito a avaliações (estrelas)
        brass: {
          400: "#DFC15B",
          500: "#C9A227",
          600: "#A9860F",
        },
        paper: "#F5F4F0",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spark": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        spark: "spark 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
