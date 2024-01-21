import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import MainContent from '@/components/layout/main-content';
import * as React from 'react';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layout = cookies().get('react-resizable-panels:layout');
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <MainContent defaultLayout={defaultLayout}>{children}</MainContent>
      </div>
    </>
  );
}
