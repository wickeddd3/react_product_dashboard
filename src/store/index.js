import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './reducers/customers';

export default configureStore({
  reducer: {
    customers: customersReducer,
  },
});
