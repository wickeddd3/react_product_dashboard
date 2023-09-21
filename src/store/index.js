import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './reducers/drawer';
import customersReducer from './reducers/customers';

export default configureStore({
  reducer: {
    drawer: drawerReducer,
    customers: customersReducer,
  },
});
