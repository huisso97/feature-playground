'use client';

import { ReactNode } from 'react';

import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryClientProvider;
