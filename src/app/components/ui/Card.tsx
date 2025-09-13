interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'gray';
  mobileContent?: React.ReactNode;
  desktopContent?: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = 'white',
  mobileContent,
  desktopContent,
  mobileOnly = false,
  desktopOnly = false,
  className = ''
}: CardProps) {
  const variantClasses = {
    white: 'bg-white shadow-sm sm:shadow rounded-lg p-5 sm:p-6 w-full',
    gray: 'bg-gray-50 rounded-lg p-4 sm:p-5 w-full'
  };

  const baseClasses = `${variantClasses[variant]} ${className}`;

  // Handle responsive visibility
  if (mobileOnly) {
    return (
      <div className={`lg:hidden ${baseClasses}`}>
        {children}
      </div>
    );
  }

  if (desktopOnly) {
    return (
      <div className={`hidden lg:block ${baseClasses}`}>
        {children}
      </div>
    );
  }

  // Handle different content for mobile/desktop
  if (mobileContent || desktopContent) {
    return (
      <>
        {mobileContent && (
          <div className={`lg:hidden ${baseClasses}`}>
            {mobileContent}
          </div>
        )}
        {desktopContent && (
          <div className={`hidden lg:block ${baseClasses}`}>
            {desktopContent}
          </div>
        )}
      </>
    );
  }

  // Default responsive card
  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}