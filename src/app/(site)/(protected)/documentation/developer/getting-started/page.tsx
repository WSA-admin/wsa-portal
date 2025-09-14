'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import Link from "next/link";
import GettingStartedMobile from './components/GettingStartedMobile';
import GettingStartedDesktop from './components/GettingStartedDesktop';

export default function GettingStartedPage() {
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
            <Text color="gray">Getting Started</Text>
          </Section>
        </Section>

        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>🚀 Getting Started with WSA Development</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Complete setup guide for new developers joining the WorkSource Alliance development team
          </Text>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <GettingStartedMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <GettingStartedDesktop />
        </div>
      </Section>
    </div>
  );
}