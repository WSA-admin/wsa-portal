'use client';

import { useState, useEffect } from 'react';
import { Section } from "@/app/components/ui";
import ClientManagementMobile from './components/ClientManagementMobile';
import ClientManagementDesktop from './components/ClientManagementDesktop';

export default function ClientManagementPage() {
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
        <ClientManagementMobile />
      </div>
      <div className="hidden lg:block">
        <ClientManagementDesktop />
      </div>
    </>
  );
}