import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.tsx';
import NotFound from './pages/NotFound.tsx';
import Shop from './pages/Shop.tsx';
import ProductDetails from './pages/ProductDetails.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'shop',
    element: <Shop />,
    children: [
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
