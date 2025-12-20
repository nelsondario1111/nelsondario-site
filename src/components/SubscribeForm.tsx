"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) setStatus("success");
      else throw new Error("Error subscribing");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="px-4 py-2 rounded-md bg-transparent border border-gold text-softwhite w-72 text-center"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-2 bg-gold text-midnight font-semibold rounded-md hover:bg-transparent hover:text-gold border border-gold transition-all"
      >
        {status === "loading" ? "Sending..." : "Subscribe"}
      </button>
      {status === "success" && (
        <p className="text-gold text-sm">✨ You’re subscribed. Welcome!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
