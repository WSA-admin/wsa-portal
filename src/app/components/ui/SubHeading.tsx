
interface SubHeadingProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'navy' | 'gray' | 'custom';
  customColor?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function SubHeading({
  children,
  color = 'navy',
  customColor,
  spacing = 'lg',
  className = ''
}: SubHeadingProps) {
  const colorClasses = {
    blue: 'text-[#2592D0]',
    purple: 'text-[#702083]',
    navy: 'text-[#012E55]',
    gray: 'text-gray-900',
    custom: ''
  };

  const spacingClasses = {
    none: '',
    sm: 'mt-2',
    md: 'mt-4',
    lg: 'mt-6',
    xl: 'mt-8'
  };

  return (
    <h3
      className={`text-base sm:text-lg lg:text-xl font-medium ${colorClasses[color]} ${spacingClasses[spacing]} mb-2 ${className}`}
      style={customColor ? { color: customColor } : undefined}
    >
      {children}
    </h3>
  );
}