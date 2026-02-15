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
    title: "Checklist de Sistemas Calmados",
    tag: "Checklist · EN/ES",
    summary:
      "Una guía práctica para ordenar operaciones, cuidar tu energía y mantener entregas claras cada semana.",
    href: "#calm-systems-checklist",
    mode: "internal",
  },
  {
    title: "Calculadora de Capacidad de Oferta",
    tag: "Calculadora",
    summary:
      "Estima lo que puedes sostener por mes antes de crecer de una forma que sature tu sistema nervioso.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Guía de Claridad del Journey de Cliente",
    tag: "Guía",
    summary:
      "Mapea tu proceso de lead a cliente de forma simple para que cada paso sea claro y coherente.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Partner Picks (Herramientas Conscientes)",
    tag: "Links de partners",
    summary:
      "Una selección mínima de herramientas y ecosistemas aliados. Algunos links pueden incluir afiliación.",
    href: "https://lumaeconomy.com",
    mode: "external",
  },
];

const downloads: ResourceItem[] = [
  {
    title: "Kit Web Bilingüe",
    tag: "Starter Kit",
    summary: "Estructura y textos para lanzar EN/ES sin fricción.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Template para Contratistas",
    tag: "Template",
    summary: "Plantilla moderna para posicionar local y convertir.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Planos de Automatización con IA",
    tag: "Blueprints",
    summary: "Flujos para captación, seguimiento y gestión.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
];

const library: ResourceItem[] = [
  {
    title: "Biblioteca de Artículos",
    tag: "Artículos",
    summary:
      "Notas largas sobre coherencia, estructura de negocio e integración espiritual para fundadores sensibles.",
    href: "#calm-systems-checklist",
    mode: "waitlist",
  },
  {
    title: "Conversaciones con Lumina — Destacados",
    tag: "Destacados",
    summary:
      "Selección de conversaciones para claridad, soberanía y acción enraizada.",
    href: "/es/conversations",
    mode: "internal",
  },
  {
    title: "Field Notes: Tecnología + Espíritu",
    tag: "Editorial",
    summary:
      "Un puente vivo entre sistemas, estrategia y consciencia para la nueva economía.",
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
      aria-label="Recursos"
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
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">La Biblioteca</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Recursos para Crecer con Calma
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Soporte práctico en tres capas: <span className="font-semibold">Herramientas</span>,{" "}
          <span className="font-semibold">Descargables</span> y <span className="font-semibold">Biblioteca</span>.
        </p>
      </motion.section>

      <div aria-hidden="true" className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <ResourceSection
        id="tools"
        eyebrow="Soporte Operativo"
        title="Herramientas"
        description="Checklists, calculadoras y guías para ejecutar con más claridad."
        items={tools}
      />

      <ResourceSection
        id="downloads"
        eyebrow="Activos"
        title="Descargables"
        description="Starter kits y recursos de implementación para avanzar entre sesiones."
        items={downloads}
      />

      <ResourceSection
        id="library"
        eyebrow="Señal"
        title="Biblioteca"
        description="Artículos y destacados de Conversaciones con Lumina para integrar y actuar."
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
          <h2 className="section-title mb-3">Recibe el “Calm Systems Checklist” (EN/ES)</h2>
          <p className="text-sm md:text-base text-[var(--text-base)]/75 mb-6">
            Accede al checklist y a nuevas publicaciones mediante la suscripción de Lumina.
          </p>

          <div className="mx-auto max-w-xl text-left" id="subscribe-lumina-leadmagnet">
            <SubscribeForm
              label="Suscríbete a Lumina"
              placeholder="Tu correo electrónico"
              buttonText="Quiero el checklist"
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
        <h2 className="section-title mb-4">¿Quieres guía directa?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Si quieres implementar esto con prioridades limpias, podemos definir tu siguiente paso juntos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/es/book" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Reservar Sesión de Resonancia
          </Link>
          <Link href="/es/contact" className="btn-outline hover:scale-105 transform">
            Hacer una pregunta
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
        "aria-label": `${item.title} (se abre en una nueva pestaña)`,
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
          {isWaitlist ? "Unirme a la lista" : isExternal ? "Abrir link" : "Abrir"}
        </div>
      </article>
    </Wrapper>
  );
}
