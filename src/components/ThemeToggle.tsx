"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);

    // 1) prefer saved theme
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;

    // 2) fallback to system preference
    const systemPrefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    const initial: Theme = saved ?? (systemPrefersDark ? "dark" : "light");

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  // Prevent hydration mismatch
  if (!mounted) return null;

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
