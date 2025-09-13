import { siteMetadata, siteViewport } from "@/lib/metadata";
import "./globals.css";

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Minimal root layout - no navigation, just HTML structure
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
