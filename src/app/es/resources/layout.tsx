import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Recursos | Nelson Dario",
  description:
    "Herramientas, descargables y biblioteca para operar con calma, comunicar con claridad y crecer con coherencia.",
};

export default function EsResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
