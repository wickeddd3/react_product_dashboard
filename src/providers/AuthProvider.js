import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthContext from '../contexts/AuthContext';
import { current } from '../store/reducers/auth';

export function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <AuthContext.Provider value="">{children}</AuthContext.Provider>;
}
