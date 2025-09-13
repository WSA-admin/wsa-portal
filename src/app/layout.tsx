import { Layout, Header, Body } from "@/app/components/layout";
import { Logo, Nav, NavLink, LogoutButton } from "@/app/components/ui";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import { getServerSession } from "@/lib/msalServer";
import "./globals.css";

// Force dynamic rendering for all pages due to authentication
export const dynamic = 'force-dynamic';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const isAuthenticated = session.isLoggedIn;

  return (
    <Layout>
      <Header>
        <Logo />
        <Nav>
          <NavLink href="/documentation">Documentation</NavLink>
        </Nav>
        {isAuthenticated && <LogoutButton />}
      </Header>
      <Body>{children}</Body>
    </Layout>
  );
}
