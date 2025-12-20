"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Contact Page (EN) ✦
 * Frequency: Truth · Beauty · Sovereignty
 * Purpose: A calm portal to connect, inquire, and book next steps.
 * Updates: Aligned "Vessel/Map/Soul" language & Dynamic Empathy logic.
 */

type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Normalize ?topic= from links into our internal values.
 * Maps generic URL terms to our specific "Vessel/Map/Soul" keys.
 */
function normalizeTopicFromUrl(raw: string | null): string {
  if (!raw) return "";
  const value = raw.toLowerCase();

  if (value.includes("web") || value.includes("ai") || value.includes("tech")) return "vessel_tech";
  if (value.includes("design") || value.includes("human")) return "map_hd";
  if (value.includes("qhht") || value.includes("healing") || value.includes("regression")) return "soul_qhht";
  if (value.includes("conversations") || value.includes("podcast")) return "conversations";
  if (value.includes("speak") || value.includes("event")) return "speaking";

  return "";
}

export default function ContactClient() {
  // ✧ Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchParams = useSearchParams();
  const rawTopic = searchParams.get("topic");
  const normalizedFromUrl = normalizeTopicFromUrl(rawTopic);

  const [topic, setTopic] = useState<string>(normalizedFromUrl);
  const [status, setStatus] = useState<FormStatus>("idle");

  // Keep topic in sync if the URL query changes
  useEffect(() => {
    setTopic(normalizedFromUrl);
  }, [normalizedFromUrl]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const company = formData.get("company");
    if (company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      form.reset();
      setTopic("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // ✧ Dynamic Placeholders based on "Vessel/Map/Soul" logic
  const getPlaceholder = () => {
    switch (topic) {
      case "vessel_tech":
        return "Tell me about your business or project. What feels heavy or chaotic in your current system? What are you hoping to automate or clarify?";
      case "map_hd":
        return "Where are you feeling stuck or burned out? Are you looking for a general reading or help with a specific decision?";
      case "soul_qhht":
        return "Share a little about your journey. What deep questions or physical/emotional patterns are you hoping to explore?";
      case "conversations":
        return "Tell me about your platform or community. What themes are you exploring, and how do you see us weaving together?";
      case "speaking":
        return "Tell me about the event, the audience, and the date. What is the frequency you want to anchor in the room?";
      default:
        return "Tell me where you are right now, what you’re feeling called to shift, and any context that feels important.";
    }
  };

  return (
    <main
      aria-label="Contact"
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      {/* ✧ Golden parallax background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.15), transparent 70%)",
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
        id="contact-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          Resonance & Inquiry
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          A Space for Alignment
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Whether you are ready to build the{" "}
          <span className="font-semibold text-[var(--color-gold)]">Vessel</span>, map the{" "}
          <span className="font-semibold text-[var(--color-gold)]">Path</span>, or heal the{" "}
          <span className="font-semibold text-[var(--color-gold)]">Soul</span>—I am here to listen.
        </p>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 CONTACT LAYOUT */}
      <motion.section
        id="contact-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 py-16 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1.5fr,1fr] items-start">
          {/* ✦ LEFT: FORM CARD */}
          <div
            className="p-8 md:p-10 rounded-2xl border border-[var(--color-gold)]/20
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/90
                       shadow-md backdrop-blur-md relative overflow-hidden"
          >
            {/* Subtle top glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent opacity-50" />

            <h2 className="section-title mb-4 text-left">Send a Message</h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-8 leading-relaxed">
              Share a bit about yourself. This message comes directly to me, not a support team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Honeypot */}
              <div className="hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Source Tracking */}
              <input type="hidden" name="source" value={normalizedFromUrl || ""} />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-base)]/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-[var(--text-base)]/20
                               bg-[var(--bg-base)]/80 px-4 py-3 text-sm
                               focus:outline-none focus:border-[var(--color-gold)]
                               focus:ring-1 focus:ring-[var(--color-gold)]/50
                               transition-all placeholder:text-[var(--text-base)]/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-base)]/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="best@email.com"
                    className="w-full rounded-lg border border-[var(--text-base)]/20
                               bg-[var(--bg-base)]/80 px-4 py-3 text-sm
                               focus:outline-none focus:border-[var(--color-gold)]
                               focus:ring-1 focus:ring-[var(--color-gold)]/50
                               transition-all placeholder:text-[var(--text-base)]/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-base)]/70 mb-2"
                >
                  What resonates most?
                </label>

                <div className="relative">
                  <select
                    id="topic"
                    name="topic"
                    className="w-full rounded-lg border border-[var(--text-base)]/20
                               bg-[var(--bg-base)]/80 px-4 py-3 text-sm appearance-none
                               focus:outline-none focus:border-[var(--color-gold)]
                               focus:ring-1 focus:ring-[var(--color-gold)]/50
                               transition-all cursor-pointer"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a path...
                    </option>
                    <option value="vessel_tech">The Vessel (Web & AI Systems)</option>
                    <option value="map_hd">The Map (Human Design)</option>
                    <option value="soul_qhht">The Soul (QHHT / Deep Healing)</option>
                    <option value="conversations">Conversations with Lumina</option>
                    <option value="speaking">Speaking / Collaboration</option>
                    <option value="other">Just saying hello</option>
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-base)]/50 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-base)]/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/80 px-4 py-3 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]/50
                             resize-vertical placeholder:text-[var(--text-base)]/30 transition-all"
                  placeholder={getPlaceholder()}
                />
              </div>

              <div>
                <label
                  htmlFor="how"
                  className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-base)]/70 mb-2"
                >
                  How did you find me?{" "}
                  <span className="text-[var(--text-base)]/50 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="how"
                  name="how"
                  type="text"
                  placeholder="Friend, social media, podcast..."
                  className="w-full rounded-lg border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/80 px-4 py-3 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]/50
                             transition-all placeholder:text-[var(--text-base)]/30"
                />
              </div>

              <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="btn-primary hover:scale-105 transform hover:animate-pulseGlow
                             disabled:opacity-60 disabled:cursor-not-allowed py-3 px-8 min-w-[160px]"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent"
                    : "Send Message"}
                </button>

                <div aria-live="polite" className="min-h-[1.25rem] flex items-center flex-1 justify-end">
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xs text-emerald-400 flex items-center gap-2"
                      >
                        <span className="text-lg">✓</span>
                        Received. I will be in touch soon.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xs text-red-400"
                      >
                        Something went wrong. Please email directly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </div>

          {/* ✦ RIGHT: INFO SIDEBAR */}
          <aside
            className="p-8 rounded-2xl border border-[var(--text-base)]/10
                       bg-[var(--bg-secondary)]/80 shadow-sm flex flex-col gap-8 h-fit"
          >
            {/* Direct Contact */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[var(--color-gold)] text-lg">✦</span>
                <h2 className="text-xs font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70">
                  Direct Contact
                </h2>
              </div>

              <p className="text-sm text-[var(--text-base)]/80 mb-4">
                Sometimes email feels safer. You can reach me directly here:
              </p>

              <div className="space-y-3 text-sm">
                <p className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-base)]/50 mb-0.5">Email</span>
                  <a
                    href="mailto:info@nelsondario.com"
                    className="hover:text-[var(--color-gold)] transition-colors font-medium"
                  >
                    info@nelsondario.com
                  </a>
                </p>

                <p className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-base)]/50 mb-0.5">
                    Response Time
                  </span>
                  <span className="text-[var(--text-base)]/80">Typically within 48 hours (Mon-Fri)</span>
                </p>

                <p className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-base)]/50 mb-0.5">Location</span>
                  <span className="text-[var(--text-base)]/80">Toronto, Canada (ET)</span>
                </p>
              </div>
            </div>

            <div className="h-[1px] w-full bg-[var(--text-base)]/10" />

            {/* Quick Connect */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-base)]/70 mb-4">
                Social Portals
              </h3>
              <ToContactButtons />
            </div>

            <div className="h-[1px] w-full bg-[var(--text-base)]/10" />

            {/* Resonance Check */}
            <div className="text-sm text-[var(--text-base)]/75 space-y-3">
              <p className="font-semibold text-[var(--text-base)]/90">Ready to dive in?</p>
              <p className="leading-relaxed">
                If you know you are ready to start, you don&apos;t need to wait for an email reply.
              </p>
              <Link
                href="/en/book"
                className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:underline underline-offset-4 text-xs uppercase tracking-wider font-semibold group"
              >
                <span>Book a Resonance Check</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
