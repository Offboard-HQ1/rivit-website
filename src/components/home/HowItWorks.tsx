import { howItWorksSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="relative border-y border-white/5 bg-slate-900/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From idea to build pack in three steps"
          description="Rivit orchestrates the planning phase so you can focus on shipping."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {howItWorksSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < howItWorksSteps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-violet-500/40 to-transparent md:block" />
              )}
              <div className="gradient-border rounded-2xl p-6 sm:p-8">
                <span className="text-sm font-mono text-violet-400">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
