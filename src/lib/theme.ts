// /lib/theme.ts
export type Theme = "light" | "dark";

export function applyThemeToDocument(newTheme: Theme) {
  document.documentElement.setAttribute("data-theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  document.documentElement.style.colorScheme = newTheme;

  try {
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("theme_last_switch", new Date().toISOString());
  } catch {
    // ignore storage issues (private mode, etc.)
  }

  window.dispatchEvent(new CustomEvent("themechange", { detail: newTheme }));

  // optional: keep the auric pulse here so all theme changes feel the same
  document.body.classList.add("theme-pulse");
  setTimeout(() => document.body.classList.remove("theme-pulse"), 1200);
}
