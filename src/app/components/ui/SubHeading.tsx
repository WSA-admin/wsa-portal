import { brandColors, typography } from "@/lib/branding";

interface SubHeadingProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function SubHeading({ 
  children, 
  color = brandColors.navy,
  className = '' 
}: SubHeadingProps) {
  return (
    <h3 
      className={`text-base sm:text-lg lg:text-xl font-medium ${className}`}
      style={{
        color: color,
        fontFamily: typography.fontFamily.primary,
        marginBottom: '0.5rem'
      }}
    >
      {children}
    </h3>
  );
}