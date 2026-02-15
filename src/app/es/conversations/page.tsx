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
    title: "Bases para Sitios Rápidos",
    tag: "Web",
    summary:
      "Lo esencial para velocidad, claridad y conversión en un sitio de servicios.",
    href: "/es/resources/local-seo-checklist",
  },
  {
    title: "SEO Local que Sí Genera Leads",
    tag: "SEO Local",
    summary:
      "Señales simples en página y perfil local para atraer clientes sin agotarte.",
    href: "/es/resources/local-seo-checklist",
  },
  {
    title: "Automatización Calm de Intake + Seguimiento",
    tag: "Sistemas",
    summary:
      "Cómo reducir leads perdidos con intake claro y seguimiento consistente.",
    href: "/es/resources/calm-systems-workflow",
  },
  {
    title: "Herramientas de IA que Sí Uso",
    tag: "Stack IA",
    summary:
      "Lista práctica de herramientas para entregar mejor y operar con menos fricción.",
    href: "/es/resources/ai-tools-i-use",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Renovación Web para Contratista",
    context: "Sitio desactualizado, baja velocidad móvil y poca visibilidad local.",
    outcome:
      "Nueva arquitectura, mejora de rendimiento y páginas de servicio más claras para captar leads.",
  },
  {
    title: "Automatización de Captación",
    context: "Entraban leads por varios canales con seguimiento inconsistente.",
    outcome:
      "Sistema unificado de intake y seguimiento para reducir conversaciones perdidas.",
  },
  {
    title: "Claridad de Oferta Bilingüe",
    context: "Mensajes divididos entre EN/ES y duplicación de trabajo en cada lanzamiento.",
    outcome:
      "Sistema reutilizable de páginas y copy EN/ES para actualizar más rápido y con coherencia.",
  },
];

export default function InsightsPageEs() {
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
      aria-label="Biblioteca"
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
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Biblioteca</p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Notas Prácticas para Crecer con Calma
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Guías reales sobre <span className="font-semibold">sitios web</span>,
          <span className="font-semibold"> SEO local</span>,
          <span className="font-semibold"> automatizaciones con IA</span> y sistemas limpios.
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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Áreas</p>
            <h2 className="section-title mb-3">Qué Publico Aquí</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
              Notas cortas y accionables para aplicar de inmediato.
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
                    Abrir
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
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Casos</p>
            <h2 className="section-title mb-3">Snapshots de Trabajo Real</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 text-sm md:text-base">
              Ejemplos concretos de resultados en negocios de servicios y contratistas.
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
                  <span className="font-semibold text-[var(--text-base)]/85">Contexto:</span> {item.context}
                </p>
                <p className="text-sm text-[var(--text-base)]/75">
                  <span className="font-semibold text-[var(--text-base)]/85">Resultado:</span> {item.outcome}
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
        <h2 className="section-title mb-4">¿Quieres que lo construyamos contigo?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Podemos definir el paquete más rápido y el plan de implementación para tu negocio.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="/es/services#packages" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Ver paquetes
          </Link>
          <Link href="/es/contact" className="btn-outline hover:scale-105 transform">
            Hacer una pregunta
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <ToContactButtons />
        </div>
      </motion.section>
    </main>
  );
}
