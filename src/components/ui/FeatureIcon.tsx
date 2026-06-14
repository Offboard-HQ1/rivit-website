import {
  Blocks,
  BookOpen,
  Compass,
  Download,
  Layers,
  Lightbulb,
  ScanSearch,
  Sparkles,
} from "lucide-react";

export const iconMap = {
  architect: Sparkles,
  analysis: ScanSearch,
  roadmap: Compass,
  guidance: Lightbulb,
  compatible: Blocks,
  mvp: Layers,
  docs: BookOpen,
  export: Download,
} as const;

export type FeatureIconName = keyof typeof iconMap;

interface FeatureIconProps {
  icon: FeatureIconName;
  className?: string;
}

export function FeatureIcon({ icon, className = "" }: FeatureIconProps) {
  const Icon = iconMap[icon];
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 ring-1 ring-white/10 ${className}`}
    >
      <Icon className="h-5 w-5 text-violet-300" strokeWidth={1.75} />
    </div>
  );
}
