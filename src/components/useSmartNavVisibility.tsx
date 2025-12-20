"use client";
import { useState, useEffect, useRef } from "react";

export function useSmartNavVisibility() {
  const [navState, setNavState] = useState<"active" | "idle" | "hidden">("active");
  const lastScrollY = useRef(0);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      const speed = Math.abs(diff);

      // near top always visible
      if (currentY < 80) {
        setNavState("active");
        return;
      }

      // quick downward scroll → hide faster
      if (diff > 10 && currentY > 120 && speed > 5) setNavState("hidden");
      // scrolling up → show
      else if (diff < -10) setNavState("active");

      // linger after scroll stops
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      const linger = window.innerWidth < 768 ? 3500 : 2500; // mobile slower
      idleTimeout.current = setTimeout(() => {
        if (currentY > 200) setNavState("idle");
      }, linger);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  return navState;
}
