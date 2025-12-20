"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { children: React.ReactNode };

/**
 * ✦ PageTransition (no animation)
 * Clean route changes:
 * - No fades, no slides, no blur
 * - Optional scroll-to-top on route change
 */
export function PageTransition({ children }: Props) {
  const pathname = usePathname();

  // Optional: scroll to top on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Directly render children — no motion, no AnimatePresence
  return <>{children}</>;
}
