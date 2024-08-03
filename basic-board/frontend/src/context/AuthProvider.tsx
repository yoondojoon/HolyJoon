import React, { createContext, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import ROUTE_INFO from '../routes/contants';

export const AuthContext = createContext({});

export default function AuthProvider() {
  const auth = {};

  useEffect(() => {
    if (!!auth) return;
    redirect(ROUTE_INFO.LOGIN);
  }, [auth]);

  return <AuthContext.Provider value={auth}>AuthContext</AuthContext.Provider>;
}
