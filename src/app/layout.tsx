import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WorkSource Alliance Portal",
  description: "Connecting international students to Atlantic Canada's opportunities",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-lexend antialiased`}
      >
        {children}
      </body>
    </html>
  );
}