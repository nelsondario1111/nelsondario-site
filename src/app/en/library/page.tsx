"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type LibraryItem = {
  title: string;
  type: string;
  summary: string;
  href: string;
};

const items: LibraryItem[] = [
  {
    title: "Local SEO Checklist",
    type: "Checklist",
    summary: "Core local SEO tasks to improve map visibility and qualified inquiries.",
    href: "/en/resources/local-seo-checklist",
  },
  {
    title: "Calm Systems Intake + Follow-up Workflow",
    type: "Workflow",
    summary: "A simple lead intake and follow-up structure for faster response and cleaner handoff.",
    href: "/en/resources/calm-systems-workflow",
  },
  {
    title: "AI Tools I Actually Use",
    type: "Tools",
    summary: "A practical stack for content prep, planning, and delivery operations.",
    href: "/en/resources/ai-tools-i-use",
  },
  {
    title: "Insights and Case Notes",
    type: "Insights",
    summary: "Short notes from active client work across websites, SEO, and automation.",
    href: "/en/conversations",
  },
];

export default function LibraryPage() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      aria-label="Library"
      className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.15), transparent 70%)",
          transform: "translateY(var(--scroll-offset, 0px))",
          transition: "transform 0.4s ease-out",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      <motion.section
        id="library-hero"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)] to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Library</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Practical Guides and Case Notes
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Browse implementation-focused resources for websites, local SEO, AI automations, and operating systems.
        </p>
      </motion.section>

      <div aria-hidden="true" className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <motion.section
        id="library-items"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95"
      >
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="group block">
              <article className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md transition-all">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">{item.type}</p>
                <h2 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h2>
                <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
                <div className="mt-4 pt-3 border-t border-[var(--text-base)]/10 text-[11px] uppercase tracking-[0.16em] text-[var(--text-base)]/60">
                  Open
                </div>
              </article>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="library-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Need help applying this?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          If you want support implementing these systems, start with the package that fits your stage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/en/services#packages" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            View Packages
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Ask a question
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
