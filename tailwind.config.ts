import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

/**
 * ✦ NelsonDario.com Core Theme
 * Unified design system for Nelson Dario projects
 * Frequency: Truth · Beauty · Sovereignty
 * GOLD: Single Source of Truth = #E2A93F (via CSS vars)
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
      /**
       * ✦ Color System
       * Single-gold is controlled by CSS variables in globals.css:
       *   --color-gold: #E2A93F
       *   --gold-rgb: 226, 169, 63
       *
       * Tailwind colors reference vars so nothing drifts.
       */
      colors: {
        gold: "rgb(var(--gold-rgb) / <alpha-value>)",
        midnight: "rgb(10 10 15 / <alpha-value>)",
        softwhite: "rgb(245 245 245 / <alpha-value>)",

        /* App tokens from globals */
        base: "var(--bg-base)",
        card: "var(--card-bg)",
        text: "var(--text-base)",
        muted: "var(--text-muted)",

        /**
         * Brand hierarchy — SAME GOLD, different intensity.
         * Use these when you want “light / DEFAULT / strong” behavior
         * without introducing a new hue.
         */
        brand: {
          light: "rgb(var(--gold-rgb) / 0.65)",
          DEFAULT: "rgb(var(--gold-rgb) / <alpha-value>)",
          strong: "rgb(var(--gold-rgb) / 0.95)",
        },

        /**
         * Surfaces (these are neutral foundations)
         * Keep these stable and let globals.css manage bg/text in dark mode.
         */
        surface: {
          light: "rgb(26 26 34 / <alpha-value>)",
          DEFAULT: "rgb(10 10 15 / <alpha-value>)",
          deep: "rgb(7 7 10 / <alpha-value>)",
        },
      },

      /* ✦ Fonts */
      fontFamily: {
        heading: ["var(--font-heading)", "Sora", "sans-serif"],
        sans: ["var(--font-sans)", "Source Sans 3", "sans-serif"],
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

      /* ✦ Shadows & Glow Effects — now tied to var-driven gold */
      boxShadow: {
        glow: "0 0 10px rgba(var(--gold-rgb), 0.40)",
        "glow-strong": "0 0 20px rgba(var(--gold-rgb), 0.60)",
        "glow-soft": "0 0 25px rgba(255, 255, 255, 0.15)",
      },

      /**
       * NOTE: Tailwind doesn't ship textShadow core utility by default.
       * If you have a plugin enabling it, this stays useful.
       * Otherwise, ignore or replace with drop-shadow utilities.
       */
      textShadow: {
        glow: "0 0 10px rgba(var(--gold-rgb), 0.60)",
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

      /* ✦ Animations — gold now references vars */
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 10px rgba(var(--gold-rgb), 0.40)",
          },
          "50%": {
            opacity: "0.85",
            boxShadow: "0 0 20px rgba(var(--gold-rgb), 0.60)",
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
        scrollPulse: {
          "0%, 100%": { opacity: "1", filter: "saturate(1)" },
          "50%": { opacity: "0.72", filter: "saturate(1.1)" },
        },
      },

      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        floatSlow: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1.2s ease-out forwards",
        pageFade: "pageFade 0.8s ease-in-out forwards",
        auricWave: "auricWave 14s ease-in-out infinite",
        shimmerFlow: "shimmerFlow 20s ease-in-out infinite",
        scrollPulse: "scrollPulse 1.4s ease-in-out infinite",
      },

      /**
       * Background images — keep them gold-true.
       * IMPORTANT: Tailwind can’t read CSS vars inside gradients on every browser
       * perfectly, but this approach is stable.
       */
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, rgba(var(--gold-rgb),0.95) 0%, rgba(var(--gold-rgb),0.45) 50%, rgba(var(--gold-rgb),0.95) 100%)",
        "auric-gradient":
          "radial-gradient(circle at 50% -10%, rgba(var(--gold-rgb),0.10), rgba(10,10,15,1) 70%)",
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },

  plugins: [typography, forms, aspectRatio],
};

export default config;
