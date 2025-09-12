interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function Body({ children, className = "" }: BodyProps) {
  return (
    <main className={`flex-1 w-full h-full flex flex-col p-8 ${className}`}>
      {children}
    </main>
  );
}
