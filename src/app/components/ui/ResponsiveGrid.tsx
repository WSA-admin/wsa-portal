interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ResponsiveGrid({ 
  children, 
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = '' 
}: ResponsiveGridProps) {
  const { mobile = 1, tablet = 2, desktop = 3 } = cols;
  
  const gapClasses = {
    sm: 'gap-4 sm:gap-4 lg:gap-5',
    md: 'gap-5 sm:gap-6 lg:gap-7',
    lg: 'gap-6 sm:gap-8 lg:gap-10'
  };

  const gridCols = `grid-cols-${mobile} sm:grid-cols-${tablet} lg:grid-cols-${desktop}`;

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}