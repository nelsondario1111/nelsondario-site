"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

type Service = {
  title: string;
  subtitle?: string;
  tag: string;
  desc: string;
  bullets: string[];
  link: string;
  btnText: string;
  isCollab?: boolean;
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
    bestFor: "New offers, early-stage businesses, and clean relaunches.",
    startingAt: "Starting at …",
  },
  {
    title: "Growth Site + Content System",
    outcome: "A website + content workflow that compounds visibility and trust.",
    inclusions: [
      "Expanded service architecture + narrative flow.",
      "Resource/article structure for ongoing visibility.",
      "Core SEO setup + performance polish.",
      "Editorial workflow for consistent publishing.",
    ],
    bestFor: "Founders ready to grow authority without adding chaos.",
    startingAt: "Starting at …",
  },
  {
    title: "Automation Upgrade",
    outcome: "Follow-ups, intake, and scheduling handled with calm AI and clean systems.",
    inclusions: [
      "AI receptionist flow for first-touch intake.",
      "CRM follow-up logic and response templates.",
      "Automations for reminders and nurture.",
      "Team handoff + operating playbook.",
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
      "A focused strategic reset to define your next offer, message, and execution priorities.",
    bestFor: "Entrepreneurs at an inflection point who need crisp direction now.",
  },
  {
    title: "AI + Brand Alignment Intensive",
    duration: "90 min",
    summary:
      "Align your voice, client journey, and automation stack so operations scale cleanly.",
    bestFor: "Teams ready to grow without losing consistency.",
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

const webServices: Service[] = [
  {
    title: "Conversion Website Build",
    subtitle: "Web Design + Performance",
    tag: "Core Build",
    desc: "Fast, clear websites designed to turn qualified traffic into booked conversations.",
    bullets: [
      "Service-page architecture based on buyer intent.",
      "Performance-first build for mobile and local traffic.",
      "Conversion-focused copy structure.",
      "Bilingual support (EN/ES).",
    ],
    link: "/en/contact?topic=web-ai",
    btnText: "Start Website Build",
  },
  {
    title: "Local SEO + Content System",
    subtitle: "Visibility Layer",
    tag: "Growth",
    desc: "A practical local SEO and publishing system so your visibility compounds each month.",
    bullets: [
      "Local service page structure + metadata setup.",
      "Content workflow that matches your actual capacity.",
      "Measurement setup for calls/forms.",
      "Simple update rhythm your team can sustain.",
    ],
    link: "/en/contact?topic=local-seo",
    btnText: "Improve Visibility",
  },
  {
    title: "Financial Operations Support",
    subtitle: "With Fanny",
    tag: "Collaboration",
    desc: "Practical support for bookkeeping and tax readiness so operations stay clean as revenue grows.",
    bullets: [
      "Operational tax review (Canada/CRA focus).",
      "Basic financial process cleanup.",
      "Decision support for growth-stage planning.",
    ],
    link: "/en/contact?topic=other",
    btnText: "Discuss Collaboration",
    isCollab: true,
  },
];

const automationServices: Service[] = [
  {
    title: "AI Intake + Follow-up System",
    subtitle: "Automation",
    tag: "Client Flow",
    desc: "Automate first response, qualification, and follow-up so leads don&apos;t fall through.",
    bullets: [
      "Unified intake flow from forms and channels.",
      "Follow-up sequencing for unbooked leads.",
      "Booking handoff logic by service type.",
      "Response templates for speed + consistency.",
    ],
    link: "/en/contact?topic=web-ai",
    btnText: "Automate Intake",
  },
  {
    title: "CRM Cleanup + Automation Layer",
    subtitle: "Operations",
    tag: "Systems",
    desc: "Clean your CRM structure and connect the automations that remove repetitive admin work.",
    bullets: [
      "Pipeline cleanup and stage standardization.",
      "Task and reminder automation.",
      "Status tracking across lead lifecycle.",
      "Documentation for team handoff.",
    ],
    link: "/en/contact?topic=web-ai",
    btnText: "Upgrade Operations",
  },
];

const trainingServices: Service[] = [
  {
    title: "Workshops + Team Training",
    tag: "Enablement",
    desc: "Practical team sessions to align workflow, automation, and delivery standards.",
    bullets: [
      "AI workflow onboarding for teams.",
      "SOP training for intake and follow-up.",
      "Implementation workshops for new systems.",
      "Q&A for edge cases and execution blockers.",
    ],
    link: "/en/contact?topic=speaking-events",
    btnText: "Request Workshop",
  },
];

export default function ServicesPage() {
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
      className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]"
    >
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      <motion.section
        id="services-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 py-28 text-center bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)] to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-4">Services</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Website + Automation Systems for Growth
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Practical services for service businesses that need better visibility, cleaner operations, and consistent lead flow.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/en/services#packages" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            View Packages
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Ask a question
          </Link>
        </div>
      </motion.section>

      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <motion.section
        id="services-overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-16 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">Built for Practical Execution</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          The goal is simple: better leads, faster response times, and cleaner delivery.
          We combine web build, local SEO, and automation so growth is measurable and sustainable.
        </p>
      </motion.section>

      <motion.section
        id="packages"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Core Offers</p>
            <h2 className="section-title mb-3">Ways to Work Together</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Fixed-scope pathways designed for momentum, clarity, and consistent cashflow.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {productizedPackages.map((pkg) => (
              <ProductizedPackageCard key={pkg.title} item={pkg} locale="en" />
            ))}
          </div>
        </div>
      </motion.section>

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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">High-Touch</p>
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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Semi-Passive Layer</p>
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
        </div>
      </motion.section>

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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Web + Visibility</p>
            <h2 className="section-title mb-3">Website and Growth Systems</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Build the foundation first: offer clarity, conversion pages, and local visibility.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Automation</p>
            <h2 className="section-title mb-3">Client Flow + Operations</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Replace manual bottlenecks with simple automations your team can maintain.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {automationServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="operations"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 md:px-10 bg-gradient-to-t from-[color-mix(in_srgb,black_35%,var(--bg-base))] via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Enablement</p>
            <h2 className="section-title mb-3">Team Training + Implementation</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Workshops and implementation support to make sure systems actually get used.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-1">
            {trainingServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

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
          If you want cleaner systems and stronger lead flow, we can map your next step now.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/en/book" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Book a Strategy Call
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
              "Local SEO",
              "AI Automation",
              "CRM Systems",
              "Business Intensives",
            ],
          }),
        }}
      />
    </main>
  );
}

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
      {service.isCollab && (
        <div className="absolute top-0 right-0 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-lg border-b border-l border-[var(--color-gold)]/20">
          Collab
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">{service.tag}</p>

        <h3 className="text-xl font-heading text-[var(--color-gold)] mb-1">{service.title}</h3>

        {service.subtitle && (
          <p className="text-xs uppercase tracking-wider text-[var(--text-base)]/50 mb-2">{service.subtitle}</p>
        )}

        <p className="text-[var(--text-base)]/80 text-sm leading-relaxed mt-2">{service.desc}</p>
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
        <Link href={service.link} className="text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2 group text-[var(--color-gold)]">
          <span>{service.btnText}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

function ProductizedPackageCard({ item, locale }: { item: ProductizedPackage; locale: "en" | "es" }) {
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

      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)]/85">{item.startingAt}</p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10 flex flex-wrap gap-2">
        <Link href={`/${locale}/book`} className="btn-primary text-[11px] px-4 py-2">
          Book a Strategy Call
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
        <Link href={`/${locale}/resources#resource-waitlist`} className="btn-outline text-[11px] px-4 py-2">
          Join waitlist
        </Link>
      </div>
    </motion.article>
  );
}
