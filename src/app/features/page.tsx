import { features, aiTools } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { Apple, Check } from "lucide-react";

export const metadata = createMetadata({
  title: "Features",
  description:
    "Explore Rivit's AI product architecture, buildability analysis, execution roadmaps, MVP planning, and build pack exports for AI coding tools.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Plan smarter. Build faster."
        description="Rivit gives founders, agencies, and beginners the planning infrastructure to ship software with AI — from first idea to exportable build pack."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="gradient-border flex gap-5 rounded-2xl p-6 sm:p-8"
              >
                <FeatureIcon icon={feature.icon} className="shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-slate-900/30 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Built for your AI coding workflow
            </h2>
            <p className="mt-4 text-slate-400">
              Export plans and prompts optimized for the tools you already use.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {aiTools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5"
                >
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-300">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="gradient-border mx-auto max-w-2xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-white">
              Start planning your next build
            </h2>
            <p className="mt-3 text-slate-400">
              Download Rivit and turn your idea into a build-ready plan today.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.appStoreUrl} external size="lg">
                <Apple className="h-5 w-5" />
                Download on the App Store
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
