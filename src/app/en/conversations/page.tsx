"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

type InsightTopic = {
  title: string;
  tag: string;
  summary: string;
  href: string;
};

type CaseStudy = {
  title: string;
  context: string;
  outcome: string;
};

const insightTopics: InsightTopic[] = [
  {
    title: "Fast Website Foundations",
    tag: "Web Build",
    summary:
      "What matters most for speed, clarity, and conversion when rebuilding a service website.",
    href: "/en/resources/local-seo-checklist",
  },
  {
    title: "Local SEO That Actually Moves Leads",
    tag: "Local SEO",
    summary:
      "Simple on-page and local signals that help people find you without content burnout.",
    href: "/en/resources/local-seo-checklist",
  },
  {
    title: "Calm Intake + Follow-up Automations",
    tag: "Systems",
    summary:
      "How to reduce missed leads with clear intake routing and consistent follow-up.",
    href: "/en/resources/calm-systems-workflow",
  },
  {
    title: "AI Tools Worth Using Weekly",
    tag: "AI Stack",
    summary:
      "A practical list of tools I actually use for delivery, client communication, and planning.",
    href: "/en/resources/ai-tools-i-use",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Contractor Site Refresh",
    context: "Outdated 6-page site, low mobile speed, weak local search visibility.",
    outcome:
      "Rebuilt structure, improved speed, and cleaned service pages to create clearer lead flow.",
  },
  {
    title: "Service Intake Automation",
    context: "Leads were arriving from multiple channels with inconsistent follow-up.",
    outcome:
      "Implemented unified intake and follow-up logic to reduce missed conversations.",
  },
  {
    title: "Bilingual Offer Clarity",
    context: "Messaging was split between EN/ES with duplicated effort every launch.",
    outcome:
      "Created reusable EN/ES page and copy system for faster updates and better consistency.",
  },
];

export default function InsightsPage() {
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
      aria-label="Insights"
      className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.16), transparent 70%)",
          transform: "translateY(var(--scroll-offset, 0px))",
          transition: "transform 0.4s ease-out",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      <motion.section
        id="insights-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)] to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Insights</p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Practical Notes for Calm Growth
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Real guidance for <span className="font-semibold">websites</span>,
          <span className="font-semibold"> local SEO</span>,
          <span className="font-semibold"> AI automations</span>, and clean operating systems.
        </p>
      </motion.section>

      <div aria-hidden="true" className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <motion.section
        id="topics"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Focus Areas</p>
            <h2 className="section-title mb-3">What I Publish Here</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
              Short, implementation-focused notes you can use immediately.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {insightTopics.map((item) => (
              <Link key={item.title} href={item.href} className="group block">
                <article className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md transition-all">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">{item.tag}</p>
                  <h3 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
                  <div className="mt-4 pt-3 border-t border-[var(--text-base)]/10 text-[11px] uppercase tracking-[0.16em] text-[var(--text-base)]/60">
                    Open
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <div aria-hidden="true" className="h-6 bg-gradient-to-b from-transparent via-[var(--glow-color)]/10 to-transparent" />

      <motion.section
        id="case-studies"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Case Studies</p>
            <h2 className="section-title mb-3">Snapshots from Real Client Work</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
              Clear before/after examples from service businesses and contractor projects.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85"
              >
                <h3 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-base)]/75 mb-3">
                  <span className="font-semibold text-[var(--text-base)]/85">Context:</span> {item.context}
                </p>
                <p className="text-sm text-[var(--text-base)]/75">
                  <span className="font-semibold text-[var(--text-base)]/85">Outcome:</span> {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="insights-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Need this built for you?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          We can map the fastest package and implementation path for your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="/en/services#packages" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            View Packages
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Ask a question
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <ToContactButtons />
        </div>
      </motion.section>
    </main>
  );
}
