'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import Link from "next/link";
import DeveloperMobile from './components/DeveloperMobile';
import DeveloperDesktop from './components/DeveloperDesktop';

export default function DeveloperManualPage() {
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
            <Link href="/documentation" className="text-[#2592D0] hover:text-[#012E55] transition-colors">
              ← Documentation Hub
            </Link>
            <Text color="gray" customColor="#9CA3AF">/</Text>
            <Text color="gray">Developer Manual</Text>
          </Section>
        </Section>

        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>👨‍💻 Developer Manual</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Technical documentation for WorkSource Alliance platform development, architecture, and deployment processes
          </Text>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <DeveloperMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <DeveloperDesktop />
        </div>
      </Section>
    </div>
  );
}