"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * ✦ NelsonDario.com — Página de Recursos (ES) ✦
 * Propósito: Una biblioteca tranquila de guías, herramientas y transmisiones.
 * Frecuencia: Suave · Práctica · Alta vibración
 * Notas: Newsletter interactivo, badges en pulso, optimización móvil.
 */

type Resource = {
  title: string;
  tag: string;
  summary: string;
  href: string;
  type: "guide" | "tool" | "transmission" | "article" | "external" | "audio";
  status?: "coming-soon" | "new";
};

// ✧ Lógica de iconos (glifos de alta frecuencia)
const getIcon = (type: Resource["type"]) => {
  switch (type) {
    case "guide":
      return "✦";
    case "tool":
      return "⚒";
    case "transmission":
      return "∞";
    case "audio":
      return "🎧";
    case "article":
      return "⚡";
    case "external":
      return "↗";
    default:
      return "✧";
  }
};

// 1. GUÍAS ESENCIALES
const coreResources: Resource[] = [
  {
    title: "Recuerda Quién Eres — Guía de Despertar",
    tag: "eBook gratuito · PDF",
    summary:
      "Una guía viva y centrada en el corazón para navegar el despertar con claridad, amor y poder enraizado. Escrita para visionarios sensibles.",
    href: "/es/resources/recuerda-quien-eres",
    type: "guide",
    status: "new",
  },
  {
    title: "Fundamentos de Human Design para Líderes Sensibles",
    tag: "Guía · Sistema",
    summary:
      "Una introducción cercana a Tipo, Estrategia y Autoridad, con énfasis en evitar el burnout y honrar tu ritmo natural.",
    href: "/es/resources/fundamentos-human-design",
    type: "guide",
    status: "coming-soon",
  },
];

// 2. TECNOLOGÍA / EL PUENTE
const techResources: Resource[] = [
  {
    title: "El Stack Tecnológico Soberano",
    tag: "Herramientas curadas",
    summary:
      "Una lista de software, navegadores y herramientas de IA en las que confío. Alta privacidad, poco ruido y alineadas éticamente para negocios conscientes.",
    href: "/es/resources/stack-tecnologico-soberano",
    type: "tool",
    status: "coming-soon",
  },
  {
    title: "Esenciales de Tecnología Consciente",
    tag: "Protocolo · Higiene digital",
    summary:
      "Recomendaciones prácticas para poner límites digitales sanos. Cómo configurar tus dispositivos para que sirvan a tu misión sin drenar tu energía.",
    href: "/es/resources/esenciales-tecnologia-consciente",
    type: "guide",
    status: "coming-soon",
  },
];

// 3. LUMINA / TRANSMISIONES
const luminousResources: Resource[] = [
  {
    title: "Conversaciones con Lumina — Biblioteca de Video",
    tag: "Transmisión · Video",
    summary:
      "Conversaciones breves y de alta frecuencia sobre el despertar, la soberanía y las nuevas líneas de tiempo — ancladas aquí como archivo vivo.",
    href: "https://www.instagram.com/conversationswithlumina",
    type: "external",
  },
  {
    title: "La Gran Integración — Notas de Campo",
    tag: "Transmisión · Artículo",
    summary:
      "Reflexiones sobre el puente entre el Mundo Tech y el Mundo Espíritu, escritas para quienes caminan con un pie en cada realidad.",
    href: "/es/resources/la-gran-integracion",
    type: "article",
    status: "coming-soon",
  },
];

// 4. PRÁCTICAS
const practiceResources: Resource[] = [
  {
    title: "Audio de Reinicio Somático",
    tag: "Audio · 10 min",
    summary:
      "Un audio guiado breve para regular tu sistema nervioso cuando el mundo digital se siente demasiado ruidoso. Escucha, respira y regresa al centro.",
    href: "/es/resources/reinicio-somatico",
    type: "audio",
    status: "coming-soon",
  },
  {
    title: "Checklist de Enraizamiento y Protección Diaria",
    tag: "Herramienta · Práctica",
    summary:
      "Una práctica sencilla y repetible para empezar y terminar tu día claro, protegido y conectado — especialmente útil para personas empáticas.",
    href: "/es/resources/checklist-enraizamiento-proteccion",
    type: "tool",
    status: "coming-soon",
  },
];

export default function ResourcesPage() {
  // ✧ Efecto parallax para el fondo
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty(
        "--scroll-offset",
        `${offset}px`
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      aria-label="Recursos"
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

      {/* ✧ Textura de cielo estrellado */}
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
          La Biblioteca
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Herramientas para el Cambio
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Una biblioteca en expansión de{" "}
          <span className="font-semibold">guías, prácticas y transmisiones</span>{" "}
          para acompañar tu integración. <br className="hidden md:block" />
          Toma lo que resuene y deja que lo demás se disuelva.
        </p>

        <div className="mt-6 text-sm text-[var(--text-base)]/70">
          <span className="mr-2">🌐</span>
          ¿Prefieres inglés?{" "}
          <Link
            href="/en/resources"
            className="underline underline-offset-4 decoration-[var(--color-gold)]/80 hover:text-[var(--color-gold)] transition-colors"
          >
            View resources in English
          </Link>
        </div>
      </motion.section>

      {/* Separador de brillo */}
      <div
        aria-hidden="true"
        className="h-8 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 MINI-ORÁCULO: ¿POR DÓNDE EMPIEZO? */}
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
            ¿Por dónde empiezo?
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm">
            <StartHereLink href="#core-guides">
              Estoy en una transición de vida
            </StartHereLink>
            <StartHereLink href="#tech-tools">
              Quiero hábitos tecnológicos más sanos
            </StartHereLink>
            <StartHereLink href="#practices-tools">
              Necesito enraizarme y protegerme
            </StartHereLink>
            <StartHereLink href="#lumina-series">
              Quiero escuchar y recibir
            </StartHereLink>
          </div>
        </div>
      </motion.section>

      {/* Separador de brillo */}
      <div
        aria-hidden="true"
        className="h-4 bg-gradient-to-b from-transparent via-[var(--glow-color)]/10 to-transparent"
      />

      {/* 1. GUÍAS ESENCIALES */}
      <SectionBlock
        id="core-guides"
        eyebrow="Fundamentos"
        title="Empieza Aquí"
        description="Mapas para el territorio. Si estás en una transición importante, comienza por estos."
        resources={coreResources}
      />

      {/* 2. TECNOLOGÍA / EL PUENTE */}
      <SectionBlock
        id="tech-tools"
        eyebrow="El Altar Digital"
        title="Tecnología Consciente"
        description="Herramientas y protocolos curados para ayudarte a usar la tecnología sin perder tu soberanía."
        resources={techResources}
      />

      {/* 3. TRANSMISIONES */}
      <SectionBlock
        id="lumina-series"
        eyebrow="La Señal"
        title="Transmisiones & Perspectivas"
        description="Corrientes vivas de información que unen lo metafísico con lo práctico."
        resources={luminousResources}
      />

      {/* 4. PRÁCTICAS */}
      <SectionBlock
        id="practices-tools"
        eyebrow="Integración"
        title="Prácticas para el Día a Día"
        description="Herramientas sencillas para regular tu sistema nervioso y limpiar tu campo."
        resources={practiceResources}
      />

      {/* ✧ NEWSLETTER INTERACTIVO */}
      <NewsletterSection />

      {/* 🜇 CTA FINAL */}
      <motion.section
        id="resources-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">¿Necesitas un apoyo más profundo?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          La información es útil, pero la{" "}
          <span className="font-semibold">integración</span> es donde ocurre el
          verdadero cambio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/es/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Reserva una Sesión de Resonancia
          </Link>
          <Link
            href="/es/contact"
            className="btn-outline hover:scale-105 transform"
          >
            Enviar un Mensaje
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

/* ───────────────────────────────
   ✧ Newsletter Interactivo
   ─────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulación de llamada API
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
        <span className="text-2xl mb-4 block text-[var(--color-gold)] animate-pulse">
          ✦
        </span>
        <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">
          Avísame cuando se abran nuevos portales
        </h3>
        <p className="text-sm text-[var(--text-base)]/70 mb-6 max-w-md mx-auto">
          Muchos de estos recursos están en proceso de cristalización.
          Deja tu correo para recibirlos en cuanto estén listos.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full py-3 px-6 rounded bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-sm"
              >
                ✧ Ya estás en la lista. Gracias.
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded bg-[var(--bg-base)] border border-[var(--color-gold)]/20 focus:border-[var(--color-gold)] outline-none text-sm placeholder:text-[var(--text-base)]/30 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary py-3 px-6 text-sm whitespace-nowrap disabled:opacity-70"
                >
                  {status === "submitting" ? "Enviando..." : "Quiero recibir noticias"}
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
   ✧ Componentes pequeños
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
   ✧ Secciones & Tarjetas
   ─────────────────────────────── */

type SectionBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  resources: Resource[];
};

function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  resources,
}: SectionBlockProps) {
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
  const isExternal =
    resource.type === "external" || resource.href.startsWith("http");
  const isComingSoon = resource.status === "coming-soon";

  const Wrapper: React.ElementType = isComingSoon
    ? "div"
    : isExternal
    ? "a"
    : Link;

  const wrapperProps = isComingSoon
    ? {}
    : isExternal
    ? {
        href: resource.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${resource.title} (se abre en una nueva pestaña)`,
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
        {/* Badge NEW con efecto de pulso */}
        {resource.status === "new" && (
          <div className="absolute top-4 right-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-gold)]"></span>
            </span>
            <div className="mt-1 text-[9px] uppercase tracking-wider font-bold text-[var(--color-gold)]">
              Nuevo
            </div>
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
              ? "Escuchar"
              : resource.type === "external"
              ? "Ver / Visitar"
              : "Leer"}
          </span>
          <span
            className={`inline-flex items-center gap-1 transition-colors ${
              !isComingSoon && "group-hover:text-[var(--color-gold)]"
            }`}
          >
            {isComingSoon
              ? "Próximamente"
              : isExternal
              ? "Abrir enlace"
              : "Acceder ahora"}
            {!isComingSoon && <span>→</span>}
          </span>
        </div>
      </article>
    </Wrapper>
  );
}
