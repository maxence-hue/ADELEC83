import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1267A6",
          foreground: "#F4F7FB"
        },
        background: "#F6F6F6",
        slate: {
          950: "#0F172A"
        }
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(18, 103, 166, 0.5)"
      }
    }
  },
  plugins: [typography]
};

export default config;
