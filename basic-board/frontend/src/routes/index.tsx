import { RouteObject } from 'react-router-dom';
import ROUTE_INFO from './contants';

import Login from '../apps/login';
import Home from '../apps/home';
import DefaultLayout from '../apps';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: ROUTE_INFO.HOME, element: <Home /> },
      { path: ROUTE_INFO.LOGIN, element: <Login /> },
    ],
  },
];

export default routes;
