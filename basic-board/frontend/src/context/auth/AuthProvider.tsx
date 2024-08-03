import React, { createContext, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import ROUTE_INFO from '../../routes/contants';

type TAuth = {
  userName: string;
  birthday: string;
};

type TAuthProvider = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as { auth: TAuth });

export default function AuthProvider({ children }: TAuthProvider) {
  const auth = { userName: '전성수', birthday: '1994-10-13' };

  useEffect(() => {
    if (!!auth) return;
    redirect(ROUTE_INFO.LOGIN);
  }, [auth]);

  return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
}
