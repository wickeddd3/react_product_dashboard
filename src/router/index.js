import { Routes, Route } from 'react-router-dom';
import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import Products from '../pages/Products';
import NewProduct from '../pages/NewProduct';
import Login from '../pages/Login';

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
