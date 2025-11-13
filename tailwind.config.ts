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
        // Paleta SafeJourney baseada na imagem
        primary: {
          DEFAULT: '#4A6FA5', // Azul principal
          light: '#6B8DC4',
          dark: '#2E4A6F',
        },
        secondary: {
          DEFAULT: '#78B892', // Verde
          light: '#9BCFAB',
          dark: '#5A9973',
        },
        accent: {
          DEFAULT: '#C5A572', // Dourado
          light: '#D4B98F',
          dark: '#A68755',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
