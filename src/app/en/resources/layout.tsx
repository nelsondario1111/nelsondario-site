import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources | Nelson Dario",
  description:
    "Tools, downloads, and library highlights for calm operations, clear messaging, and coherent business growth.",
};

export default function EnResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
