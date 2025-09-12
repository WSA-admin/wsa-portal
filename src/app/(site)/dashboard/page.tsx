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

              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Section orientation="horizontal" positioning="start" spacing="lg">
                    <Section orientation="vertical" positioning="start" spacing="none" fill>
                      <Label>Name</Label>
                      <Text>{user.displayName || 'N/A'}</Text>
                    </Section>

                    <Section orientation="vertical" positioning="start" spacing="none" fill>
                      <Label>Email</Label>
                      <Text>{user.mail || user.userPrincipalName || 'N/A'}</Text>
                    </Section>
                  </Section>

                  <Section orientation="horizontal" positioning="start" spacing="lg">
                    <Section orientation="vertical" positioning="start" spacing="none" fill>
                      <Label>Job Title</Label>
                      <Text>{user.jobTitle || 'N/A'}</Text>
                    </Section>

                    <Section orientation="vertical" positioning="start" spacing="none" fill>
                      <Label>Department</Label>
                      <Text>{user.department || 'N/A'}</Text>
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
