import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Rivit Privacy Policy. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, project data, and usage information. We also automatically collect certain technical data including device information, IP address, and app usage analytics.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve Rivit's services, process your requests, send you technical notices and support messages, and respond to your comments and questions. We may also use aggregated, anonymized data to improve our AI planning models and product features.`,
  },
  {
    title: "AI and Data Processing",
    content: `Rivit uses artificial intelligence to generate software plans and recommendations. Your project descriptions and planning data may be processed by AI systems to deliver our services. We do not use your private project data to train third-party AI models without your explicit consent.`,
  },
  {
    title: "Data Sharing",
    content: `We do not sell your personal information. We may share data with trusted service providers who assist us in operating our platform (such as hosting, analytics, and payment processing), subject to confidentiality agreements. We may also disclose information if required by law or to protect our rights.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have the right to access, correct, delete, or export your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at ${siteConfig.contactEmail}.`,
  },
  {
    title: "Cookies and Tracking",
    content: `Our website may use cookies and similar technologies to improve your experience, analyze traffic, and understand usage patterns. You can control cookie preferences through your browser settings.`,
  },
  {
    title: "Children's Privacy",
    content: `Rivit is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the effective date. Your continued use of Rivit after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at ${siteConfig.contactEmail}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: June 14, 2026"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-custom mx-auto max-w-3xl">
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website, mobile
              application, and related services.
            </p>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
