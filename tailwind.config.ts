import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // Enable dark mode based on user's system preference
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Use CSS variables for background
        foreground: "var(--foreground)",  // Use CSS variables for foreground
      },
    },
  },
  plugins: [],
};
export default config;
