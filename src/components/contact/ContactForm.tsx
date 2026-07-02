"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  subject: "general",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="gradient-border rounded-2xl p-6 sm:p-8"
    >
      <div className="space-y-5">
        {status === "success" && (
          <p
            role="status"
            className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
          >
            Thanks for reaching out! We&apos;ve received your message and will
            get back to you within one business day.
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            Something went wrong. Please try again or email us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="underline hover:text-red-200"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            className={inputClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            className={inputClassName}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            className={inputClassName}
          >
            <option value="general">General inquiry</option>
            <option value="pricing">Pricing &amp; plans</option>
            <option value="agency">Agency / enterprise</option>
            <option value="partnership">Partnership</option>
            <option value="support">Support</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            className={`${inputClassName} resize-none`}
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
