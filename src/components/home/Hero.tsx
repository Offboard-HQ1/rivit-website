import { siteConfig, aiTools } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Apple } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="glow-orb -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-violet-600/20" />
      <div className="glow-orb top-20 right-0 h-[300px] w-[400px] bg-cyan-500/10" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI-powered software planning
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build Software Faster{" "}
            <span className="gradient-text">With AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Turn ideas into build-ready plans, execution roadmaps and AI prompts
            in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.appStoreUrl} external size="lg">
              <Apple className="h-5 w-5" />
              Download on the App Store
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              See Features
            </Button>
          </div>

          <div className="mt-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Works with your favorite AI tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {aiTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-sm text-slate-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="gradient-border rounded-2xl p-px">
            <div className="overflow-hidden rounded-2xl bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500">Rivit — Project Plan</span>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm sm:p-8">
                <p className="text-violet-400">// Build Plan: SaaS Dashboard MVP</p>
                <p className="text-slate-300">
                  <span className="text-cyan-400">Phase 1:</span> Auth + User onboarding
                </p>
                <p className="text-slate-300">
                  <span className="text-cyan-400">Phase 2:</span> Core dashboard + analytics
                </p>
                <p className="text-slate-300">
                  <span className="text-cyan-400">Phase 3:</span> Billing + team features
                </p>
                <p className="text-emerald-400">
                  ✓ Buildability score: 87/100 — Ready to export
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
