import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './reducers/customers';
import productsReducer from './reducers/products';
import authReducer from './reducers/auth';

export default configureStore({
  reducer: {
    customers: customersReducer,
    products: productsReducer,
    auth: authReducer,
  },
});
