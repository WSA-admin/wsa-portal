import { brandColors, typography } from "@/lib/branding";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
}

export default function Text({ 
  children, 
  color = brandColors.navy,
  size = 'base',
  weight = 'normal',
  className = '' 
}: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm sm:text-sm',
    base: 'text-base sm:text-base',
    lg: 'text-lg sm:text-lg',
    xl: 'text-xl sm:text-xl'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  return (
    <dd 
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}
      style={{
        color: color,
        fontFamily: typography.fontFamily.primary
      }}
    >
      {children}
    </dd>
  );
}