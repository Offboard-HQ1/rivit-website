import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Build Software Faster With AI",
  description:
    "Turn ideas into build-ready plans, execution roadmaps and AI prompts in minutes. Rivit helps founders, agencies, and beginners plan software for Cursor, Claude, ChatGPT, and more.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesGrid />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
