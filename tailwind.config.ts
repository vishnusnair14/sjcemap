import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jssorange: "rgb(277, 95, 19)",
        jssblue: "rgb(0, 64, 95)",
        jssgrey: "rgb(77, 73, 72)",
      },
    },
  },
  plugins: [],
};
export default config;
