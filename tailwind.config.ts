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
          500: "#17406f",
          700: "#082b50",
          900: "#001f3f",
          950: "#03152a"
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
