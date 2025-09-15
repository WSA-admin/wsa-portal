'use client';

import { useState, useEffect } from 'react';
import { Section } from "@/app/components/ui";
import DailyOperationsMobile from './components/DailyOperationsMobile';
import DailyOperationsDesktop from './components/DailyOperationsDesktop';

export default function DailyOperationsPage() {
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
        <DailyOperationsMobile />
      </div>
      <div className="hidden lg:block">
        <DailyOperationsDesktop />
      </div>
    </>
  );
}