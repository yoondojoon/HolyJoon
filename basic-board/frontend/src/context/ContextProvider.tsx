import React from 'react';
import QueryProvider from '../feature/http-client/QueryProvider';
import AuthProvider from './auth/AuthProvider';

import { Layout } from 'antd';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import { LeftSideBar } from '../layouts/LeftSideBar';

type TContextProvider = {
  children: React.ReactNode | null;
};

export default function ContextProvider({ children }: TContextProvider) {
  return (
    <Layout className="pl-200">
      <Header />
      <Layout>
        <QueryProvider>
          <AuthProvider>
            <LeftSideBar />
            <Layout.Content>{children}</Layout.Content>
          </AuthProvider>
        </QueryProvider>
      </Layout>
      <Footer />
    </Layout>
  );
}
