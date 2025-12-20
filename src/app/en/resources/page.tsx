"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * ✦ NelsonDario.com — Resources Page (EN) ✦
 * Purpose: A calm library of guides, tools, and transmissions.
 * Frequency: Gentle · Practical · High-Frequency
 * Updates: Interactive Newsletter, Pulsing Badges, Mobile Optimization.
 */

type Resource = {
  title: string;
  tag: string;
  summary: string;
  href: string;
  type: "guide" | "tool" | "transmission" | "article" | "external" | "audio";
  status?: "coming-soon" | "new";
};

// ✧ Custom Icon Logic (High-Frequency Glyphs)
const getIcon = (type: Resource["type"]) => {
  switch (type) {
    case "guide": return "✦";
    case "tool": return "⚒";
    case "transmission": return "∞";
    case "audio": return "🎧";
    case "article": return "⚡";
    case "external": return "↗";
    default: return "✧";
  }
};

// 1. CORE GUIDES
const coreResources: Resource[] = [
  {
    title: "Remember Who You Are — Awakening Guide",
    tag: "Free eBook · PDF",
    summary:
      "A living, heart-centered guide for navigating the awakening with clarity, love, and grounded power. Written for sensitive visionaries.",
    href: "/en/resources/remember-who-you-are",
    type: "guide",
    status: "new",
  },
  {
    title: "Human Design Basics for Sensitive Leaders",
    tag: "Guide · System",
    summary:
      "A friendly introduction to Type, Strategy, and Authority with a focus on avoiding burnout and honoring your natural rhythm.",
    href: "/en/resources/human-design-basics",
    type: "guide",
    status: "coming-soon",
  },
];

// 2. TECH / BRIDGE RESOURCES
const techResources: Resource[] = [
  {
    title: "The Sovereign Tech Stack",
    tag: "Curated Tools",
    summary:
      "A list of software, browsers, and AI tools that I trust. High privacy, low noise, and ethically aligned for conscious businesses.",
    href: "/en/resources/sovereign-tech-stack",
    type: "tool",
    status: "coming-soon",
  },
  {
    title: "Conscious Tech Essentials",
    tag: "Protocol · Hygiene",
    summary:
      "Practical recommendations for digital boundaries. How to set up your devices so they serve your mission instead of draining your energy.",
    href: "/en/resources/conscious-tech-essentials",
    type: "guide",
    status: "coming-soon",
  },
];

// 3. LUMINA / TRANSMISSIONS
const luminousResources: Resource[] = [
  {
    title: "Conversations with Lumina — Video Library",
    tag: "Transmission · Video",
    summary:
      "Short, high-frequency conversations on awakening, sovereignty, and the new timelines — anchored here as a living archive.",
    href: "https://www.instagram.com/conversationswithlumina",
    type: "external",
  },
  {
    title: "The Great Integration — Field Notes",
    tag: "Transmission · Article",
    summary:
      "Reflections on the bridge between the Tech World and the Spirit World, written for those walking with one foot in each reality.",
    href: "/en/resources/the-great-integration",
    type: "article",
    status: "coming-soon",
  },
];

// 4. PRACTICES
const practiceResources: Resource[] = [
  {
    title: "Somatic Reset Audio",
    tag: "Audio · 10 Min",
    summary:
      "A short guided audio to regulate your nervous system when the digital world feels too loud. Listen, breathe, and return to center.",
    href: "/en/resources/somatic-reset",
    type: "audio",
    status: "coming-soon",
  },
  {
    title: "Daily Grounding & Protection Checklist",
    tag: "Tool · Practice",
    summary:
      "A simple, repeatable practice to begin and end your day clear, protected, and connected — especially useful for empaths.",
    href: "/en/resources/grounding-protection-checklist",
    type: "tool",
    status: "coming-soon",
  },
];

export default function ResourcesPage() {
  // ✧ Parallax scroll effect for background
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
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      {/* ✧ Golden parallax background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.15), transparent 70%)",
          transform: "translateY(var(--scroll-offset, 0px))",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* ✧ Starlight texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      {/* 🜂 HERO */}
      <motion.section
        id="resources-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          The Library
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Tools for the Shift
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          A growing library of <span className="font-semibold">guides, practices, and transmissions</span>{" "}
          to support your integration. <br className="hidden md:block" />
          Take what resonates, and let the rest dissolve.
        </p>

        <div className="mt-6 text-sm text-[var(--text-base)]/70">
          <span className="mr-2">🌐</span>
          Prefer Spanish?{" "}
          <Link
            href="/es/resources"
            className="underline underline-offset-4 decoration-[var(--color-gold)]/80 hover:text-[var(--color-gold)] transition-colors"
          >
            Ver recursos en Español
          </Link>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 START HERE MINI-ORACLE */}
      <motion.section
        id="start-here"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 pb-10 md:px-10"
      >
        <div
          className="max-w-4xl mx-auto rounded-2xl border border-[var(--text-base)]/14
                     bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm p-6 md:p-7"
        >
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3 text-center">
            Where do I begin?
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm">
            <StartHereLink href="#core-guides">
              I&apos;m in a life transition
            </StartHereLink>
            <StartHereLink href="#tech-tools">
              I need healthier tech habits
            </StartHereLink>
            <StartHereLink href="#practices-tools">
              I need grounding & protection
            </StartHereLink>
            <StartHereLink href="#lumina-series">
              I want to listen & receive
            </StartHereLink>
          </div>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-4 bg-gradient-to-b from-transparent via-[var(--glow-color)]/10 to-transparent"
      />

      {/* 1. CORE GUIDES */}
      <SectionBlock
        id="core-guides"
        eyebrow="Foundation"
        title="Start Here"
        description="Maps for the territory. If you are in transition, begin with these."
        resources={coreResources}
      />

      {/* 2. TECH / THE BRIDGE */}
      <SectionBlock
        id="tech-tools"
        eyebrow="The Digital Altar"
        title="Conscious Technology"
        description="Curated tools and protocols to help you use technology without losing your sovereignty."
        resources={techResources}
      />

      {/* 3. TRANSMISSIONS */}
      <SectionBlock
        id="lumina-series"
        eyebrow="The Signal"
        title="Transmissions & Insights"
        description="Living streams of information bridging the metaphysical and the practical."
        resources={luminousResources}
      />

      {/* 4. PRACTICES */}
      <SectionBlock
        id="practices-tools"
        eyebrow="Integration"
        title="Practices for Daily Life"
        description="Simple tools to regulate your nervous system and clear your field."
        resources={practiceResources}
      />

      {/* ✧ NEWSLETTER CAPTURE (Interactive) */}
      <NewsletterSection />

      {/* 🜇 FINAL CTA */}
      <motion.section
        id="resources-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Need deeper support?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Information is useful, but <span className="font-semibold">integration</span> is where the shift happens.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/en/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Book a Resonance Check
          </Link>
          <Link
            href="/en/contact"
            className="btn-outline hover:scale-105 transform"
          >
            Send a Message
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

/* ───────────────────────────────
   ✧ Helper: Interactive Newsletter
   ─────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/50 border-y border-[var(--color-gold)]/10"
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-2xl mb-4 block text-[var(--color-gold)] animate-pulse">✦</span>
        <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">
          Notify me when new portals open
        </h3>
        <p className="text-sm text-[var(--text-base)]/70 mb-6 max-w-md mx-auto">
          Many of these resources are currently being crystallized.
          Leave your email to receive them the moment they are ready.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto relative">
           <AnimatePresence mode="wait">
             {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full py-3 px-6 rounded bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-sm"
                >
                   ✧ You are on the list. Thank you.
                </motion.div>
             ) : (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 className="flex flex-col sm:flex-row gap-3 w-full"
               >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded bg-[var(--bg-base)] border border-[var(--color-gold)]/20 focus:border-[var(--color-gold)] outline-none text-sm placeholder:text-[var(--text-base)]/30 transition-colors"
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="btn-primary py-3 px-6 text-sm whitespace-nowrap disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : "Keep me posted"}
                  </button>
               </motion.div>
             )}
           </AnimatePresence>
        </form>
      </div>
    </motion.section>
  );
}

/* ───────────────────────────────
   ✧ Small helper components
   ─────────────────────────────── */

function StartHereLink(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={props.href}
      className="inline-flex items-center gap-1 rounded-full border
                 border-[var(--text-base)]/20 bg-[var(--bg-base)]/90
                 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em]
                 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]
                 transition-colors cursor-pointer"
    >
      <span className="text-[var(--color-gold)]">✧</span>
      {props.children}
    </a>
  );
}

/* ───────────────────────────────
   ✧ Section & Card Components
   ─────────────────────────────── */

type SectionBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  resources: Resource[];
};

function SectionBlock({ id, eyebrow, title, description, resources }: SectionBlockProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="px-6 py-16 md:px-10 odd:bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 even:bg-[var(--bg-base)] backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
            {eyebrow}
          </p>
          <h2 className="section-title mb-3">{title}</h2>
          <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
            {description}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const isExternal = resource.type === "external" || resource.href.startsWith("http");
  const isComingSoon = resource.status === "coming-soon";

  const Wrapper: React.ElementType =
    isComingSoon ? "div" : isExternal ? "a" : Link;

  const wrapperProps = isComingSoon
    ? {}
    : isExternal
    ? {
        href: resource.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${resource.title} (opens in new tab)`,
      }
    : { href: resource.href };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block h-full ${
        isComingSoon ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <article
        className={`h-full p-6 rounded-2xl border transition-all flex flex-col gap-4 relative overflow-hidden
          ${
            isComingSoon
              ? "border-[var(--text-base)]/10 bg-[var(--bg-base)] opacity-75"
              : "border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md hover:-translate-y-1"
          }`}
      >
        {/* NEW Badge with Pulse Effect */}
        {resource.status === "new" && (
          <div className="absolute top-4 right-4">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-gold)]"></span>
             </span>
             <div className="mt-1 text-[9px] uppercase tracking-wider font-bold text-[var(--color-gold)]">New</div>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-lg ${
                isComingSoon ? "grayscale opacity-50" : "text-[var(--color-gold)]"
              }`}
            >
              {getIcon(resource.type)}
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/50">
              {resource.tag}
            </p>
          </div>

          <h3
            className={`text-lg md:text-xl font-heading transition-all ${
              isComingSoon
                ? "text-[var(--text-base)]/60"
                : "text-[var(--text-base)] group-hover:text-[var(--color-gold)]"
            }`}
          >
            {resource.title}
          </h3>
          <p className="text-sm text-[var(--text-base)]/70 leading-relaxed">
            {resource.summary}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-[var(--text-base)]/5 flex items-center justify-between text-[11px] text-[var(--text-base)]/60">
          <span className="italic opacity-70">
            {resource.type === "audio"
              ? "Listen"
              : resource.type === "external"
              ? "Watch / Visit"
              : "Read"}
          </span>
          <span
            className={`inline-flex items-center gap-1 transition-colors ${
              !isComingSoon && "group-hover:text-[var(--color-gold)]"
            }`}
          >
            {isComingSoon
              ? "Arriving soon"
              : isExternal
              ? "Open link"
              : "Access now"}
            {!isComingSoon && <span>→</span>}
          </span>
        </div>
      </article>
    </Wrapper>
  );
}