import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services | Nelson Dario",
  description:
    "Productized web and AI services, intensives, and digital offers for sensitive founders building calm, scalable systems.",
};

export default function EnServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
