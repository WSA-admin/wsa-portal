'use client';

import { useDashboard } from './hooks/useDashboard';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { Section, Heading, SubHeading, Label, Text, Card } from "@/app/components/ui";

export default function DashboardPage() {
  const { user, loading, error } = useDashboard();

  if (loading) {
    return <LoadingState />;
  }

  if (error && !user) {
    return <ErrorState error={error} />;
  }

  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Heading>Welcome to the WSA Portal! 🎉</Heading>
          
          {user && (
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Your Profile</SubHeading>

              <Card variant="gray" className="hover:bg-gray-100 transition-colors duration-200">
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Section orientation="vertical" positioning="start" spacing="md" className="sm:flex-row sm:gap-8">
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Label>Name</Label>
                      <Text className="break-words">{user.displayName || 'N/A'}</Text>
                    </Section>

                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Label>Email</Label>
                      <Text className="break-all text-sm sm:text-base">{user.mail || user.userPrincipalName || 'N/A'}</Text>
                    </Section>
                  </Section>

                  <Section orientation="vertical" positioning="start" spacing="md" className="sm:flex-row sm:gap-8">
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Label>Job Title</Label>
                      <Text className="break-words">{user.jobTitle || 'N/A'}</Text>
                    </Section>

                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Label>Department</Label>
                      <Text className="break-words">{user.department || 'N/A'}</Text>
                    </Section>
                  </Section>
                </Section>
              </Card>
            </Section>
          )}
        </Section>
      </Card>
    </Section>
  );
}
