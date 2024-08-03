import React from 'react';
import QueryProvider from '../feature/http-client/QueryProvider';
import AuthProvider from './auth/AuthProvider';

type TContextProvider = {
  children: React.ReactNode | null;
};

export default function ContextProvider({ children }: TContextProvider) {
  return (
    <div className="container">
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </div>
  );
}
