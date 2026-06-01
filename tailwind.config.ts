import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ross: {
          50: "#f0f5fa",
          100: "#dbe6f3",
          200: "#b8cfe8",
          300: "#85afd6",
          400: "#4e8bc0",
          500: "#1e6dbb",
          600: "#1a5a9d",
          700: "#1a3558",
          800: "#142a45",
          900: "#0f1f33",
          950: "#0a1523",
        },
        copper: {
          50: "#fdf6f0",
          100: "#f9e8d6",
          200: "#f2cdab",
          300: "#e8ab76",
          400: "#d4895a",
          500: "#c47a4a",
          600: "#a8613a",
          700: "#8a4c32",
          800: "#713e2d",
          900: "#5e3527",
        },
        cream: {
          50: "#fdfcfa",
          100: "#f8f4ee",
          200: "#f4efe8",
          300: "#ece4d8",
          400: "#ddd2c2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-up-delay-1": "fadeUp 0.8s ease-out 0.15s forwards",
        "fade-up-delay-2": "fadeUp 0.8s ease-out 0.3s forwards",
        "fade-up-delay-3": "fadeUp 0.8s ease-out 0.45s forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "color-bend": "colorBend 20s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196,122,74,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(196,122,74,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        colorBend: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
