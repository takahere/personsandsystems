import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // A24 / Solarpunk Noir Palette
        "void-black": "#000000",
        "matte-metal": "#0a0a0a",
        "dark-moss": "#1a3a1a",
        "bio-glow": "#66ff99",
        "frost-glass": "#e8f4f8",
        "cinematic-black": "#000000",
        "cinematic-gray": "#1a1a1a",
        "cinematic-light": "#f5f5f5",
        "off-white": "#f5f5f5",
        "accent-blue": "#4d9fff",
        "accent-green": "#66ff99",
        // A24-style cream color for buttons
        "cream": "#F4F1E8",
        "cream-hover": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      letterSpacing: {
        "tighter-cinematic": "-0.05em",
        "widest-luxury": "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
