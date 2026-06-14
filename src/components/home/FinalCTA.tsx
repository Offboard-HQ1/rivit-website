import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Apple } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-violet-900/20 to-cyan-600/20" />
          <div className="glow-orb top-0 right-0 h-64 w-64 bg-violet-500/30" />
          <div className="glow-orb bottom-0 left-0 h-48 w-48 bg-cyan-500/20" />

          <div className="relative border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to build your next product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Join founders and teams using Rivit to turn ideas into build-ready
              plans in minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.appStoreUrl} external size="lg">
                <Apple className="h-5 w-5" />
                Download on the App Store
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
