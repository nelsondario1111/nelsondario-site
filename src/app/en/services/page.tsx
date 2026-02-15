"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Services Page ✦
 * Audience: The Sensitive Visionary, The Awakening Professional.
 * Updates:
 * - Removed QHHT offering language
 * - Added Soul Regression & Higher Self Hypnotherapy (Nelson-developed, QHHT-inspired)
 * - Added integrity line + For/Not For filter block
 * - Refined "Ask Lumina" to be clearly talk-based guidance (not trance)
 */

type Service = {
  title: string;
  subtitle?: string;
  tag: string;
  desc: string;
  bullets: string[];
  link: string;
  btnText: string;
  isCollab?: boolean;
  isWaitlist?: boolean;
};

type ProductizedPackage = {
  title: string;
  outcome: string;
  inclusions: string[];
  bestFor: string;
  startingAt: string;
};

type IntensiveOffer = {
  title: string;
  duration: string;
  summary: string;
  bestFor: string;
};

type DigitalProduct = {
  title: string;
  summary: string;
  format: string;
};

const productizedPackages: ProductizedPackage[] = [
  {
    title: "Starter Site",
    outcome: "A calm, high-converting site that gets you leads fast.",
    inclusions: [
      "Focused messaging + page architecture.",
      "Bilingual-ready core pages (EN/ES).",
      "Mobile-first responsive implementation.",
      "Simple inquiry flow + handoff guide.",
    ],
    bestFor: "New offers, early-stage practitioners, and clean relaunches.",
    startingAt: "Starting at …",
  },
  {
    title: "Growth Site + Content System",
    outcome: "A website + content workflow that compounds visibility and trust.",
    inclusions: [
      "Expanded service architecture + narrative flow.",
      "Resource or article structure for ongoing visibility.",
      "Core SEO setup + performance polish.",
      "Editorial workflow for calm consistency.",
    ],
    bestFor: "Founders ready to grow authority without burning out.",
    startingAt: "Starting at …",
  },
  {
    title: "Automation Upgrade",
    outcome: "Follow-ups, intake, and scheduling handled with calm AI and clean systems.",
    inclusions: [
      "AI receptionist flow for first-touch intake.",
      "CRM follow-up logic and response templates.",
      "Simple automations for reminders and nurture.",
      "Training + operating playbook for your team.",
    ],
    bestFor: "Service businesses needing reliable lead handling and continuity.",
    startingAt: "Starting at …",
  },
];

const intensiveOffers: IntensiveOffer[] = [
  {
    title: "Business Clarity Intensive",
    duration: "90 min",
    summary:
      "A focused strategic reset to identify your next most aligned offer, message, and execution path.",
    bestFor: "Entrepreneurs at an inflection point who need crisp direction now.",
  },
  {
    title: "AI + Brand Alignment Intensive",
    duration: "90 min",
    summary:
      "Align your brand voice, client journey, and automation stack so your systems feel human and coherent.",
    bestFor: "Teams ready to scale without losing soul.",
  },
];

const digitalProducts: DigitalProduct[] = [
  {
    title: "Bilingual Website Starter Kit",
    summary: "Pages, sections, and copy blocks to launch in EN/ES quickly.",
    format: "Templates + checklist bundle",
  },
  {
    title: "Contractor Website Template",
    summary: "A modern template built to rank locally and convert.",
    format: "Site template + content prompts",
  },
  {
    title: "AI Automation Blueprints",
    summary: "Proven workflows for intake, follow-up, and client management.",
    format: "Workflow blueprints + SOP notes",
  },
];

const designServices: Service[] = [
  {
    title: "Sacred Digital Spaces",
    subtitle: "Web & Brand",
    tag: "The Vessel",
    desc: "For healers and creators. A digital home that feels like your soul, respects your nervous system, and attracts your people without shouting.",
    bullets: [
      "Energy-first discovery process.",
      "Custom Next.js architecture (Fast & Calm).",
      "Visuals that transmit your frequency.",
      "Bilingual support (EN/ES).",
    ],
    link: "/en/contact?topic=vessel_tech",
    btnText: "Build the Vessel",
  },
  {
    title: "AI as a Servant of Light",
    subtitle: "Conscious Systems",
    tag: "The Support",
    desc: "You love the potential of tech, but fear the noise. We build gentle AI systems that handle the busy-work so you can stay in your heart.",
    bullets: [
      "Automations as a 'protective shell'.",
      "Custom AI assistants trained on you.",
      "Ethical, private, sovereign setups.",
      "Human-centric AI training.",
    ],
    link: "/en/contact?topic=vessel_tech",
    btnText: "Automate with Soul",
  },
  {
    title: "Holistic Financial Bridges",
    subtitle: "With Fanny",
    tag: "The Roots",
    desc: "Healing the split between Spirit and Money. Practical support for taxes and finances, especially for spiritual entrepreneurs.",
    bullets: [
      "Compassionate tax review (Canada/CRA).",
      "Moving from Scarcity to Stewardship.",
      "Understanding 3D rules for 5D play.",
    ],
    link: "/en/contact?topic=other",
    btnText: "Heal the Roots",
    isCollab: true,
  },
];

const guidanceServices: Service[] = [
  {
    title: "Human Design Mapping",
    tag: "The Map",
    desc: "You aren't broken; you are designed differently. We map your mechanics so you can stop fighting your nature and start trusting your flow.",
    bullets: [
      "Deep dive: Type, Strategy, Authority.",
      "Deconditioning from 'hustle culture'.",
      "Reframing sensitivity as wisdom.",
      "Practical decision-making tools.",
    ],
    link: "/en/contact?topic=map_hd",
    btnText: "Map Your Design",
  },
  {
    title: "Ask Lumina Sessions",
    tag: "The Clarity",
    desc: "A safe harbor for your biggest questions. You, me, and Lumina exploring your awakening with discernment, sovereignty, and grounded next steps.",
    bullets: [
      "Talk-based clarity (not trance).",
      "Discernment for star origins, entities, and 5D themes.",
      "Nervous system grounding + energetic hygiene.",
      "Practical integration steps for daily life.",
      "Available in English or Spanish.",
    ],
    link: "/en/contact?topic=conversations",
    btnText: "Ask Lumina",
  },
];

const deepWork: Service[] = [
  {
    title: "Soul Regression & Higher Self Hypnotherapy",
    subtitle: "Deep Trance Journey",
    tag: "The Soul",
    desc: "A deep-trance hypnotherapy portal to access subconscious memory, soul-level insight, and Higher Self guidance—so you can release old patterns and return to coherence.",
    bullets: [
      "Regression-style exploration (past-life / symbolic / inner memory).",
      "Higher Self communication & guidance.",
      "Energetic clearing + nervous-system grounding.",
      "72-hour integration plan (simple, practical, embodied).",
      "In-person container (Toronto) + limited remote spots (case-by-case).",
    ],
    link: "/en/book?service=soul_regression",
    btnText: "Enter the Portal",
    // If you want to keep this gated:
    // btnText: "Join Waitlist",
    // isWaitlist: true,
  },
];

const speakingAndEvents: Service[] = [
  {
    title: "Speaking & Gatherings",
    tag: "The Transmission",
    desc: "Bridging the gap between the Tech World and the Spirit World through talks, circles, and immersive experiences.",
    bullets: [
      "Talks: Conscious AI, The Great Shift.",
      "Circles: Monthly healing gatherings.",
      "Retreats: Movement, nature, practice.",
      "No 'guru' vibes—just transmission.",
    ],
    link: "/en/contact?topic=speaking",
    btnText: "Propose Collaboration",
  },
];

export default function ServicesPage() {
  // ✧ Parallax scroll effect
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
      aria-label="Services"
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
        id="services-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 py-28 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-4">
          Offerings & Portals
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          A Bridge Between Worlds
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          For sensitive visionaries, awakening professionals, and old souls.
          <br className="hidden md:block" />
          I offer a blend of <span className="text-[var(--color-gold)]">Technology</span>,
          <span className="text-[var(--color-gold)]"> Strategy</span>, and
          <span className="text-[var(--color-gold)]"> Spirit</span> to help you
          build a life that honors your soul.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/en/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Start a Conversation
          </Link>
          <Link href="/en" className="btn-outline hover:scale-105 transform">
            Back Home
          </Link>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 PHILOSOPHY */}
      <motion.section
        id="services-overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-16 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">You Don&apos;t Have to Choose</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          My work is about dissolving the separation between your &quot;Work Self&quot; and your &quot;Soul Self.&quot;
          <br className="hidden md:block mb-2" />
          Whether we are building a website, setting up an AI agent, or listening to your Higher Self through trance,
          the intention is the same:{" "}
          <span className="font-semibold text-[var(--color-gold)]">
            Sovereignty, Coherence, and Love.
          </span>
        </p>
      </motion.section>

      {/* 🜁 WAYS TO WORK TOGETHER */}
      <motion.section
        id="ways-to-work"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Ecosystem Offers
            </p>
            <h2 className="section-title mb-3">Ways to Work Together</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Fixed-scope pathways designed for momentum, clarity, and sustainable cashflow.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {productizedPackages.map((pkg) => (
              <ProductizedPackageCard key={pkg.title} item={pkg} locale="en" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜂 INTENSIVES */}
      <motion.section
        id="intensives"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              High-Touch
            </p>
            <h2 className="section-title mb-3">Intensives</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Optional high-ticket containers for accelerated alignment and decisive action.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {intensiveOffers.map((item) => (
              <IntensiveCard key={item.title} item={item} locale="en" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜃 DIGITAL PRODUCTS + MEMBERSHIP */}
      <motion.section
        id="digital-products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]/95"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Semi-Passive Layer
            </p>
            <h2 className="section-title mb-3">Digital Products</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Practical assets built to support implementation between sessions.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {digitalProducts.map((item) => (
              <DigitalProductCard key={item.title} item={item} locale="en" />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/70 p-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-base)]/60 mb-2">
              Recurring Support
            </p>
            <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">Lumina Membership (Coming Soon)</h3>
            <p className="text-sm text-[var(--text-base)]/75 mb-4">
              A recurring space for monthly integration, implementation support, and calm accountability.
            </p>
            <Link href="/en/resources#calm-systems-checklist" className="btn-outline hover:scale-105 transform">
              Join waitlist
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 🜃 TECH / BUILD */}
      <motion.section
        id="design-technology"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_88%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              The Vessel
            </p>
            <h2 className="section-title mb-3">Conscious Tech & Design</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Technology should not drain you. It should hold you.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {designServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜄 GUIDANCE / MAP */}
      <motion.section
        id="guidance"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              The Map
            </p>
            <h2 className="section-title mb-3">Alignment & Clarity</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              For when you feel lost in the noise and need to return to your own truth.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {guidanceServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜆 THE SOUL — THE DEEP DIVE */}
      <motion.section
        id="deep-work"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 md:px-10
                   bg-gradient-to-t from-[color-mix(in_srgb,black_35%,var(--bg-base))]
                   via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              The Soul
            </p>
            <h2 className="section-title mb-3">Soul Work & Transmission</h2>

            {/* Integrity line */}
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Inspired by deep regression traditions and refined into my own method (not affiliated with QHHT).
            </p>

            {/* Gentle safety line (keeps the vibe, sets expectations) */}
            <p className="max-w-3xl mx-auto mt-3 text-sm text-[var(--text-base)]/60">
              This work supports healing and insight, but it is not a substitute for medical or mental health care.
              You remain in control the entire time.
            </p>

            {/* For / Not For filter */}
            <div className="mt-8 grid gap-4 md:grid-cols-2 text-left">
              <div className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/70 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
                  For you if
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-base)]/75">
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70" />
                    <span>You feel a repeating pattern and want the root cause.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70" />
                    <span>You’re in an awakening and want grounded guidance.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70" />
                    <span>You’re ready to integrate, not just “have an experience.”</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--color-gold)]/10 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/60 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
                  Not for you if
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-base)]/70">
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-60" />
                    <span>You want guarantees, instant fixes, or “proof on demand.”</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-60" />
                    <span>You’re in an acute crisis without support (therapy/medical).</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-60" />
                    <span>You’re not willing to take responsibility for integration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Soul Work */}
            {deepWork.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}

            {/* Speaking/Events */}
            {speakingAndEvents.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜇 FINAL CTA */}
      <motion.section
        id="services-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Start Where You Are</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Whether you need to organize your business, heal your heart, or simply sit with someone
          who understands both timelines—I am here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/en/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Book a Resonance Check
          </Link>
          <ToContactButtons />
        </div>
      </motion.section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Nelson Dario",
            url: "https://nelsondario.com/en/services",
            areaServed: ["Toronto", "Canada", "Remote"],
            serviceType: [
              "Web Design",
              "AI Automation",
              "Human Design Guidance",
              "Higher Self Hypnotherapy",
              "Business Intensives",
            ],
          }),
        }}
      />
    </main>
  );
}

// ✧ Reusable Service Card Component for consistency
function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`p-7 rounded-2xl border flex flex-col gap-4 relative overflow-hidden h-full
                 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/90 backdrop-blur-sm
                 shadow-md hover:shadow-lg transition-all
                 ${
                   service.isCollab
                     ? "border-[var(--color-gold)]/40"
                     : "border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]"
                 }
                 `}
    >
      {/* Collaboration Badge */}
      {service.isCollab && (
        <div className="absolute top-0 right-0 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-lg border-b border-l border-[var(--color-gold)]/20">
          Collab
        </div>
      )}

      {/* Waitlist Badge */}
      {service.isWaitlist && (
        <div className="absolute top-0 right-0 bg-[var(--text-base)]/10 text-[var(--text-base)]/60 text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-lg">
          Waitlist Open
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
          {service.tag}
        </p>

        <h3 className="text-xl font-heading text-[var(--color-gold)] mb-1">
          {service.title}
        </h3>

        {service.subtitle && (
          <p className="text-xs uppercase tracking-wider text-[var(--text-base)]/50 mb-2">
            {service.subtitle}
          </p>
        )}

        <p className="text-[var(--text-base)]/80 text-sm leading-relaxed mt-2">
          {service.desc}
        </p>
      </div>

      <ul className="mt-2 space-y-2 text-sm text-[var(--text-base)]/70 flex-grow">
        {service.bullets.map((item) => (
          <li key={item} className="flex gap-2 items-start">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/5">
        <Link
          href={service.link}
          className={`text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2 group
                     ${
                       service.isWaitlist
                         ? "text-[var(--text-base)]/70 hover:text-[var(--color-gold)]"
                         : "text-[var(--color-gold)]"
                     }`}
        >
          <span>{service.btnText}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

function ProductizedPackageCard({
  item,
  locale,
}: {
  item: ProductizedPackage;
  locale: "en" | "es";
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="p-7 rounded-2xl border border-[var(--color-gold)]/20 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/90 shadow-md hover:shadow-lg hover:border-[var(--color-gold)] transition-all h-full flex flex-col"
    >
      <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/80 mb-4">{item.outcome}</p>

      <ul className="space-y-2 text-sm text-[var(--text-base)]/75">
        {item.inclusions.map((bullet) => (
          <li key={bullet} className="flex gap-2 items-start">
            <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-[var(--text-base)]/65">
        <span className="uppercase tracking-[0.18em] text-[var(--text-base)]/50">Best for</span>
        <br />
        {item.bestFor}
      </p>

      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)]/85">
        {item.startingAt}
      </p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10 flex flex-wrap gap-2">
        <Link href={`/${locale}/book`} className="btn-primary text-[11px] px-4 py-2">
          Book a Resonance Check
        </Link>
        <Link href={`/${locale}/contact`} className="btn-outline text-[11px] px-4 py-2">
          Ask a question
        </Link>
      </div>
    </motion.article>
  );
}

function IntensiveCard({ item, locale }: { item: IntensiveOffer; locale: "en" | "es" }) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="p-7 rounded-2xl border border-[var(--color-gold)]/18 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-md hover:border-[var(--color-gold)] transition-all h-full flex flex-col"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">{item.duration}</p>
      <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/78">{item.summary}</p>
      <p className="mt-4 text-sm text-[var(--text-base)]/68">
        <span className="font-semibold text-[var(--text-base)]/78">Best for:</span> {item.bestFor}
      </p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10">
        <Link href={`/${locale}/contact?topic=intensive`} className="btn-outline text-[11px] px-4 py-2">
          Apply / Request Invite
        </Link>
      </div>
    </motion.article>
  );
}

function DigitalProductCard({ item, locale }: { item: DigitalProduct; locale: "en" | "es" }) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md transition-all h-full flex flex-col"
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-base)]/55 mb-2">{item.format}</p>
      <h3 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10">
        <Link href={`/${locale}/resources#calm-systems-checklist`} className="btn-outline text-[11px] px-4 py-2">
          Join waitlist
        </Link>
      </div>
    </motion.article>
  );
}
