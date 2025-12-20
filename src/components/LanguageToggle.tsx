"use client";

import { usePathname, useRouter } from "next/navigation";

/**
 * ✦ LanguageToggle
 * Switches between English and Spanish routes
 */
export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = pathname.startsWith("/es") ? "es" : "en";
  const otherLocale = locale === "es" ? "en" : "es";

  const switchLanguage = () => {
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLanguage}
      className="text-sm uppercase tracking-wider text-gold hover:text-white transition font-medium"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
