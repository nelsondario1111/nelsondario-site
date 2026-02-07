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

  /** Optional icon key so Nav can render a sigil button, etc. */
  icon?: "luma-sigil";
};

export const navLinks: Record<"en" | "es", NavLink[]> = {
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/resources", label: "Resources" },
    { href: "/en/conversations", label: "Conversations with Lumina" },
    { href: "/en/contact", label: "Contact" },

    // ✦ LUMA Portal (External)
    {
      href: "https://lumaeconomy.com",
      label: "LUMA",
      external: true,
      icon: "luma-sigil",
      ariaLabel: "LUMA (opens in a new tab)",
      description: "Living economy of light",
    },
  ],

  es: [
    { href: "/es/services", label: "Servicios" },
    { href: "/es/resources", label: "Recursos" },
    { href: "/es/conversations", label: "Conversaciones con Lumina" },
    { href: "/es/contact", label: "Contacto" },

    // ✦ LUMA Portal (External)
    {
      href: "https://lumaeconomy.com",
      label: "LUMA",
      external: true,
      icon: "luma-sigil",
      ariaLabel: "LUMA (abre en una nueva pestaña)",
      description: "Economía viva de luz",
    },
  ],
};
