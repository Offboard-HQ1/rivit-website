import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { Mail, MessageSquare } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the Rivit team. Questions about pricing, partnerships, or enterprise plans — we'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        description="Have a question about Rivit? Want to discuss agency or enterprise plans? We're here to help."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-white">
                We&apos;d love to hear from you
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Whether you&apos;re a founder exploring Rivit for the first time,
                an agency looking for team plans, or a partner interested in
                collaborating — reach out and we&apos;ll get back to you within
                one business day.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-violet-500/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                    <Mail className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email us</p>
                    <p className="text-sm text-slate-400">
                      {siteConfig.contactEmail}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                    <MessageSquare className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Response time
                    </p>
                    <p className="text-sm text-slate-400">
                      Within 1 business day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="gradient-border rounded-2xl p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                  >
                    <option value="general">General inquiry</option>
                    <option value="pricing">Pricing &amp; plans</option>
                    <option value="agency">Agency / enterprise</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-violet-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
