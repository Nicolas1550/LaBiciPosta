import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Escanea todos los archivos dentro de src
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Escanea la carpeta pages si está presente
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Escanea componentes en la carpeta components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Escanea archivos en la carpeta app (Next.js)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Colores personalizados usando variables CSS
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
