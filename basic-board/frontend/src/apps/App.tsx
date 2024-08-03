import React from 'react';
import '../styles/App.css';
import routes from '../routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ContextProvider from '../context/ContextProvider';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
