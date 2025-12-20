import type { Config } from "tailwindcss"

/**
 * ✦ NelsonDario.com Core Theme
 * Unified design system for Nelson Dario, Lumina & LUMA projects
 * Frequency: Truth · Beauty · Sovereignty
 */

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    "text-gold",
    "text-softwhite",
    "bg-midnight",
    "hover:text-gold",
    "animate-pulseGlow",
    "aura-gold",
    "aura-soft",
    "luma-bg",
    "footer-wave",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },

    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      /* ✦ Color System — now RGBA-based for opacity support */
      colors: {
        gold: "rgb(242 184 101 / <alpha-value>)",
        midnight: "rgb(10 10 15 / <alpha-value>)",
        softwhite: "rgb(245 245 245 / <alpha-value>)",
        base: "var(--bg-base)",
        text: "var(--text-base)",
        brand: {
          light: "rgb(248 229 181 / <alpha-value>)",
          DEFAULT: "rgb(242 184 101 / <alpha-value>)",
          dark: "rgb(199 151 74 / <alpha-value>)",
        },
        surface: {
          light: "rgb(26 26 34 / <alpha-value>)",
          DEFAULT: "rgb(10 10 15 / <alpha-value>)",
          deep: "rgb(7 7 10 / <alpha-value>)",
        },
      },

      /* ✦ Fonts */
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Lato", "sans-serif"],
      },

      /* ✦ Font Sizes */
      fontSize: {
        base: ["1rem", "1.75rem"],
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.5rem", "2.5rem"],
        "3xl": ["2rem", "3rem"],
        "4xl": ["2.5rem", "3.5rem"],
        "5xl": ["3rem", "4rem"],
        "6xl": ["3.5rem", "4.5rem"],
      },

      /* ✦ Layout */
      spacing: {
        section: "6rem",
      },

      /* ✦ Shadows & Glow Effects */
      boxShadow: {
        glow: "0 0 10px rgba(242, 184, 101, 0.4)",
        "glow-strong": "0 0 20px rgba(242, 184, 101, 0.6)",
        "glow-soft": "0 0 25px rgba(255, 255, 255, 0.15)",
      },

      textShadow: {
        glow: "0 0 10px rgba(242, 184, 101, 0.6)",
      },

      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
      },

      opacity: {
        15: "0.15",
        35: "0.35",
      },

      /* ✦ Animations */
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 10px rgba(242,184,101,0.4)",
          },
          "50%": {
            opacity: "0.85",
            boxShadow: "0 0 20px rgba(242,184,101,0.6)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pageFade: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        auricWave: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.2" },
          "50%": { transform: "scale(1.2)", opacity: "0.4" },
        },
        shimmerFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        floatSlow: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1.2s ease-out forwards",
        pageFade: "pageFade 0.8s ease-in-out forwards",
        auricWave: "auricWave 14s ease-in-out infinite",
        shimmerFlow: "shimmerFlow 20s ease-in-out infinite",
      },

      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #f2b865 0%, #ffdd9a 50%, #f2b865 100%)",
        "auric-gradient":
          "radial-gradient(circle at 50% -10%, rgba(242,184,101,0.1), rgba(10,10,15,1) 70%)",
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

export default config
