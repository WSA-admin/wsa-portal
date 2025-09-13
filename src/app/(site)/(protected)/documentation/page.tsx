'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, Text } from "@/app/components/ui";
import DocumentationMobile from './components/DocumentationMobile';
import DocumentationDesktop from './components/DocumentationDesktop';

export default function DocumentationPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Section spacing="md">
        {/* Hero Section */}
        <Section delay={100} animationType="fadeUp" spacing="md">
          <Heading>WorkSource Alliance Documentation Hub</Heading>
          <Text className={`max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Quick access to company information, team contacts, and organizational resources
          </Text>
        </Section>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <DocumentationMobile />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block">
          <DocumentationDesktop />
        </div>
      </Section>
    </div>
  );
}