import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import pMinDelay from 'p-min-delay';
import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';
const Dashboard = lazy(() => pMinDelay(import('../pages/Dashboard'), 1000));
const Customers = lazy(() => import('../pages/Customers'));
const Products = lazy(() => import('../pages/Products'));
const NewProduct = lazy(() => import('../pages/NewProduct'));
const Login = lazy(() => import('../pages/Login'));

const router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestGuard>
            <Login />
          </GuestGuard>
        }
      />
      <Route
        path="/"
        element={
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        }
      />
      <Route
        path="/customers"
        element={
          <AuthGuard>
            <Customers />
          </AuthGuard>
        }
      />
      <Route
        path="/products"
        element={
          <AuthGuard>
            <Products />
          </AuthGuard>
        }
      />
      <Route
        path="/products/new-product"
        element={
          <AuthGuard>
            <NewProduct />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default router;
