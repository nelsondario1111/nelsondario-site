"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ✦ Reveal & Veil System
 * Handles:
 *  - Intersection-based section reveal
 *  - Page transition veil
 *  - Optional theme pulse
 */

export default function RevealAndVeilHandler() {
  const pathname = usePathname();

  useEffect(() => {
    /* ───────────────────────────────
       1. Reveal-on-scroll animation
       ─────────────────────────────── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    /* ───────────────────────────────
       2. Page transition veil
       ─────────────────────────────── */
    const veil = document.getElementById("veil");
    if (!veil) return;

    // Fade-in effect on page load
    document.body.classList.add("loading");
    const showTimer = setTimeout(() => {
      document.body.classList.remove("loading");
    }, 600);

    // Fade-out effect before navigation (soft)
    const links = document.querySelectorAll("a[href^='/']");
    const handleLinkClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("href")?.startsWith("#")
      )
        return;

      e.preventDefault();
      document.body.classList.add("loading");
      setTimeout(() => {
        window.location.href = anchor.href;
      }, 400);
    };

    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      clearTimeout(showTimer);
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [pathname]);

  useEffect(() => {
    /* ───────────────────────────────
       3. Optional theme pulse (Solar ↔ Lunar)
       ─────────────────────────────── */
    const observer = new MutationObserver(() => {
      document.body.classList.add("theme-pulse");
      setTimeout(() => {
        document.body.classList.remove("theme-pulse");
      }, 1300);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
