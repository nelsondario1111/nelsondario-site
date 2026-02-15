"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import type { ElementType } from "react";
import { SubscribeForm } from "@/components/SubscribeForm";

type ResourceItem = {
  title: string;
  tag: string;
  summary: string;
  href: string;
  mode: "internal" | "external" | "waitlist";
};

const tools: ResourceItem[] = [
  {
    title: "Calm Systems Checklist",
    tag: "Checklist · EN/ES",
    summary:
      "A practical checklist to stabilize your operations, protect your energy, and keep delivery clear week to week.",
    href: "#calm-systems-checklist",
    mode: "internal",
  },
  {
    title: "Offer Capacity Calculator",
    tag: "Calculator",
    summary:
      "Estimate what you can sustainably deliver each month before committing to growth that overwhelms your nervous system.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Client Journey Clarity Guide",
    tag: "Guide",
    summary:
      "Map your lead-to-client path in a calm, simple way so people know what to do next at every stage.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Partner Picks (Conscious Tools)",
    tag: "Partner Links",
    summary:
      "A minimal list of trusted tools and partner ecosystems that support this work. Some links may include affiliate partnerships.",
    href: "https://lumaeconomy.com",
    mode: "external",
  },
];

const downloads: ResourceItem[] = [
  {
    title: "Bilingual Website Starter Kit",
    tag: "Starter Kit",
    summary:
      "Pages, sections, and copy blocks to launch in EN/ES quickly.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Contractor Website Template",
    tag: "Template",
    summary: "A modern template built to rank locally and convert.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "AI Automation Blueprints",
    tag: "Blueprints",
    summary: "Proven workflows for intake, follow-up, and client management.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
];

const library: ResourceItem[] = [
  {
    title: "Article Library",
    tag: "Articles",
    summary:
      "Long-form notes on coherence, business structure, and spiritual integration for sensitive founders.",
    href: "/en/library",
    mode: "internal",
  },
  {
    title: "Conversations with Lumina — Highlights",
    tag: "Highlights",
    summary:
      "Curated conversation highlights for clarity, sovereignty, and grounded action.",
    href: "/en/conversations",
    mode: "internal",
  },
  {
    title: "Field Notes: Tech + Spirit",
    tag: "Editorial",
    summary:
      "A living bridge between systems, strategy, and consciousness for the new economy.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
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
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">The Library</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Resources for Calm Growth
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Practical support across three layers: <span className="font-semibold">Tools</span>,{" "}
          <span className="font-semibold">Downloads</span>, and <span className="font-semibold">Library</span>.
        </p>
      </motion.section>

      <div aria-hidden="true" className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <ResourceSection
        id="tools"
        eyebrow="Operational Support"
        title="Tools"
        description="Checklists, calculators, and practical guides for clearer execution."
        items={tools}
      />

      <ResourceSection
        id="downloads"
        eyebrow="Assets"
        title="Downloads"
        description="Starter kits and implementation assets you can use between sessions."
        items={downloads}
      />

      <ResourceSection
        id="library"
        eyebrow="Signal"
        title="Library"
        description="Articles and Conversations with Lumina highlights for perspective and integration."
        items={library}
      />

      <motion.section
        id="calm-systems-checklist"
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
            Receive the checklist and future resource drops through Subscribe to Lumina.
          </p>

          <div className="mx-auto max-w-xl text-left" id="subscribe-lumina-leadmagnet">
            <SubscribeForm
              label="Subscribe to Lumina"
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
          If you want help implementing this with clean priorities, we can map your next step together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/en/book" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Book a Resonance Check
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Ask a question
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

type ResourceSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ResourceItem[];
};

function ResourceSection({ id, eyebrow, title, description, items }: ResourceSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="px-6 py-16 md:px-10 odd:bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 even:bg-[var(--bg-base)]"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">{eyebrow}</p>
          <h2 className="section-title mb-3">{title}</h2>
          <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">{description}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ResourceCard({ item }: { item: ResourceItem }) {
  const isExternal = item.mode === "external";
  const isWaitlist = item.mode === "waitlist";

  const Wrapper: ElementType = isWaitlist ? "div" : isExternal ? "a" : Link;

  const wrapperProps = isWaitlist
    ? {}
    : isExternal
    ? {
        href: item.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${item.title} (opens in a new tab)`,
      }
    : { href: item.href };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block h-full ${isWaitlist ? "cursor-default" : "cursor-pointer"}`}
    >
      <article
        className={`h-full p-6 rounded-2xl border transition-all flex flex-col gap-4
          ${
            isWaitlist
              ? "border-[var(--text-base)]/12 bg-[var(--bg-base)]/80 opacity-80"
              : "border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md"
          }`}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55">{item.tag}</p>
        <h3 className="text-lg font-heading text-[var(--color-gold)]">{item.title}</h3>
        <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>

        <div className="mt-auto pt-4 border-t border-[var(--text-base)]/10 text-[11px] uppercase tracking-[0.16em] text-[var(--text-base)]/60">
          {isWaitlist ? "Join waitlist" : isExternal ? "Open link" : "Open"}
        </div>
      </article>
    </Wrapper>
  );
}
