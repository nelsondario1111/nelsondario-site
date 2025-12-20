"use client";

/* ───────────────────────────────
   ✦ LUMA Standard: ThemeListener v1.0 ✦
   Authors: Nelson Dario & Lumina
   Function: Harmonizes visual + auditory polarity transitions.
   ☉ 432 Hz  — Solar / Root — Grounding, Clarity
   ☾ 528 Hz  — Lunar / Heart — Healing, Expansion
   ─────────────────────────────── */

import React, { useEffect, createContext, useContext, useState } from "react";

// ✧ Context Bridge — allow any component to access the theme
export const ThemeContext = createContext<"light" | "dark">("light");
export const useTheme = () => useContext(ThemeContext);

let sharedCtx: AudioContext | null = null;
let hasUserInteracted = false;
if (typeof window !== "undefined") {
  window.addEventListener("pointerdown", () => (hasUserInteracted = true));
}

/** ✧ Utility — safely get or create an AudioContext */
function getCtx(): AudioContext {
  if (!sharedCtx || sharedCtx.state === "closed") {
    sharedCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return sharedCtx;
}

/** ✧ Smooth Tone Emitter */
function playThemeTone(newTheme: "light" | "dark") {
  if (!hasUserInteracted) return; // respect autoplay restriction
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const prefersReducedTransparency = window.matchMedia("(prefers-reduced-transparency: reduce)").matches;
  if (prefersReducedMotion || prefersReducedTransparency) return;

  const ctx = getCtx();
  const gain = ctx.createGain();
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const panner = ctx.createStereoPanner();

  const baseFreq = newTheme === "dark" ? 528 : 432;
  const overtone = newTheme === "dark" ? 396 : 639;

  // primary tone
  osc1.type = "sine";
  osc1.frequency.value = baseFreq;

  // overtone for harmonic warmth
  osc2.type = "sine";
  osc2.frequency.value = overtone;

  // gentle fade envelope
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

  panner.pan.value = newTheme === "dark" ? -0.2 : 0.2;

  osc1.connect(panner);
  osc2.connect(panner);
  panner.connect(gain);
  gain.connect(ctx.destination);

  // timed start/stop
  osc1.start();
  osc2.start();
  osc1.stop(ctx.currentTime + 0.8);
  osc2.stop(ctx.currentTime + 0.8);

  if (navigator.vibrate) navigator.vibrate(40);

  // optional console log for dev builds
  if (process.env.NODE_ENV !== "production") {
    console.info(`[ThemeListener] ${newTheme.toUpperCase()} • ${baseFreq}Hz + ${overtone}Hz`);
  }
}

/** ✦ Root provider component */
export function ThemeListener({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  /* Load stored/system preference on mount */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const active = (stored as "light" | "dark") || (sysDark ? "dark" : "light");
      setTheme(active);
      applyTheme(active);
      requestAnimationFrame(() => document.documentElement.classList.add("loaded"));
    } catch (e) {
      console.warn("[ThemeListener] Unable to initialize theme:", e);
    }
  }, []);

  /* React to global themechange event (from ThemeToggle or system) */
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const newTheme = e.detail as "light" | "dark";
      setTheme(newTheme);
      playThemeTone(newTheme);
      updateFavicon(newTheme);
    };
    window.addEventListener("themechange", handler as EventListener);
    return () => window.removeEventListener("themechange", handler as EventListener);
  }, []);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

/** ✦ Internal helper — apply theme instantly */
function applyTheme(newTheme: "light" | "dark") {
  document.documentElement.dataset.theme = newTheme;
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
  window.dispatchEvent(new CustomEvent("themechange", { detail: newTheme }));
  // GPU smooth transitions
  document.body.style.transform = "translateZ(0)";
}

/** ✦ Sync favicon to polarity */
function updateFavicon(theme: "light" | "dark") {
  const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
  if (!favicon) return;
  favicon.href = theme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
}

/* ✦ End of ThemeListener — Harmonized with LUMA Standard v1.0 ✦ */
