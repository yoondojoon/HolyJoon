import React from 'react';
import './styles/App.css';
import './styles/index.css';
import routes from './routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { StyleProvider } from '@ant-design/cssinjs';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <StyleProvider layer>
      <RouterProvider router={router} />
    </StyleProvider>
  );
}

export default App;
