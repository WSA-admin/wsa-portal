import { typography } from "@/lib/branding";

interface LabelProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Label({ 
  children, 
  color = '#6B7280', // gray-500
  className = '' 
}: LabelProps) {
  return (
    <dt 
      className={`text-sm font-medium ${className}`}
      style={{
        color: color,
        fontFamily: typography.fontFamily.primary,
        marginBottom: '0.125rem'
      }}
    >
      {children}
    </dt>
  );
}