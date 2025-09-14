'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import Link from "next/link";
import SecurityMobile from './components/SecurityMobile';
import SecurityDesktop from './components/SecurityDesktop';

export default function SecurityGuidePage() {
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
            <Text color="gray">Security Guide</Text>
          </Section>
        </Section>

        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>🔒 WSA Security Guidelines</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Comprehensive security best practices and guidelines for WorkSource Alliance platform development
          </Text>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <SecurityMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <SecurityDesktop />
        </div>
      </Section>
    </div>
  );
}