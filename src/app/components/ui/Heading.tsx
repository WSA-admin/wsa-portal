
interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'blue' | 'purple' | 'navy' | 'gray' | 'custom';
  customColor?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'semibold' | 'bold';
  responsive?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  color = 'navy',
  customColor,
  size,
  weight = 'bold',
  responsive = true,
  spacing = 'md',
  className = ''
}: HeadingProps) {
  const colorClasses = {
    blue: 'text-[#2592D0]',
    purple: 'text-[#702083]',
    navy: 'text-[#012E55]',
    gray: 'text-gray-900',
    custom: ''
  };

  const sizeClasses = {
    sm: responsive ? 'text-sm sm:text-base' : 'text-sm',
    base: responsive ? 'text-base sm:text-lg' : 'text-base',
    lg: responsive ? 'text-lg sm:text-xl' : 'text-lg',
    xl: responsive ? 'text-lg sm:text-2xl lg:text-3xl' : 'text-2xl'
  };

  const weightClasses = {
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const spacingClasses = {
    none: '',
    sm: 'mt-2',
    md: 'mt-4',
    lg: 'mt-6'
  };

  // Default sizes by level if not specified
  const defaultSize = size || (level <= 2 ? 'xl' : level === 3 ? 'lg' : 'base');

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      className={`${sizeClasses[defaultSize]} ${weightClasses[weight]} ${colorClasses[color]} ${spacingClasses[spacing]} leading-tight transition-colors duration-300 ${className}`}
      style={customColor ? { color: customColor } : undefined}
    >
      {children}
    </Tag>
  );
}