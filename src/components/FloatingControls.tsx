// components/FloatingControls.tsx
"use client";

import { ScrollTopButton } from "@/components/ScrollTopButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export function FloatingControls() {
  return (
    <>
      <ScrollTopButton />
      <ThemeToggle />
    </>
  );
}
