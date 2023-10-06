import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout.js';
import Dashboard from '../pages/Dashboard.js';
import Customers from '../pages/Customers.js';
import Products from '../pages/Products.js';
import NewProduct from '../pages/NewProduct.js';
import Login from '../pages/Login.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/new-product',
        element: <NewProduct />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
