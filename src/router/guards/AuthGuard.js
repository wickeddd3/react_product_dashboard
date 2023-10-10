import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function AuthGuard({ children }) {
  const token = window.localStorage.getItem('react_product_dashboard.accessToken');

  return token ? (
    <Suspense
      fallback={
        <LoadingBar
          color="#1976d2"
          progress={100}
          waitingTime={2000}
          loaderSpeed={200}
        />
      }
    >
      {children}
    </Suspense>
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
}

export default AuthGuard;
