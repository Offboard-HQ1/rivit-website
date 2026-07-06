import type { FeatureIconName } from "@/components/ui/FeatureIcon";

export const siteConfig = {
  name: "Rivit",
  tagline: "AI-powered software planning and build orchestration",
  description:
    "Turn ideas into build-ready plans, execution roadmaps and AI prompts for Cursor, Claude, ChatGPT, Windsurf, Replit and Antigravity.",
  url: "https://rivit.tech",
  appStoreUrl: "https://apps.apple.com/app/rivit/id6779803430",
  contactEmail: "support@rivit.tech",
  formspreeEndpoint: "https://formspree.io/f/xgobqaoz",
  branding: {
    icon: "/icon.png",
    favicon: "/favicon.png",
    appleIcon: "/icon.png",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const features: {
  title: string;
  description: string;
  icon: FeatureIconName;
}[] = [
  {
    title: "AI Product Architect",
    description:
      "Transform raw ideas into structured product definitions with user stories, scope boundaries, and technical requirements.",
    icon: "architect",
  },
  {
    title: "Buildability Analysis",
    description:
      "Get honest feasibility scores, complexity estimates, and risk flags before you invest weeks in the wrong approach.",
    icon: "analysis",
  },
  {
    title: "Execution Roadmaps",
    description:
      "Step-by-step build sequences with milestones, dependencies, and clear handoffs between planning and implementation.",
    icon: "roadmap",
  },
  {
    title: "Founder Guidance",
    description:
      "Plain-language explanations and decision frameworks designed for non-technical founders and first-time builders.",
    icon: "guidance",
  },
  {
    title: "AI Tool Compatible",
    description:
      "Export plans optimized for Cursor, Claude, ChatGPT, Windsurf, Replit, Antigravity and other AI coding assistants.",
    icon: "compatible",
  },
  {
    title: "MVP Planning",
    description:
      "Focus on what ships first. Rivit helps you cut scope intelligently and define a minimum viable product that validates fast.",
    icon: "mvp",
  },
  {
    title: "Technical Documentation",
    description:
      "Auto-generated architecture docs, API outlines, data models, and implementation notes your AI tools can act on.",
    icon: "docs",
  },
  {
    title: "Build Pack Exports",
    description:
      "Download complete build packs — prompts, specs, and checklists — ready to paste into your favorite AI coding environment.",
    icon: "export",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Describe your idea",
    description:
      "Tell Rivit what you want to build in plain language. No technical jargon required.",
  },
  {
    step: "02",
    title: "Get your build plan",
    description:
      "Receive a structured product plan with architecture, scope, risks, and an execution roadmap.",
  },
  {
    step: "03",
    title: "Export and build",
    description:
      "Export AI-ready prompts and build packs to your coding tool of choice and start shipping.",
  },
];

export const testimonials = [
  {
    quote:
      "Rivit turned my napkin sketch into a full build plan in under ten minutes. I shipped my MVP in two weeks instead of two months.",
    author: "Sarah Chen",
    role: "Solo Founder",
    company: "Flowbase",
  },
  {
    quote:
      "We use Rivit for every client kickoff. It saves hours of discovery and gives our dev team crystal-clear specs from day one.",
    author: "Marcus Webb",
    role: "Agency Lead",
    company: "Pixel & Code",
  },
  {
    quote:
      "As someone with zero coding background, Rivit gave me the confidence to actually start building. The founder guidance is incredible.",
    author: "Elena Rodriguez",
    role: "Entrepreneur",
    company: "Launchpad Co.",
  },
];

export const faqs = [
  {
    question: "What is Rivit?",
    answer:
      "Rivit is an AI-powered software planning platform that helps you turn ideas into build-ready plans, execution roadmaps, and AI prompts — ready for tools like Cursor, Claude, and ChatGPT.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No. Rivit is designed for founders, entrepreneurs, agencies, and beginners. It explains technical concepts in plain language and guides you through every decision.",
  },
  {
    question: "Which AI coding tools does Rivit support?",
    answer:
      "Rivit exports build packs optimized for Cursor, Claude, ChatGPT, Windsurf, Replit, Antigravity, and other popular AI development environments.",
  },
  {
    question: "How is Rivit different from just using ChatGPT?",
    answer:
      "Rivit provides structured product architecture, buildability analysis, scoped MVPs, and exportable build packs — not just conversational answers. It's a planning system, not a chatbot.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can start with our free tier to explore core planning features. Upgrade to Pro or Agency when you need unlimited plans and advanced exports.",
  },
];

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring Rivit and planning your first project.",
    features: [
      "3 project plans per month",
      "Basic buildability analysis",
      "MVP scoping",
      "Standard exports",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For founders and builders shipping products regularly.",
    features: [
      "Unlimited project plans",
      "Advanced buildability analysis",
      "Full execution roadmaps",
      "Build pack exports",
      "AI tool integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$99",
    period: "per month",
    description: "For agencies managing multiple client projects at scale.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Client project workspaces",
      "White-label exports",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const aiTools = [
  "Cursor",
  "Claude",
  "ChatGPT",
  "Windsurf",
  "Replit",
  "Antigravity",
];

/** App Store screenshots — files live in public/screenshots/ */
export const appScreenshots: { src: string; alt: string }[] = [
  { src: "/screenshots/01.png", alt: "Rivit app — screenshot 1" },
  { src: "/screenshots/02.png", alt: "Rivit app — screenshot 2" },
  { src: "/screenshots/03.png", alt: "Rivit app — screenshot 3" },
  { src: "/screenshots/04.png", alt: "Rivit app — screenshot 4" },
  { src: "/screenshots/05.png", alt: "Rivit app — screenshot 5" },
  { src: "/screenshots/06.png", alt: "Rivit app — screenshot 6" },
  { src: "/screenshots/07.png", alt: "Rivit app — screenshot 7" },
];
