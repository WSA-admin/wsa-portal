import { Layout, Body } from "@/app/components/layout";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import "../globals.css";

// Force dynamic rendering for auth pages
export const dynamic = 'force-dynamic';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Body>{children}</Body>
    </Layout>
  );
}
