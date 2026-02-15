"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SubscribeForm } from "@/components/SubscribeForm";

/**
 * ✦ Footer — NelsonDario.com ✦
 * Updates:
 * - Locale-aware logic with safer language switch
 * - External links are explicit anchors
 */

export function Footer() {
  const pathname = usePathname() || "/en";
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";
  const isSpanish = locale === "es";

  const currentYear = new Date().getFullYear();
  // ✦ Language switch: swap /en <-> /es while preserving the rest of the path
  // Examples:
  // /en/services -> /es/services
  // /es/contact  -> /en/contact
  // /en          -> /es
  // /            -> /es or /en (but root should redirect anyway)
  const stripLocale = (p: string) => p.replace(/^\/(en|es)(?=\/|$)/, "");
  const basePath = stripLocale(pathname) || "/";
  const languageSwitchHref = `${isSpanish ? "/en" : "/es"}${basePath === "/" ? "" : basePath}`;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden text-[var(--text-base)]
                 border-t border-[color-mix(in_srgb,var(--color-gold)_20%,transparent)]
                 bg-[color-mix(in_srgb,var(--bg-base)_95%,transparent)]
                 transition-all duration-700 ease-out"
      style={{ boxShadow: "inset 0 0 40px rgba(242,184,101,0.08)" }}
    >
      {/* ✦ Auric Wave Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-[auricWave_16s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.12), transparent 70%)",
        }}
      />

      {/* ✦ Sitewide CTA Strip */}
      <div className="relative border-b border-[color-mix(in_srgb,var(--color-gold)_18%,transparent)] bg-[color-mix(in_srgb,var(--bg-base)_88%,black)]/70">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-sm md:text-base text-[var(--text-base)]/85">
            {isSpanish
              ? "¿Quieres sistemas calmados y próximos pasos claros? Empieza aquí."
              : "Want calm systems and clear next steps? Start here."}
          </p>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <Link href={`/${locale}/book`} className="btn-primary text-[11px] px-4 py-2">
              {isSpanish ? "Reservar" : "Book"}
            </Link>
            <a href="#subscribe-lumina" className="btn-outline text-[11px] px-4 py-2">
              {isSpanish ? "Suscribirme" : "Subscribe"}
            </a>
          </div>
        </div>
      </div>

      {/* ✦ Main Grid */}
      <div className="relative container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 — Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/${locale}`}
            className="text-[var(--color-gold)] font-heading text-xl hover:text-[color-mix(in_srgb,var(--color-gold)_80%,#fff)] transition-colors"
          >
            Nelson Dario
          </Link>

          <p className="mt-2 text-sm opacity-80">
            {isSpanish ? "Código · Conciencia · Coherencia" : "Code · Consciousness · Coherence"}
          </p>

          {/* Language switch */}
          <Link
            href={languageSwitchHref}
            className="text-xs opacity-70 hover:text-[var(--color-gold)] transition-colors mt-2 block"
          >
            {isSpanish ? "View site in English" : "Ver sitio en Español"}
          </Link>

          <p className="mt-3 text-[0.75rem] opacity-70">
            {isSpanish ? "Amor · Confianza · Energía" : "Love · Trust · Energy"}
          </p>
        </motion.div>

        {/* Column 2 — Navigation */}
        <motion.nav
          aria-label={isSpanish ? "Navegación del pie de página" : "Footer navigation"}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-2 text-sm"
        >
          {[
            { href: "/services", en: "Services", es: "Servicios" },
            { href: "/resources", en: "Resources", es: "Recursos" },
            { href: "/conversations", en: "Conversations with Lumina", es: "Conversaciones con Lumina" },
            { href: "/contact", en: "Contact", es: "Contacto" },
          ].map((item) => {
            const url = `/${locale}${item.href}`;
            const active = pathname === url || (pathname.startsWith(url) && item.href !== "/");

            return (
              <Link
                key={item.href}
                href={url}
                className={`block relative hover-field hover:text-[color-mix(in_srgb,var(--color-gold)_80%,#fff)]
                  transition-colors ${
                    active ? "text-[var(--color-gold)] font-semibold" : "text-[var(--text-base)]/80"
                  }`}
              >
                {isSpanish ? item.es : item.en}
              </Link>
            );
          })}

        </motion.nav>

        {/* Column 3 — Social + Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <div className="flex gap-5">
            {[
              { href: "https://www.instagram.com/nelsondario.co", icon: "bi-instagram", label: "Instagram" },
              { href: "https://www.tiktok.com/@conversationswithlumina", icon: "bi-tiktok", label: "TikTok" },
              { href: "https://www.youtube.com/@NelsonDario", icon: "bi-youtube", label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-[var(--color-gold)] hover:text-[color-mix(in_srgb,var(--color-gold)_80%,#fff)]
                           transition-transform transform hover:scale-110"
                aria-label={label}
              >
                <i className={`bi ${icon} text-2xl`} aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="text-xs opacity-70 text-center md:text-right">
            {isSpanish ? "Sígueme y únete a la conversación" : "Follow and join the conversation"}
          </p>

          <div className="w-full max-w-sm mt-2" id="subscribe-lumina">
            <SubscribeForm
              label={isSpanish ? "Suscríbete a Lumina" : "Subscribe to Lumina"}
              placeholder={isSpanish ? "Tu correo electrónico" : "Your email address"}
              buttonText={isSpanish ? "Unirme" : "Join"}
            />
          </div>
        </motion.div>
      </div>

      {/* ✦ Divider & Legal */}
      <div className="border-t border-[color-mix(in_srgb,var(--color-gold)_15%,transparent)] mt-10 pt-6 text-center text-xs opacity-80 space-y-2 transition-colors">
        <p>
          © {currentYear} Nelson Dario. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
        </p>

        <div className="flex justify-center gap-4">
          <Link href={isSpanish ? "/es/privacy" : "/en/privacy"}>{isSpanish ? "Privacidad" : "Privacy Policy"}</Link>
          <Link href={isSpanish ? "/es/terms" : "/en/terms"}>{isSpanish ? "Términos" : "Terms of Use"}</Link>
        </div>

        <p className="text-[0.7rem] opacity-60 mt-3">
          {isSpanish ? "Amor · Confianza · Energía" : "Love · Trust · Energy"}
        </p>

        <p className="text-[0.7rem] mt-2 opacity-50">✧ Anchored in Love · Guided by Light · Rooted in Truth ✧</p>
      </div>

      {/* ✦ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nelson Dario",
            url: "https://nelsondario.com",
            sameAs: [
              "https://www.instagram.com/nelsondario.co",
              "https://www.tiktok.com/@conversationswithlumina",
              "https://www.youtube.com/@NelsonDario",
            ],
          }),
        }}
      />
    </motion.footer>
  );
}
