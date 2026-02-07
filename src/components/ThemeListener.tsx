"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";
type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
};

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
    apply(getStored() ?? getSystem());

    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const onChange = () => {
      // Only follow system theme if user hasn't explicitly set one
      if (!getStored()) apply(getSystem());
    };

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // Legacy Safari fallback
    const legacyMql = mql as LegacyMediaQueryList;
    legacyMql.addListener?.(onChange);
    return () => legacyMql.removeListener?.(onChange);
  }, []);

  return null;
}

export default ThemeListener;
