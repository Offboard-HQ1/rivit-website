import Link from "next/link";
import { features } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { ArrowRight } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to plan and build"
            description="Powerful planning tools designed for founders, agencies, and AI-native builders."
            align="left"
          />
          <Link
            href="/features"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            View all features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04]"
            >
              <FeatureIcon icon={feature.icon} />
              <h3 className="mt-5 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
