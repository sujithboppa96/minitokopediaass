import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...ProductDetails,
        path: '/pdp'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
