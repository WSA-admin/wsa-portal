import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  // Auth layout - overrides the site layout to remove header/navigation
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}