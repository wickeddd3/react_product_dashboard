import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout.js';
import Dashboard from '../pages/Dashboard.js';
import Products from '../pages/Products.js';
import Customers from '../pages/Customers.js';

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
