import { siteMetadata, siteViewport } from "@/lib/metadata";
import { lexend } from "@/lib/branding";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  // Root layout with proper HTML structure and WSA branding
  return (
    <html lang="en" className="min-h-full bg-blue-50">
      <body className={`${lexend.variable} font-lexend antialiased min-h-full w-full flex flex-col bg-blue-50`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
