'use client';

import { ReactNode } from 'react';

import {
  QueryCache,
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
    queryCache: new QueryCache({
      onSuccess: (data: any, query: any) => {
        if (query.meta.onSuccess) {
          query.meta.onSuccess();
        }
      },
    }),
  });

  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryClientProvider;
