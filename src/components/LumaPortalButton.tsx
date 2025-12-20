// components/LumaPortalButton.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function LumaPortalButton({ locale }: { locale: "en" | "es" }) {
  const href = locale === "es" ? "/es/luma" : "/en/luma";
  const label = locale === "es" ? "Portal LUMA" : "LUMA Portal";

  return (
    <motion.div
      className="luma-portal-wrapper"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={href}
        aria-label={label}
        data-luma-portal="true"
        className="luma-portal-btn"
      >
        <img
          src="symbols/luma-sigil.svg"
          alt=""
          className="luma-portal-sigil"
        />
      </Link>

      <span className="luma-portal-tooltip">
        {locale === "es" ? "Entrar en LUMA" : "Enter LUMA"}
      </span>
    </motion.div>
  );
}
