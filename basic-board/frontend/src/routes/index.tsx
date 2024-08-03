import Login from '../apps/login';
import Home from '../apps/home';
import { RouteObject } from 'react-router-dom';
import ROUTE_INFO from './contants';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: ROUTE_INFO.HOME, element: <Home /> },
  { path: ROUTE_INFO.LOGIN, element: <Login /> },
];

export default routes;
