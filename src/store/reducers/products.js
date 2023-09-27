import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headCells: [
    {
      id: 'product',
      numeric: false,
      disablePadding: true,
      label: 'Product',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Price',
    },
    {
      id: 'stock',
      numeric: false,
      disablePadding: false,
      label: 'Stock',
    },
    {
      id: 'publish',
      numeric: false,
      disablePadding: true,
      label: 'Publish',
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: true,
      label: '',
    },
  ],
  rows: [
    {
      id: 1,
      category: 'Shoe',
      product: 'Jordan 1 Black Toe',
      price: '5100',
      stock: '75',
      publish: 'Published',
    },
    {
      id: 2,
      category: 'Shoe',
      product: 'Travis Scott Reverse Mocha',
      price: '120000',
      stock: '95',
      publish: 'Published',
    },
    {
      id: 3,
      category: 'Shoe',
      product: 'Jordan 1 Black Toe',
      price: '8000',
      stock: '5',
      publish: 'Published',
    },
    {
      id: 4,
      category: 'Shoe',
      product: 'Jordan 1 Black Toe',
      price: '11000',
      stock: '10',
      publish: 'Published',
    },
    {
      id: 5,
      category: 'Shoe',
      product: 'Jordan 1 Black Toe',
      price: '70000',
      stock: '25',
      publish: 'Draft',
    },
  ],
  selectedCustomer: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createCustomer: (state, action) => {
      const rows = [...state.rows];
      rows.push({ ...action.payload, id: state.rows.length + 1 });
      state.rows = rows;
    },
    selectCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
    resetSelectedCustomer: (state) => {
      state.selectedCustomer = {};
    },
    updateCustomer: (state, action) => {
      const rows = [...state.rows];
      const updatedCustomer = action.payload;
      const index = rows.findIndex((row) => row.id === updatedCustomer.id);
      rows[index] = updatedCustomer;
      state.rows = rows;
    },
    deleteCustomer: (state, action) => {
      const rows = [...state.rows];
      const selectedCustomer = action.payload;
      const updatedRows = rows.filter((row) => row.id !== selectedCustomer.id);
      state.rows = updatedRows;
    },
    deleteSelectedCustomers: (state, action) => {
      const rows = [...state.rows];
      const selectedCustomers = action.payload;
      const updatedRows = rows.filter((row) => !selectedCustomers.some((customer) => customer.id === row.id));
      state.rows = updatedRows;
    },
  },
});

export const {
  createCustomer,
  selectCustomer,
  resetSelectedCustomer,
  updateCustomer,
  deleteCustomer,
  deleteSelectedCustomers,
} = productsSlice.actions;

export default productsSlice.reducer;
