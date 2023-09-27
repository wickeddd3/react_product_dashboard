import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './reducers/customers';
import productsReducer from './reducers/products';

export default configureStore({
  reducer: {
    customers: customersReducer,
    products: productsReducer,
  },
});
