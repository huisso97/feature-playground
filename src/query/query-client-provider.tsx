"use client";

import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({});

  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryClientProvider;
