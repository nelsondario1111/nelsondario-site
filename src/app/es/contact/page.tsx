"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Página de Contacto (ES) ✦
 * Frecuencia: Verdad · Belleza · Soberanía
 * Propósito: Un portal tranquilo para conectar, preguntar y dar el siguiente paso.
 */

export default function ContactPageEs() {
  // ✧ Efecto de parallax para el fondo
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

    // Honeypot anti-bots
    const company = formData.get("company");
    if (company) {
      // Probable bot — marcamos como éxito pero no hacemos nada
      setStatus("success");
      form.reset();
      return;
    }

    try {
      // TODO: conectar con tu endpoint real (por ejemplo /api/contact)
      // const res = await fetch("/api/contact", { method: "POST", body: formData });
      // if (!res.ok) throw new Error("Network response was not ok");

      // Por ahora: simular éxito
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
      aria-label="Contacto"
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      {/* ✧ Fondo dorado con parallax */}
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

      {/* ✧ Textura de estrellas */}
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
          Contacto · Resonancia
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Abramos la Conversación
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Ya sea que tengas curiosidad por{" "}
          <span className="font-semibold">Web &amp; IA</span>,{" "}
          <span className="font-semibold">Diseño Humano</span> o{" "}
          <span className="font-semibold">trabajo de sanación profunda</span>, este
          es el espacio para compartir dónde estás y qué sientes que es el
          siguiente paso en tu camino.
        </p>
      </motion.section>

      {/* Brillo divisorio */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 LAYOUT DE CONTACTO */}
      <motion.section
        id="contact-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 py-16 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1.5fr,1fr] items-start">
          {/* Tarjeta de formulario */}
          <div
            className="p-8 rounded-2xl border border-[var(--color-gold)]/20
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)/0.9]
                       shadow-md backdrop-blur-md"
          >
            <h2 className="section-title mb-4 text-left">Enviar un Mensaje</h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-8">
              Cuéntame un poco sobre ti, lo que estás buscando y cómo sientes que
              te puedo acompañar. Te responderé con los siguientes pasos y, si
              resuena, con un enlace para agendar una sesión más profunda.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Formulario de contacto"
            >
              {/* Honeypot para bots */}
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
                    Nombre
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
                  ¿Sobre qué te estás contactando?
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
                    Selecciona una opción
                  </option>
                  <option value="web-ai">
                    Sitio web / sistemas de IA para mi proyecto/negocio
                  </option>
                  <option value="human-design">
                    Sesión / lectura de Diseño Humano
                  </option>
                  <option value="healing-qhht">
                    QHHT / regresión / sanación profunda
                  </option>
                  <option value="speaking-events">
                    Charla, retiro o colaboración
                  </option>
                  <option value="other">Otra cosa</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase
                             text-[var(--text-base)]/70 mb-2"
                >
                  Mensaje
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
                  placeholder="Cuéntame dónde estás ahora, qué sientes que quieres transformar y cualquier contexto que sea importante."
                />
              </div>

              <div>
                <label
                  htmlFor="how"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase
                             text-[var(--text-base)]/70 mb-2"
                >
                  ¿Cómo me encontraste?{" "}
                  <span className="text-[var(--text-base)]/50">(opcional)</span>
                </label>
                <input
                  id="how"
                  name="how"
                  type="text"
                  className="w-full rounded-md border border-[var(--text-base)]/20
                             bg-[var(--bg-base)]/90 px-3 py-2 text-sm
                             focus:outline-none focus:border-[var(--color-gold)]
                             focus:ring-1 focus:ring-[var(--color-gold)]"
                  placeholder="Amigo/a, evento, redes sociales, podcast, etc."
                />
              </div>

              <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary hover:scale-105 transform hover:animate-pulseGlow
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                </button>

                <div
                  aria-live="polite"
                  className="min-h-[1.25rem] flex items-center"
                >
                  {status === "success" && (
                    <p className="text-xs text-emerald-700">
                      Gracias — he recibido tu mensaje. Te responderé pronto.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-xs text-red-600">
                      Algo salió mal. También puedes escribir a{" "}
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
                Tu mensaje es confidencial. No comparto tus datos con terceros ni te
                agrego a ninguna lista de correo sin tu consentimiento claro.
              </p>
            </form>
          </div>

          {/* Aside / contacto directo */}
          <aside
            className="p-6 md:p-7 rounded-2xl border border-[var(--text-base)]/15
                       bg-[var(--bg-secondary)]/95 shadow-sm flex flex-col gap-6"
          >
            <div>
              <h2 className="text-sm font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3">
                Contacto Directo
              </h2>
              <p className="text-sm text-[var(--text-base)]/80 mb-3">
                Si prefieres, también puedes escribirme directamente o usar los
                botones de abajo para conectar.
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
                  <span className="font-semibold">Ubicación:</span> Toronto, Canadá (ET)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-base)]/70 mb-3">
                Conexión Rápida
              </h3>
              <ToContactButtons />
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 text-sm text-[var(--text-base)]/75 space-y-2">
              <p className="font-semibold text-[var(--text-base)]/85">
                ¿Aún no tienes claro lo que necesitas?
              </p>
              <p>
                También puedes empezar con una{" "}
                <Link
                  href="/es/book"
                  className="underline underline-offset-4 decoration-[var(--color-gold)]/80"
                >
                  Sesión de Resonancia
                </Link>{" "}
                — una conversación corta para sentir si hay alineación y hacia dónde
                dirigirnos.
              </p>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
