import { pricingTiers, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";
import { Check } from "lucide-react";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Rivit. Start free and upgrade to Pro or Agency when you need unlimited plans and advanced exports.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple, transparent pricing"
        description="Start free and scale as you ship. No hidden fees, no surprises."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "gradient-border bg-violet-500/5"
                    : "border border-white/5 bg-white/[0.02]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-lg font-semibold text-white">{tier.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500">/{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">{tier.description}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={
                      tier.name === "Agency"
                        ? "/contact"
                        : siteConfig.appStoreUrl
                    }
                    external={tier.name !== "Agency"}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            All plans include a 14-day free trial on Pro. Cancel anytime.
          </p>
        </Container>
      </section>
    </>
  );
}
