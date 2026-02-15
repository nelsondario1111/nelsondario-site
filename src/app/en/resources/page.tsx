"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { SubscribeForm } from "@/components/SubscribeForm";

type PublishedResource = {
  title: string;
  tag: string;
  summary: string;
  href: string;
};

type ComingNextItem = {
  title: string;
  tag: string;
  summary: string;
};

const publishedResources: PublishedResource[] = [
  {
    title: "Local SEO Checklist",
    tag: "Checklist",
    summary:
      "A practical local visibility checklist for service businesses that need consistent lead flow.",
    href: "/en/resources/local-seo-checklist",
  },
  {
    title: "Calm Systems Intake + Follow-up Workflow",
    tag: "Workflow",
    summary:
      "A step-by-step intake and follow-up flow to reduce missed opportunities and keep operations calm.",
    href: "/en/resources/calm-systems-workflow",
  },
  {
    title: "AI Tools I Actually Use",
    tag: "Tools",
    summary:
      "The core AI stack I use weekly for planning, delivery, and client communication.",
    href: "/en/resources/ai-tools-i-use",
  },
];

const comingNext: ComingNextItem[] = [
  {
    title: "Bilingual Website Starter Kit",
    tag: "Starter Kit",
    summary: "Pages, sections, and copy blocks to launch in EN/ES quickly.",
  },
  {
    title: "Contractor Website Template",
    tag: "Template",
    summary: "A modern template built to rank locally and convert.",
  },
  {
    title: "AI Automation Blueprints",
    tag: "Blueprints",
    summary: "Proven workflows for intake, follow-up, and client management.",
  },
];

export default function ResourcesPage() {
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
      aria-label="Resources"
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
        id="resources-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)] to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Resource Library</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Practical Resources You Can Use Today
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Implementation-first support for websites, local SEO, AI automations, and calm operations.
        </p>
      </motion.section>

      <div aria-hidden="true" className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <ResourceBlock
        id="published"
        eyebrow="Published"
        title="Available Now"
        description="Three core resources to help you execute with clarity this week."
        resources={publishedResources}
      />

      <motion.section
        id="library-links"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-14 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/90"
      >
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          <Link href="/en/conversations" className="block">
            <article className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] transition-all">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">Insights</p>
              <h3 className="text-lg font-heading text-[var(--color-gold)] mb-2">Case Studies + Practical Notes</h3>
              <p className="text-sm text-[var(--text-base)]/75">Browse practical notes on websites, SEO, automations, and systems.</p>
            </article>
          </Link>

          <Link href="/en/library" className="block">
            <article className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] transition-all">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">Articles</p>
              <h3 className="text-lg font-heading text-[var(--color-gold)] mb-2">Long-Form Library</h3>
              <p className="text-sm text-[var(--text-base)]/75">Explore long-form writing on clarity, systems, and conscious business.</p>
            </article>
          </Link>
        </div>
      </motion.section>

      <motion.section
        id="coming-next"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Coming Next</p>
            <h2 className="section-title mb-3">Next Releases</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
              Join the waitlist to get new templates and implementation assets when they are released.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {comingNext.map((item) => (
              <article
                key={item.title}
                className="h-full p-6 rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/80 opacity-85"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">{item.tag}</p>
                <h3 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
                <p className="mt-4 pt-3 border-t border-[var(--text-base)]/10 text-[11px] uppercase tracking-[0.16em] text-[var(--text-base)]/60">
                  Waitlist
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="resource-waitlist"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/55 border-y border-[var(--color-gold)]/12"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--text-base)]/60 mb-2">Lead Magnet</p>
          <h2 className="section-title mb-3">Get the “Calm Systems Checklist” (EN/ES)</h2>
          <p className="text-sm md:text-base text-[var(--text-base)]/75 mb-6">
            Get the checklist and future resource releases by email.
          </p>

          <div className="mx-auto max-w-xl text-left" id="subscribe-resource-updates">
            <SubscribeForm
              label="Subscribe for resource updates"
              placeholder="Your email address"
              buttonText="Get checklist"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="resources-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Need direct guidance?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          If you want help applying this to your business, we can map your next step together.
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

type ResourceBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  resources: PublishedResource[];
};

function ResourceBlock({ id, eyebrow, title, description, resources }: ResourceBlockProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="px-6 py-16 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">{eyebrow}</p>
          <h2 className="section-title mb-3">{title}</h2>
          <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">{description}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((item) => (
            <Link key={item.title} href={item.href} className="group block h-full">
              <article className="h-full p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md transition-all flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55">{item.tag}</p>
                <h3 className="text-lg font-heading text-[var(--color-gold)]">{item.title}</h3>
                <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
                <div className="mt-auto pt-4 border-t border-[var(--text-base)]/10 text-[11px] uppercase tracking-[0.16em] text-[var(--text-base)]/60">
                  Open
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
