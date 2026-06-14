import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  "Vague ideas that never become actionable plans",
  "Weeks lost debating architecture before writing code",
  "AI tools that need better prompts than you can write",
  "Scope creep that kills MVPs before they launch",
];

const solutions = [
  "Structured product plans from a single conversation",
  "Buildability scores before you commit to a stack",
  "Export-ready prompts for Cursor, Claude, and more",
  "Scoped MVPs with clear phase-by-phase roadmaps",
];

export function ProblemSolution() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The challenge"
          title="Ideas are easy. Build-ready plans are hard."
          description="Most founders and teams stall between inspiration and implementation. Rivit closes that gap."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-500/10 bg-red-500/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">The problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex gap-3 text-slate-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">The Rivit solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
