// src/data/navigation.ts

export type NavLink = {
  href: string;
  label: string;

  /** If true, render as <a target="_blank" ...> */
  external?: boolean;

  /** Optional a11y label for external links, icons, etc. */
  ariaLabel?: string;

  /** Optional small helper text (mobile menus / tooltips later) */
  description?: string;

};

export const navLinks: Record<"en" | "es", NavLink[]> = {
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/resources", label: "Resources" },
    { href: "/en/conversations", label: "Conversations with Lumina" },
    { href: "/en/contact", label: "Contact" },
  ],

  es: [
    { href: "/es/services", label: "Servicios" },
    { href: "/es/resources", label: "Recursos" },
    { href: "/es/conversations", label: "Conversaciones con Lumina" },
    { href: "/es/contact", label: "Contacto" },
  ],
};
