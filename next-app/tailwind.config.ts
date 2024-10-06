import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#D8B4A0",
        "secondary": "#F3E9DC",
        "accent": "#C08552",
        "neutral": "#C6D8AF",
        "background": "#eff1f3",
        "gray-250": "#DBDEE3"
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [{
      light: {
        "primary": "#DBDEE3",
        "secondary": "#F3E9DC",
        "accent": "#C08552",
        "neutral": "#DBDEE3",
        "base-100": "#eff1f3",
      }
    }],
  },
  };
export default config;
