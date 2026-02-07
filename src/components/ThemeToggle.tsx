"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-4 right-4 z-50 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-sm shadow-md backdrop-blur hover:bg-white
                 dark:border-white/15 dark:bg-black/50 dark:text-white dark:hover:bg-black/60"
    >
      {theme === "dark" ? "☾" : "☀︎"}
    </button>
  );
}

export default ThemeToggle;
