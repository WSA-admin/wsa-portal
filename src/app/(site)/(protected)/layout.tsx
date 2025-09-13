import { Layout, Header, Body } from "@/app/components/layout";
import { Logo, Nav, NavLink, LogoutButton } from "@/app/components/ui";
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // Dashboard layout with header and navigation for authenticated users
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