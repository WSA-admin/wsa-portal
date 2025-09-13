interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'gray';
  className?: string;
}

export default function Card({ 
  children, 
  variant = 'white',
  className = '' 
}: CardProps) {
  const variantClasses = {
    white: 'bg-white shadow-sm sm:shadow rounded-lg p-5 sm:p-6 w-full',
    gray: 'bg-gray-50 rounded-lg p-4 sm:p-5 w-full'
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}