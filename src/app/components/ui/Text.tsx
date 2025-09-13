
interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'caption' | 'small' | 'large';
  color?: 'gray' | 'blue' | 'purple' | 'navy' | 'custom';
  customColor?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  responsive?: boolean;
  center?: boolean;
  className?: string;
}

export default function Text({
  children,
  variant = 'body',
  color = 'gray',
  customColor,
  size,
  weight,
  responsive = true,
  center = false,
  className = ''
}: TextProps) {
  // Variant-based defaults
  const variantDefaults = {
    body: { size: 'base' as const, weight: 'normal' as const },
    caption: { size: 'xs' as const, weight: 'normal' as const },
    small: { size: 'sm' as const, weight: 'normal' as const },
    large: { size: 'lg' as const, weight: 'normal' as const }
  };

  const finalSize = size || variantDefaults[variant].size;
  const finalWeight = weight || variantDefaults[variant].weight;

  const sizeClasses = {
    xs: responsive ? 'text-xs' : 'text-xs',
    sm: responsive ? 'text-sm sm:text-base' : 'text-sm',
    base: responsive ? 'text-sm sm:text-base' : 'text-base',
    lg: responsive ? 'text-base sm:text-lg' : 'text-lg',
    xl: responsive ? 'text-lg sm:text-xl' : 'text-xl'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    gray: 'text-gray-600',
    blue: 'text-[#2592D0]',
    purple: 'text-[#702083]',
    navy: 'text-[#012E55]',
    custom: ''
  };

  const centerClass = center ? 'text-center' : '';
  const leadingClass = responsive ? 'leading-relaxed' : '';

  return (
    <p
      className={`${sizeClasses[finalSize]} ${weightClasses[finalWeight]} ${colorClasses[color]} ${centerClass} ${leadingClass} ${className}`}
      style={customColor ? { color: customColor } : undefined}
    >
      {children}
    </p>
  );
}