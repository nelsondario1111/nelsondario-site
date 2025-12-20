"use client";

import { useState } from "react";

type SubscribeFormProps = {
  label?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
};

export function SubscribeForm({
  label = "Subscribe",
  placeholder = "Your email",
  buttonText = "Join",
  className = "",
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter an email.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error || "Subscription failed. Try again.");
        return;
      }

      setStatus("success");
      setMessage("You’re in. Welcome ✧");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={className} aria-label={label}>
      <div className="text-sm font-medium text-[var(--text-base)]/90 mb-2">{label}</div>

      <div className="flex items-center gap-2">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm
                     shadow-sm backdrop-blur outline-none
                     focus:border-[color-mix(in_srgb,var(--color-gold)_50%,transparent)]
                     focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-gold)_35%,transparent)]
                     dark:border-white/15 dark:bg-black/40 dark:text-white"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl px-4 py-2 text-sm font-semibold
                     bg-[var(--color-gold)] text-[var(--color-midnight)]
                     hover:opacity-95 active:scale-[0.98]
                     transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "..." : buttonText}
        </button>
      </div>

      {message ? (
        <p
          className={`mt-2 text-xs ${
            status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

export default SubscribeForm;
