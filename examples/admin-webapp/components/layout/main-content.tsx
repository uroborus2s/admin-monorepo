'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Sidebar from '@/components/layout/sidebar';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface MainContentProps {
  defaultLayout?: number[];
}

const MainContent = ({
  children,
  defaultLayout = [265, 440, 655],
}: React.PropsWithChildren<MainContentProps>) => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push('/auth/login');
    return null;
  }
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
          className="min-w-[50px] transition-all duration-300 ease-in-out"
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <main className="w-full pt-16">{children}</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default MainContent;
