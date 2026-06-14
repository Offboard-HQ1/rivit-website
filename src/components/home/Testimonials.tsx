import { testimonials } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-slate-900/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by builders worldwide"
          description="Founders, agencies, and first-time builders use Rivit to ship faster."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="gradient-border flex flex-col rounded-2xl p-6 sm:p-8"
            >
              <Quote className="h-8 w-8 text-violet-500/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
