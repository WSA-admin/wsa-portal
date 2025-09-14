'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import Link from "next/link";
import WorkSourceAllianceMobile from './components/WorkSourceAllianceMobile';
import WorkSourceAllianceDesktop from './components/WorkSourceAllianceDesktop';

export default function WorkSourceAlliancePage() {
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
            <Text color="gray">WorkSource Alliance Platform</Text>
          </Section>
        </Section>

        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>🌟 WorkSource Alliance Platform</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Main public-facing platform connecting international students and graduates with employers across Atlantic Canada
          </Text>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <WorkSourceAllianceMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <WorkSourceAllianceDesktop />
        </div>
      </Section>
    </div>
  );
}