"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/nelson-samaniego0/30min";

export default function BookPageEs() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main
      aria-label="Reservar llamada"
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
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      <motion.section
        id="book-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          Reservas
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Reserva una llamada estrategica
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Esta llamada sirve para revisar tu web, flujo de leads y prioridades de automatizacion.
          Definimos tu mejor siguiente paso.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/es/services#packages" className="btn-outline hover:scale-105 transform">
            Ver paquetes
          </Link>
          <Link href="/es/contact" className="btn-outline hover:scale-105 transform">
            Prefieres escribir por correo?
          </Link>
        </div>
      </motion.section>

      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      <motion.section
        id="book-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 pb-20 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr,0.9fr] items-start">
          <div
            className="rounded-2xl border border-[var(--color-gold)]/25
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/90
                       shadow-md backdrop-blur-md p-4 md:p-6"
          >
            <h2 className="section-title mb-3 text-left">Elige un horario</h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-4">
              El calendario muestra disponibilidad actual en tu zona horaria.
              Al reservar, recibiras confirmacion por correo con todos los detalles.
            </p>

            <div
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "760px" }}
            />

            <p className="mt-3 text-[11px] text-[var(--text-base)]/60">
              Si el calendario no carga, abrelo directamente{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-[var(--color-gold)]/80"
              >
                en este enlace
              </a>
              .
            </p>
          </div>

          <aside
            className="rounded-2xl border border-[var(--text-base)]/15
                       bg-[var(--bg-secondary)]/95 shadow-sm p-6 md:p-7 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-sm font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3">
                Que revisamos en la llamada
              </h3>
              <ul className="text-sm text-[var(--text-base)]/80 space-y-2">
                <li>1. Tu oferta actual y flujo de clientes.</li>
                <li>2. Prioridades de sitio web para convertir mejor.</li>
                <li>3. Oportunidades de automatizacion para intake y seguimiento.</li>
                <li>4. Paquete y timeline recomendados para ejecutar.</li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 space-y-3 text-sm text-[var(--text-base)]/80">
              <p className="font-semibold text-[var(--text-base)]/85">Notas:</p>
              <ul className="space-y-2">
                <li>1. Las llamadas son online salvo coordinacion presencial en Toronto.</li>
                <li>2. Tipo de sesion y duracion se ven en Calendly.</li>
                <li>
                  3. Si no ves un horario compatible, envia un{" "}
                  <Link
                    href="/es/contact"
                    className="underline underline-offset-4 decoration-[var(--color-gold)]/80"
                  >
                    mensaje
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 text-xs text-[var(--text-base)]/60 space-y-2">
              <p>Todas las llamadas son confidenciales y enfocadas en siguientes pasos practicos.</p>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
