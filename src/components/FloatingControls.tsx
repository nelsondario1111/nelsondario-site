// components/FloatingControls.tsx
"use client";

import { ScrollTopButton } from "@/components/ScrollTopButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

export function FloatingControls() {
  const pathname = usePathname();
  const isLumaPage =
    pathname?.startsWith("/luma") ||
    pathname?.startsWith("/en/luma") ||
    pathname?.startsWith("/es/luma");

  return (
    <>
      <ScrollTopButton />
      {!isLumaPage && <ThemeToggle />}
    </>
  );
}
