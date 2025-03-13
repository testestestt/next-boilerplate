import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
      },
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '993px',
      'xl': '1200px',
      '2xl': '1600px',
    }
  },
  plugins: [],
} satisfies Config;
