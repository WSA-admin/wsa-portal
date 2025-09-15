'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import Link from "next/link";
import WSAPortalMobile from './components/WSAPortalMobile';
import WSAPortalDesktop from './components/WSAPortalDesktop';

export default function WSAPortalPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Section spacing="md">
        {/* Breadcrumb Navigation */}
        <Section delay={50} animationType="fadeUp">
          <Section orientation="horizontal" spacing="sm" className="mb-4 items-center">
            <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] transition-colors">
              ← Developer Manual
            </Link>
            <Text color="gray" customColor="#9CA3AF">/</Text>
            <Text color="gray">WSA Portal</Text>
          </Section>
        </Section>

        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>🏛️ WSA Portal</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Internal secure portal with Microsoft Azure AD authentication and SharePoint integration for team collaboration
          </Text>
          <div className="bg-blue-50 border-l-4 border-[#2592D0] p-4 rounded-r mt-4">
            <Text variant="small" customColor="#1E40AF">
              <span className="font-semibold">Current Project:</span> You are currently viewing the WSA Portal documentation from within the portal itself.
            </Text>
          </div>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <WSAPortalMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <WSAPortalDesktop />
        </div>
      </Section>
    </div>
  );
}