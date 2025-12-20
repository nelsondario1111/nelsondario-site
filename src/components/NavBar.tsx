"use client";

/**
 * ✦ NelsonDario.com NavBar ✦
 * Frequency: Gold + Midnight · LUMA-aligned
 * Behavior: Smart Nav (Hides on down, Shows on up)
 * Subtitle: Code · Consciousness · Coherence
 *
 * Update (requested):
 * - Removed the scroll progress line (page progression bar) entirely
 *
 * Preserved:
 * - Smart hide/show
 * - External link support
 * - Logo from /public/images/logo.png
 * - No duplicate LUMA link in mobile menu
 * - Subtle top-edge field glow + premium focus states
 */

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { navLinks } from "@/data/navigation";

type NavVariant = "default" | "luma" | "lumina";

type NavLinkItem = {
  href: string;
  label: string;
  external?: boolean;
};

export function NavBar({ variant = "default" }: { variant?: NavVariant }) {
  const pathname = usePathname() || "/en";
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";

  // ✦ Data Setup
  const allLinks = navLinks[locale] as NavLinkItem[];

  const isLumaLink = (label: string, href: string) =>
    label.toLowerCase().includes("luma") || href.includes("/luma");

  const lumaLink = allLinks.find((link) => isLumaLink(link.label, link.href));
  const links = allLinks.filter((link) => !isLumaLink(link.label, link.href));

  /* ───────────── State ───────────── */
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastYRef = useRef(0);

  /* ✦ Logic: Smart Hide/Show on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastYRef.current;

      setIsScrolled(currentY > 20);

      if (isOpen) {
        setIsHidden(false);
        lastYRef.current = currentY;
        return;
      }

      if (currentY < 60) {
        setIsHidden(false);
      } else if (diff > 5) {
        setIsHidden(true);
      } else if (diff < -5) {
        setIsHidden(false);
      }

      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  /* ✦ Close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
    setIsHidden(false);
  }, [pathname]);

  /* ───────────── Styles ───────────── */
  const variantClasses: Record<NavVariant, string> = {
    default: "text-[var(--color-gold)]",
    luma: "text-[var(--color-gold)] drop-shadow-[0_0_6px_rgba(var(--gold-rgb),0.4)]",
    lumina: "text-[var(--color-gold)] text-glow",
  };

  // ✦ Helper: render internal vs external nav links safely
  const NavItem = ({
    link,
    className,
    children,
    onClick,
    title,
  }: {
    link: NavLinkItem;
    className: string;
    children: React.ReactNode;
    onClick?: () => void;
    title?: string;
  }) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
          title={title}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={link.href} className={className} onClick={onClick} title={title}>
        {children}
      </Link>
    );
  };

  return (
    <motion.nav
      role="navigation"
      aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`navbar fixed top-0 left-0 w-full z-[120]
        bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]
        backdrop-blur-lg
        shadow-[0_4px_30px_rgba(0,0,0,0.12)]
        border-b border-[var(--color-gold)]/10
        transition-colors duration-500
      `}
    >
      {/* ✦ Subtle top-edge field glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(1200px 60px at 50% 0%, rgba(var(--gold-rgb),0.45), transparent 60%)",
        }}
      />

      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link
          href={`/${locale}`}
          className={`flex items-center gap-3 z-50 group
            hover:drop-shadow-[0_0_15px_rgba(var(--gold-rgb),0.22)] transition-all
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-md`}
          aria-label="Nelson Dario Home"
        >
          <span
            className="relative w-11 h-11 md:w-12 md:h-12 rounded-full
                       border border-[var(--color-gold)]/25 bg-black/10
                       overflow-hidden flex items-center justify-center
                       shadow-[inset_0_0_0_1px_rgba(var(--gold-rgb),0.06)]"
          >
            <Image
              src="/images/logo.png"
              alt="Nelson Dario"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </span>

          <span className={`leading-tight ${variantClasses[variant]}`}>
            <span className="block font-heading text-xl md:text-2xl font-semibold tracking-wide">
              Nelson&nbsp;Dario
            </span>
            <span className="block text-[10px] md:text-xs font-normal opacity-65 tracking-wide mt-[2px] font-sans">
              {locale === "es"
                ? "Código · Conciencia · Coherencia"
                : "Code · Consciousness · Coherence"}
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active =
              !link.external &&
              (pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== `/${locale}`));

            return (
              <NavItem
                key={link.href}
                link={link}
                className={`relative text-sm tracking-wide uppercase
                  ${
                    active
                      ? "text-[var(--color-gold)] font-medium"
                      : "text-[var(--text-base)]/70 hover:text-[var(--color-gold)]"
                  }
                  transition-all duration-200
                  hover:-translate-y-[1px]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-sm
                `}
              >
                <span className="relative">
                  {link.label}
                  {link.external && (
                    <span className="ml-2 text-[10px] opacity-60 align-middle">↗</span>
                  )}
                </span>

                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-[6px] w-full h-[2px] bg-[var(--color-gold)]/90"
                  />
                )}
              </NavItem>
            );
          })}

          <LanguageToggle />

          {/* ✦ LUMA Portal Button (external) */}
          {lumaLink && (
            <div className="ml-1">
              <NavItem
                link={lumaLink}
                title="LUMA Portal"
                className="group flex items-center justify-center w-9 h-9 rounded-full
                           border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/5
                           hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/55
                           transition-all duration-300
                           shadow-[0_0_10px_rgba(var(--gold-rgb),0.10)]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
              >
                <img
                  src="/symbols/luma-sigil.svg"
                  alt="LUMA"
                  className="w-8 h-8 opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </NavItem>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden z-50 text-[var(--color-gold)] focus:outline-none
                     rounded-md focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40
                     focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, display: "block" },
          closed: {
            height: 0,
            opacity: 0,
            transitionEnd: { display: "none" },
          },
        }}
        className="md:hidden overflow-hidden
                   bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]
                   border-b border-[var(--color-gold)]/20"
      >
        <div className="flex flex-col gap-4 px-6 pb-8 pt-2">
          {/* Only render the non-LUMA links here to avoid duplicates */}
          {links.map((link) => {
            const active = !link.external && pathname === link.href;

            return (
              <NavItem
                key={link.href}
                link={link}
                onClick={() => setIsOpen(false)}
                className={`text-lg tracking-wide ${
                  active ? "text-[var(--color-gold)]" : "text-[var(--text-base)]"
                } rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/35`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                  {link.external && (
                    <span className="text-sm opacity-70" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </span>
              </NavItem>
            );
          })}

          {/* Mobile LUMA Link (single, explicit) */}
          {lumaLink && (
            <NavItem
              link={lumaLink}
              onClick={() => setIsOpen(false)}
              className="text-lg tracking-wide text-[var(--color-gold)] font-medium flex items-center gap-3
                         rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/35"
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center
                           border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/5"
                aria-hidden="true"
              >
                <img src="/symbols/luma-sigil.svg" alt="" className="w-8 h-8 opacity-100" />
              </span>

              <span className="flex items-center gap-2">
                {lumaLink.label}
                <span className="text-sm opacity-70" aria-hidden="true">
                  ↗
                </span>
              </span>
            </NavItem>
          )}

          <div className="h-[1px] bg-[var(--color-gold)]/10 w-full my-2" />

          <div className="flex justify-between items-center">
            <span className="text-sm opacity-60">Language</span>
            <LanguageToggle />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
