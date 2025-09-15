'use client';

import { useState, useEffect } from 'react';
import { Section } from "@/app/components/ui";
import PlatformAdministrationMobile from './components/PlatformAdministrationMobile';
import PlatformAdministrationDesktop from './components/PlatformAdministrationDesktop';

export default function PlatformAdministrationPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Section orientation="vertical" positioning="center" spacing="lg" className="min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#2592D0' }}></div>
      </Section>
    );
  }

  return (
    <>
      <div className="lg:hidden">
        <PlatformAdministrationMobile />
      </div>
      <div className="hidden lg:block">
        <PlatformAdministrationDesktop />
      </div>
    </>
  );
}