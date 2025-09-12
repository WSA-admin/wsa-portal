import { lexend } from "@/lib/branding";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="min-h-full bg-blue-50">
      <body
        className={`${lexend.variable} font-lexend antialiased min-h-full w-full flex flex-col bg-blue-50`}
      >
        {children}
      </body>
    </html>
  );
}
