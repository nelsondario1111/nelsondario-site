"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { navLinks } from "@/data/navigation";

type NavVariant = "default" | "accent" | "lumina";
type NavLinkItem = { href: string; label: string; external?: boolean };

const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export function NavBar({ variant = "default" }: { variant?: NavVariant }) {
  const pathname = usePathname() || "/en";
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";

  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const [portalKey, setPortalKey] = useState(0);
  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setPortalKey((k) => k + 1);
      return next;
    });
  };

  /* ✦ Data Setup */
  const allLinks = useMemo(() => navLinks[locale] as NavLinkItem[], [locale]);

  /* ✦ Smart Hide / Show + scrolled state */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    setIsScrolled(latest > 18);

    if (latest < 60 || isOpen) {
      setIsHidden(false);
    } else if (diff > 10) {
      setIsHidden(true);
    } else if (diff < -10) {
      setIsHidden(false);
    }
  });

  /* ✦ Lock background scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const variantClasses: Record<NavVariant, string> = {
    default: "text-[var(--color-gold)]",
    accent: "text-[var(--color-gold)] drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.4)]",
    lumina: "text-[var(--color-gold)] [text-shadow:0_0_12px_rgba(var(--gold-rgb),0.4)]",
  };

  return (
    <motion.nav
      role="navigation"
      aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
      initial={false}
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 w-full z-[120]
                 border-b border-[var(--color-gold)]/10
                 bg-[color-mix(in_srgb,var(--bg-base)_85%,black)]
                 backdrop-blur-xl"
    >
      {/* ✦ Sacred-tech geometry veil (very subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background: "radial-gradient(rgba(var(--gold-rgb),0.22) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(circle at 50% 0%, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 0%, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
        }}
      />

      {/* ✦ Field Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-14 opacity-[0.09]
                   bg-[radial-gradient(1000px_60px_at_50%_0%,rgba(var(--gold-rgb),0.55),transparent_70%)]"
      />

      {/* ✦ Portal Rail (signature moving line) */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <motion.div
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full h-full"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(var(--gold-rgb),0.75) 50%, transparent 100%)",
            }}
            animate={{ x: ["-60%", "160%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Brand */}
          <div className="flex justify-start">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group transition-transform active:scale-95"
              aria-label={locale === "es" ? "Inicio" : "Home"}
            >
              <div
                className="relative w-11 h-11 md:w-12 md:h-12 rounded-full border border-[var(--color-gold)]/20 overflow-hidden bg-black/40
                           shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
              >
                <Image src="/images/logo.png" alt="" fill className="object-contain p-0" priority />
                {/* halo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             bg-[radial-gradient(circle_at_center,rgba(var(--gold-rgb),0.25),transparent_65%)]"
                />
              </div>

              <div className={`leading-tight ${variantClasses[variant]}`}>
                <span className="block font-heading text-lg md:text-xl font-bold tracking-wide uppercase">
                  Nelson&nbsp;Dario
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {allLinks.map((link) => (
              <NavLink key={link.href} link={link} pathname={pathname} locale={locale} />
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex justify-end items-center gap-4">
            <Link
              href={`/${locale}/book`}
              className="inline-flex items-center justify-center rounded-full px-4 py-2
                         text-[11px] font-bold uppercase tracking-[0.2em]
                         border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/10
                         text-[var(--color-gold)] hover:bg-[var(--color-gold)]/15 hover:border-[var(--color-gold)]/60
                         transition-all duration-300 shadow-[0_0_14px_rgba(var(--gold-rgb),0.12)]"
            >
              {locale === "es" ? "Reservar" : "Book"}
            </Link>

            <LanguageToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex justify-end">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 text-[var(--color-gold)]"
              aria-label={
                isOpen
                  ? locale === "es"
                    ? "Cerrar menú"
                    : "Close menu"
                  : locale === "es"
                    ? "Abrir menú"
                    : "Open menu"
              }
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                  className="w-full h-[1.5px] bg-current"
                />
                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-full h-[1.5px] bg-current" />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                  className="w-full h-[1.5px] bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`menu-${portalKey}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-2xl"
          >
            {/* ✦ Portal Open Header */}
            <MobilePortalHeader
              key={`portal-${portalKey}`}
              locale={locale}
              onClose={() => setIsOpen(false)}
            />

            <div className="flex flex-col gap-7 px-8 pb-12">
              <Link
                href={`/${locale}/book`}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-5 py-4 border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/10
                           text-[var(--color-gold)] text-lg font-heading tracking-wide"
              >
                {locale === "es" ? "Reservar (Resonancia)" : "Book (Resonance Check)"}
              </Link>

              {allLinks.map((link) => {
                const external = link.external || isExternalHref(link.href);
                return external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-medium text-[var(--color-gold)] tracking-wide border-b border-[var(--color-gold)]/10 pb-4"
                  >
                    {link.label} <span className="ml-1 text-sm opacity-70">↗</span>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-medium text-[var(--color-gold)] tracking-wide border-b border-[var(--color-gold)]/10 pb-4"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-2 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest opacity-40">
                  {locale === "es" ? "Preferencias" : "Preferences"}
                </span>
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ✦ Portal Open animation (mobile) */
function MobilePortalHeader({
  locale,
  onClose,
}: {
  locale: "en" | "es";
  onClose: () => void;
}) {
  return (
    <div className="relative px-8 pt-8 pb-6">
      {/* Subtle portal mist behind */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(var(--gold-rgb),0.14), transparent 55%)",
        }}
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-[var(--color-gold)]/20 bg-black/30 px-3 py-2
                   text-[11px] uppercase tracking-[0.2em] text-[var(--text-base)]/70 hover:text-[var(--color-gold)]
                   hover:border-[var(--color-gold)]/60 transition-all"
        aria-label={locale === "es" ? "Cerrar menú" : "Close menu"}
      >
        {locale === "es" ? "Cerrar" : "Close"}
      </button>

      {/* Portal core */}
      <div className="relative flex items-center gap-5">
        <div className="relative w-14 h-14">
          {/* Ring 1 */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-[var(--color-gold)]/25"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [0.7, 1.15, 1.05], opacity: [0, 1, 0.85] }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          />
          {/* Ring 2 */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-2 rounded-full border border-[var(--color-gold)]/15"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: [0.75, 1.25, 1.15], opacity: [0, 0.9, 0.55] }}
            transition={{ duration: 1.05, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
          />
          {/* Soft halo */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7] }}
            transition={{ duration: 1.0, delay: 0.08, ease: "easeOut" }}
            style={{
              background: "radial-gradient(circle at center, rgba(var(--gold-rgb),0.22), transparent 60%)",
            }}
          />

          {/* Brand mark */}
          <motion.img
            src="/images/logo.png"
            alt="Nelson Dario"
            className="relative z-10 w-14 h-14"
            initial={{ rotate: -30, opacity: 0, scale: 0.92 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[12px] uppercase tracking-[0.28em] text-[var(--text-base)]/55"
          >
            {locale === "es" ? "Portal de Navegación" : "Navigation Portal"}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-1 font-heading text-[var(--color-gold)] text-xl"
          >
            {locale === "es" ? "Entra con intención" : "Enter with intention"}
          </motion.h3>
        </div>
      </div>

      {/* Beam line */}
      <div aria-hidden="true" className="mt-6 h-[1px] w-full overflow-hidden">
        <motion.div
          className="h-full w-[40%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(var(--gold-rgb),0.85), transparent)",
          }}
          initial={{ x: "-60%", opacity: 0 }}
          animate={{ x: "180%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "linear" }}
        />
        <div className="h-[1px] w-full bg-[var(--color-gold)]/10 -mt-[1px]" />
      </div>
    </div>
  );
}

/* ✦ NavLink — sacred-tech active node */
function NavLink({ link, pathname, locale }: { link: NavLinkItem; pathname: string; locale: string }) {
  const external = link.external || isExternalHref(link.href);

  const active = external
    ? false
    : pathname === link.href || (pathname.startsWith(link.href) && link.href !== `/${locale}`);

  const cls = `text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
    active
      ? "text-[var(--color-gold)] drop-shadow-[0_0_6px_rgba(var(--gold-rgb),0.35)]"
      : "text-[var(--text-base)]/50 hover:text-[var(--color-gold)]"
  }`;

  const ActiveDot = active ? (
    <span
      className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]
                 shadow-[0_0_10px_rgba(var(--gold-rgb),0.45)]"
      aria-hidden="true"
    />
  ) : null;

  if (external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {link.label} <span className="ml-1 text-[10px] opacity-70">↗</span>
      </a>
    );
  }

  return (
    <Link href={link.href} className={cls}>
      {link.label}
      {ActiveDot}
    </Link>
  );
}
