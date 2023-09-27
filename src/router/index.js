import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout.js';
import Dashboard from '../pages/dashboard.js';
import Products from '../pages/products.js';
import Customers from '../pages/customers.js';

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
        path: '/products',
        element: <Products />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
    ],
  },
]);

export default router;
