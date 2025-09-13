import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Logo({ size = "md", href = "/" }: LogoProps) {
  const sizeConfig = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 }
  };

  const config = sizeConfig[size];

  return (
    <Link 
      href={href}
      className="flex items-center hover:opacity-80 transition-opacity duration-200"
      aria-label="Go to dashboard"
    >
      <Image 
        src="/logos/WorkSource Alliance ICON-gradient.png" 
        alt="WorkSource Alliance Logo"
        width={config.width}
        height={config.height}
        style={{ minHeight: '35px', width: 'auto', height: `${config.height}px` }}
        priority
      />
    </Link>
  );
}
