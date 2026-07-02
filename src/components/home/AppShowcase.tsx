import Image from "next/image";
import { appScreenshots } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AppShowcase() {
  if (appScreenshots.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-white/5 bg-slate-900/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The app"
          title="See Rivit in action"
          description="Plan products, review buildability, and export AI-ready build packs — all from your phone."
        />

        <div className="mt-16 -mx-5 flex gap-6 overflow-x-auto px-5 pb-4 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 xl:grid-cols-5">
          {appScreenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className="w-[220px] shrink-0 snap-center sm:w-auto"
            >
              <div className="gradient-border overflow-hidden rounded-[2rem] bg-slate-950 p-2 shadow-2xl shadow-violet-500/10">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.6rem] bg-slate-900">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
