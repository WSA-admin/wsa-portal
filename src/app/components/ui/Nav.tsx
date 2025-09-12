interface NavProps {
  children: React.ReactNode;
  className?: string;
}

export default function Nav({ children, className = "" }: NavProps) {
  return (
    <nav className={`hidden md:flex space-x-8 ${className}`}>
      {children}
    </nav>
  );
}
