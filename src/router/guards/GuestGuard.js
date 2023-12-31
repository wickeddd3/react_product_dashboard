import { Navigate } from 'react-router-dom';

function GuestGuard({ children }) {
  const token = window.localStorage.getItem('react_product_dashboard.accessToken');

  return !token ? (
    children
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
}

export default GuestGuard;
