import type { Metadata, Viewport } from "next";

// Site-wide metadata configuration for WorkSource Alliance Portal
export const siteMetadata: Metadata = {
  title: "WorkSource Alliance Portal",
  description: "Connecting international students to Atlantic Canada's opportunities",
  
  // Logo and icon configuration
  icons: {
    icon: [
      {
        url: "/logos/WorkSource Alliance ICON-gradient.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: "/logos/WorkSource Alliance ICON-gradient.png",
    apple: "/logos/WorkSource Alliance ICON-gradient.png",
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "WorkSource Alliance Portal",
    description: "Connecting international students to Atlantic Canada's opportunities",
    type: "website",
    // siteName: "WorkSource Alliance Portal",
    // images: [
    //   {
    //     url: "/logos/WorkSource Alliance ICON-gradient.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "WorkSource Alliance Logo",
    //   },
    // ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "WorkSource Alliance Portal",
    description: "Connecting international students to Atlantic Canada's opportunities",
    // images: ["/logos/WorkSource Alliance ICON-gradient.png"],
  },
  
  // Additional metadata
  keywords: [
    "WorkSource Alliance",
    "international students",
    "Atlantic Canada",
    "opportunities",
    "portal",
    "employment",
    "education"
  ],
  
  // Manifest for PWA (if needed later)
  // manifest: "/manifest.json",
};

// Viewport configuration (Next.js 15+ requirement)
export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2592D0", // Theme color based on brand primary color (blue)
};

// Alternative metadata configurations for different pages/sections
export const pageMetadata = {
  // Example: specific metadata for different sections
  // dashboard: {
  //   title: "Dashboard - WorkSource Alliance Portal",
  //   description: "Your personalized dashboard for opportunities and connections",
  // },
  // opportunities: {
  //   title: "Opportunities - WorkSource Alliance Portal", 
  //   description: "Discover job and education opportunities in Atlantic Canada",
  // },
} as const;
