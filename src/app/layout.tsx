import { Layout, Header, Body } from "@/app/components/layout";
import { Logo, Nav, NavLink, Button } from "@/app/components/ui";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import { getServerSession } from "@/lib/msalServer";
import "./globals.css";

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
      {isAuthenticated && (
        <Header>
          <Logo />
          <Nav>
            <NavLink href="/documentation">Documentation</NavLink>
          </Nav>
          <Button>Logout</Button>
        </Header>
      )}
      <Body>{children}</Body>
    </Layout>
  );
}
