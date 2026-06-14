import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  showText?: boolean;
  size?: number;
  className?: string;
}

export function Logo({ showText = true, size = 32, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={siteConfig.branding.icon}
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        className="rounded-lg"
        priority
      />
      {showText && (
        <span className="text-lg font-semibold tracking-tight text-white">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
