import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'asal-yellow': '#FED109', // Pantone 109 C
        'asal-black': '#000000',
        'asal-gold': '#D9A95B',
        'asal-rosy': '#FF5277',
        'asal-turquoise': '#4AC3D6',
        'asal-gray': '#C5CDD1',
        primary: '#FED109',
        accent: '#FED109',
      },
      fontFamily: {
        // ASAL Brand Typography
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'helvetica-light': ['Helvetica Neue LT Std Light', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'din-arabic': ['DIN Next Arabic', 'Arial', 'sans-serif'],
        'abdo-master': ['Abdo Master SemiBold', 'Arial', 'sans-serif'],
        accent: ['Abdo Master SemiBold', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      animation: {
        'spin-slow': 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
