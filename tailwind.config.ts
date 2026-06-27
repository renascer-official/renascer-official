import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4fb",
          100: "#d8e6f4",
          500: "#1b3d67",
          700: "#0A214D",
          900: "#041B45",
          950: "#031736"
        },
        silver: "#9aa4b2",
        ink: "#101827"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 31, 63, 0.10)"
      }
    },
  },
  plugins: [],
};

export default config;
