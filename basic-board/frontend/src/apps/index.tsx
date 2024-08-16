import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ContextProvider from '../context/ContextProvider';
import ROUTE_INFO from '../routes/contants';

function DefaultLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location || location?.pathname === '/') {
      navigate(ROUTE_INFO.HOME);
    }
  }, [location]);
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
}

export default DefaultLayout;
