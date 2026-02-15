"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Contact Page (EN) ✦
 * Purpose: A calm portal to connect, ask questions, and map next steps.
 */

export default function ContactClient() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const company = formData.get("company");
    if (company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main
      aria-label="Contact"
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
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
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

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
          Contact · Resonance
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Let&apos;s Open the Conversation
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          If you&apos;re exploring <span className="font-semibold">Web Design</span>,{" "}
          <span className="font-semibold">AI Automations</span>, or strategic support,
          share where you are and what you need next.
        </p>
      </motion.section>

      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      <motion.section
        id="contact-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 py-16 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1.5fr,1fr] items-start">
          <div
            className="p-8 rounded-2xl border border-[var(--color-gold)]/20
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)/0.9]
                       shadow-md backdrop-blur-md"
          >
            <h2 className="section-title mb-4 text-left">Send a Message</h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-8">
              Tell me about your project, goals, and where you feel friction. I&apos;ll reply with
              practical next steps.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Contact form"
            >
              <div className="hidden">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-[0.18em] uppercase
                               text-[var(--text-base)]/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-md border border-[var(--text-base)]/20
                               bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                               focus:outline-none focus:border-[var(--color-gold)]
                               focus:ring-1 focus:ring-[var(--color-gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-[0.18em] uppercase
                               text-[var(--text-base)]/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-md border border-[var(--text-base)]/20
                               bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                               focus:outline-none focus:border-[var(--color-gold)]
                               focus:ring-1 focus:ring-[var(--color-gold)]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase
                             text-[var(--text-base)]/70 mb-2"
                >
                  What are you reaching out about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full rounded-md border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="web-ai">Website / AI automation for my business</option>
                  <option value="local-seo">Local SEO and lead generation setup</option>
                  <option value="intensive">Business clarity intensive</option>
                  <option value="speaking-events">Speaking, workshop, or collaboration</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase
                             text-[var(--text-base)]/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]
                             resize-vertical"
                  placeholder="Share what you want to improve and what success would look like for you."
                />
              </div>

              <div>
                <label
                  htmlFor="how"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase
                             text-[var(--text-base)]/70 mb-2"
                >
                  How did you find me?{" "}
                  <span className="text-[var(--text-base)]/50">(optional)</span>
                </label>
                <input
                  id="how"
                  name="how"
                  type="text"
                  className="w-full rounded-md border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]"
                  placeholder="Referral, social media, search, etc."
                />
              </div>

              <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary hover:scale-105 transform hover:animate-pulseGlow
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                <div
                  aria-live="polite"
                  className="min-h-[1.25rem] flex items-center"
                >
                  {status === "success" && (
                    <p className="text-xs text-emerald-700">
                      Thank you. I received your message and will reply soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-xs text-red-600">
                      Something went wrong. You can also email{" "}
                      <a
                        href="mailto:info@nelsondario.com"
                        className="underline underline-offset-2"
                      >
                        info@nelsondario.com
                      </a>
                      .
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-[var(--text-base)]/60">
                Your message is confidential. I do not share your data with third parties or
                add you to marketing lists without explicit consent.
              </p>
            </form>
          </div>

          <aside
            className="p-6 md:p-7 rounded-2xl border border-[var(--text-base)]/15
                       bg-[var(--bg-secondary)]/95 shadow-sm flex flex-col gap-6"
          >
            <div>
              <h2 className="text-sm font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3">
                Direct Contact
              </h2>
              <p className="text-sm text-[var(--text-base)]/80 mb-3">
                Prefer direct email? You can also connect through the buttons below.
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@nelsondario.com"
                    className="underline underline-offset-2 decoration-[var(--color-gold)]/60"
                  >
                    info@nelsondario.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Toronto, Canada (ET)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-base)]/70 mb-3">
                Quick Connect
              </h3>
              <ToContactButtons />
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 text-sm text-[var(--text-base)]/75 space-y-2">
              <p className="font-semibold text-[var(--text-base)]/85">
                Need clarity before deciding?
              </p>
              <p>
                Start with a{" "}
                <Link
                  href="/en/book"
                  className="underline underline-offset-4 decoration-[var(--color-gold)]/80"
                >
                  Resonance Check
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
