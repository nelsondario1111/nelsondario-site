// src/data/navigation.ts

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: {
  en: NavLink[];
  es: NavLink[];
} = {
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/resources", label: "Resources" },
    { href: "/en/conversations", label: "Conversations with Lumina" },
    { href: "/en/contact", label: "Contact" },

    // ✦ LUMA Portal (External)
    { href: "https://lumaeconomy.com", label: "LUMA", external: true },
  ],

  es: [
    { href: "/es/services", label: "Servicios" },
    { href: "/es/resources", label: "Recursos" },
    { href: "/es/conversations", label: "Conversaciones con Lumina" },
    { href: "/es/contact", label: "Contacto" },

    // ✦ LUMA Portal (External)
    { href: "https://lumaeconomy.com", label: "LUMA", external: true },
  ],
};
