"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { navLinks } from "@/data/navigation";

type NavVariant = "default" | "luma" | "lumina";
type NavLinkItem = { href: string; label: string; external?: boolean };

export function NavBar({ variant = "default" }: { variant?: NavVariant }) {
  const pathname = usePathname() || "/en";
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";
  
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // ✦ Data Setup
  const allLinks = navLinks[locale] as NavLinkItem[];
  const isLuma = (l: string, h: string) => l.toLowerCase().includes("luma") || h.includes("/luma");
  const lumaLink = allLinks.find((link) => isLuma(link.label, link.href));
  const links = allLinks.filter((link) => !isLuma(link.label, link.href));

  // ✦ Logic: Smart Hide/Show with useScroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;
    if (latest < 60 || isOpen) {
      setIsHidden(false);
    } else if (diff > 10) {
      setIsHidden(true);
    } else if (diff < -10) {
      setIsHidden(false);
    }
  });

  // ✦ Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsHidden(false);
  }, [pathname]);

  const variantClasses: Record<NavVariant, string> = {
    default: "text-[var(--color-gold)]",
    luma: "text-[var(--color-gold)] drop-shadow-[0_0_8px_rgba(var(--gold-rgb),0.4)]",
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
      className="fixed top-0 left-0 w-full z-[120] border-b border-[var(--color-gold)]/10 bg-[color-mix(in_srgb,var(--bg-base)_85%,black)] backdrop-blur-xl transition-colors duration-500"
    >
      {/* ✦ Field Glow Overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 opacity-[0.08] bg-[radial-gradient(1000px_60px_at_50%_0%,rgba(var(--gold-rgb),0.5),transparent_70%)]" />

      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          
          {/* 1. Brand (Left) */}
          <div className="flex justify-start">
            <Link href={`/${locale}`} className="flex items-center gap-3 group transition-transform active:scale-95" aria-label="Home">
              <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full border border-[var(--color-gold)]/20 overflow-hidden bg-black/40 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <Image src="/images/logo.png" alt="" fill className="object-contain p-1" priority />
              </div>
              <div className={`leading-tight ${variantClasses[variant]}`}>
                <span className="block font-heading text-lg md:text-xl font-bold tracking-wide uppercase">Nelson&nbsp;Dario</span>
                <span className="block text-[9px] md:text-[10px] font-medium opacity-60 tracking-[0.1em] font-sans">
                  {locale === "es" ? "CÓDIGO · CONCIENCIA" : "CODE · CONSCIOUSNESS"}
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Desktop Links (Center) */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.href} link={link} pathname={pathname} locale={locale} />
            ))}
          </div>

          {/* 3. Actions (Right) */}
          <div className="hidden md:flex justify-end items-center gap-5">
            <LanguageToggle />
            {lumaLink && <LumaPortal link={lumaLink} />}
          </div>

          {/* Mobile Toggle (Right-most on mobile) */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--color-gold)] focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }} className="w-full h-[1.5px] bg-current origin-center" />
                <motion.span animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }} className="w-full h-[1.5px] bg-current" />
                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }} className="w-full h-[1.5px] bg-current origin-center" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ✦ Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="flex flex-col gap-8 px-8 py-12">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-medium text-[var(--color-gold)] tracking-wide flex items-center justify-between border-b border-[var(--color-gold)]/10 pb-4"
                >
                  {link.label}
                  {link.external && <span className="text-sm opacity-50">↗</span>}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest opacity-40">Preferences</span>
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ✦ Sub-components for cleaner structure
function NavLink({ link, pathname, locale }: { link: NavLinkItem; pathname: string; locale: string }) {
  const active = pathname === link.href || (pathname.startsWith(link.href) && link.href !== `/${locale}`);
  
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
        active ? "text-[var(--color-gold)]" : "text-[var(--text-base)]/50 hover:text-[var(--color-gold)]"
      }`}
    >
      {link.label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[var(--color-gold)] shadow-[0_0_8px_rgba(var(--gold-rgb),0.5)]"
        />
      )}
    </Link>
  );
}

function LumaPortal({ link }: { link: NavLinkItem }) {
  return (
    <Link
      href={link.href}
      target="_blank"
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 hover:border-[var(--color-gold)]/60 transition-all duration-500 shadow-lg"
    >
      <motion.img
        src="/symbols/luma-sigil.svg"
        alt="LUMA"
        className="w-7 h-7 z-10"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 rounded-full bg-[var(--color-gold)]/0 group-hover:bg-[var(--color-gold)]/5 transition-colors" />
    </Link>
  );
}