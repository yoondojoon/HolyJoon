import { QueryClient, DefaultOptions, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import React, { createContext } from 'react';

type TQueryProvicer = {
  children: React.ReactNode | null;
};

export default function QueryProvider({ children }: TQueryProvicer) {
  const defaultOptions: DefaultOptions = {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  };
  const queryClient = new QueryClient({ defaultOptions });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
