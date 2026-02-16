import { redirect } from "next/navigation";

export default function LegacyPageRedirect() {
  redirect("/en/services#packages");
}
