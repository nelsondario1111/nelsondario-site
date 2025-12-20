"use client";

import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { PageTransition } from "@/components/PageTransition";

export function ClientRootShell({ children }: { children: React.ReactNode }) {
  // ✦ Subtle breathing loop (energetic pulse)
  useEffect(() => {
    const loop = setInterval(() => {
      document.body.classList.toggle("theme-shimmer-breath");
      setTimeout(
        () => document.body.classList.remove("theme-shimmer-breath"),
        1500
      );
    }, 10000);
    return () => clearInterval(loop);
  }, []);

  return (
    <>
      {/* ✦ Accessibility: skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3
                   focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full
                   focus:bg-[var(--color-midnight)] focus:text-[var(--color-softwhite)]
                   focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* ✦ Persistent Navbar with reserved height to avoid layout shift */}
      <header className="sticky top-0 z-50 h-20 md:h-24">
        <NavBar />
      </header>

      {/* ✦ Cross-page transition wrapper ✦ */}
      <PageTransition>
        <div className="frequency-bar" />
        <main id="main" className="flex-1 page-fade">
          {children}
        </main>

        <Footer />
      </PageTransition>

      {/* ✦ UI Enhancements ✦ */}
      <ScrollTopButton />

      {/* ✦ Ambient shimmer & theme curtain ✦ */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10
          bg-[radial-gradient(circle_at_50%_0%,rgba(var(--gold-rgb),0.08),transparent_80%)]
          opacity-30 sm:opacity-40 blur-3xl transition-opacity duration-700"
      />
      <div
        id="theme-curtain"
        aria-hidden="true"
        className="fixed inset-0 z-[80] pointer-events-none opacity-0
                   transition-opacity duration-700
                   bg-[radial-gradient(circle_at_center,rgba(var(--gold-rgb),0.15),transparent_70%)]
                   backdrop-blur-sm"
      />
    </>
  );
}
