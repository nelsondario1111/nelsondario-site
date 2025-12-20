"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

/**
 * ThemeListener
 * - Applies stored theme on mount (or system preference if none)
 * - Listens for OS theme changes IF user has not explicitly chosen a theme
 */
export function ThemeListener() {
  useEffect(() => {
    const root = document.documentElement;

    const apply = (t: Theme) => {
      root.classList.toggle("dark", t === "dark");
    };

    const getStored = (): Theme | null => {
      const v = localStorage.getItem("theme");
      return v === "dark" || v === "light" ? v : null;
    };

    const getSystem = (): Theme => {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
      return prefersDark ? "dark" : "light";
    };

    // Initial apply
    const stored = getStored();
    apply(stored ?? getSystem());

    // Listen to system changes only if user didn't explicitly set a theme
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const onChange = () => {
      const storedNow = getStored();
      if (!storedNow) apply(getSystem());
    };

    // Safari compatibility
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // @ts-expect-error older Safari
      mql.addListener(onChange);
      // @ts-expect-error older Safari
      return () => mql.removeListener(onChange);
    }
  }, []);

  return null;
}

export default ThemeListener;
