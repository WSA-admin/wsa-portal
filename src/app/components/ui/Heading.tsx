import { brandColors, typography } from "@/lib/branding";

interface HeadingProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Heading({ 
  children, 
  color = brandColors.navy,
  className = '' 
}: HeadingProps) {
  return (
    <h2 
      className={`text-lg sm:text-2xl lg:text-3xl font-bold leading-tight ${className}`}
      style={{
        color: color,
        fontFamily: typography.fontFamily.primary,
        marginBottom: '1rem'
      }}
    >
      {children}
    </h2>
  );
}