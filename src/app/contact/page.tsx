import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
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

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
