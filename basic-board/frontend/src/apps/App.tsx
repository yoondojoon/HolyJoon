import React from 'react';
import '../styles/App.css';
import routes from '../routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import QueryProvider from '../feature/http-client/QueryProvider';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className="container">
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </div>
  );
}

export default App;
