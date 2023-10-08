import { Navigate } from 'react-router-dom';

function AuthGuard({ children }) {
  const token = window.localStorage.getItem('react_product_dashboard.accessToken');

  return token ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
}

export default AuthGuard;
