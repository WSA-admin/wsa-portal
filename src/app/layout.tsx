import { Layout, Header, Body } from "@/app/components/layout";
import { Logo, Nav, NavLink, LogoutButton } from "@/app/components/ui";
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
  return (
    <Layout>
      <Header>
        <Logo />
        <Nav>
          <NavLink href="/documentation">Documentation</NavLink>
        </Nav>
        <LogoutButton />
      </Header>
      <Body>{children}</Body>
    </Layout>
  );
}
