import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizeConfig = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 }
  };

  const config = sizeConfig[size];

  return (
    <Image 
      src="/logos/WorkSource Alliance ICON-gradient.png" 
      alt="WorkSource Alliance Logo"
      width={config.width}
      height={config.height}
      style={{ minHeight: '35px', width: 'auto', height: `${config.height}px` }}
      priority
    />
  );
}
