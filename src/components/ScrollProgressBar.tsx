"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const updateScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const progress = (scrollTop / total) * 100;
      setScrollPercent(progress);

      // reset idle pulse
      setIsIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), 1200);
    };

    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 h-[2px] z-[60]
        bg-[linear-gradient(90deg,var(--color-gold),var(--color-gold-strong))]
        transition-[width] duration-150 ease-out
        ${isIdle ? "animate-scrollPulse" : ""}`}
      style={{ width: `${scrollPercent}%` }}
    />
  );
}
