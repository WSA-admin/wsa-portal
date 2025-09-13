interface SectionProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  positioning?: 'start' | 'center' | 'end';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  fill?: boolean;
  responsive?: boolean;
  className?: string;
}

export default function Section({ 
  children, 
  orientation = 'vertical', 
  positioning = 'start',
  spacing = 'md',
  fill = false,
  responsive = true,
  className = '' 
}: SectionProps) {
  const orientationClasses = {
    horizontal: responsive ? 'flex flex-col sm:flex-row' : 'flex flex-row',
    vertical: 'flex flex-col'
  };

  const positioningClasses = {
    horizontal: {
      start: 'justify-start items-start',
      center: 'justify-center items-center', 
      end: 'justify-end items-end'
    },
    vertical: {
      start: 'justify-start items-start',
      center: 'justify-center items-center',
      end: 'justify-end items-end'
    }
  };

  const spacingClasses = {
    horizontal: {
      none: '',
      sm: responsive ? 'gap-2 sm:gap-x-2' : 'gap-x-2',
      md: responsive ? 'gap-3 sm:gap-x-4' : 'gap-x-4',
      lg: responsive ? 'gap-4 sm:gap-x-8' : 'gap-x-8'
    },
    vertical: {
      none: '',
      sm: 'gap-y-2',
      md: 'gap-y-4', 
      lg: 'gap-y-6'
    }
  };

  const fillClass = fill ? 'flex-1' : '';

  const classes = [
    orientationClasses[orientation],
    positioningClasses[orientation][positioning],
    spacingClasses[orientation][spacing],
    'w-full',
    fillClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}