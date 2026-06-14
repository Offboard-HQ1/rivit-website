import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="glow-orb -top-20 left-1/2 h-64 w-96 -translate-x-1/2 bg-violet-600/15" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <Container className="relative">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      </Container>
    </section>
  );
}
