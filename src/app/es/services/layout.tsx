import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Servicios | Nelson Dario",
  description:
    "Servicios productizados de web e IA, intensivos y ofertas digitales para crecimiento de negocio escalable.",
};

export default function EsServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
