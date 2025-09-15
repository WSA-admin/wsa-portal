'use client';

import { useState, useEffect } from 'react';
import { Section } from "@/app/components/ui";
import OperationsMobile from './components/OperationsMobile';
import OperationsDesktop from './components/OperationsDesktop';

export default function OperationsManualPage() {
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
        <OperationsMobile />
      </div>
      <div className="hidden lg:block">
        <OperationsDesktop />
      </div>
    </>
  );
}