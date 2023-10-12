import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductResource from '../../resource/ProductResource';

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
      id: 'availability',
      numeric: false,
      disablePadding: true,
      label: 'Availability',
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: true,
      label: '',
    },
  ],
  rows: [],
  categories: [
    {
      id: 1,
      group: 'Shoe',
      name: 'Sneaker',
    },
    {
      id: 2,
      group: 'Clothing',
      name: 'Shirt',
    },
    {
      id: 3,
      group: 'Clothing',
      name: 'Jacket',
    },
    {
      id: 4,
      group: 'Clothing',
      name: 'Pants',
    },
    {
      id: 5,
      group: 'Accessories',
      name: 'Watch',
    },
    {
      id: 6,
      group: 'Accessories',
      name: 'Cap',
    },
    {
      id: 7,
      group: 'Accessories',
      name: 'Wallet',
    },
    {
      id: 8,
      group: 'Clothing',
      name: 'Short',
    },
    {
      id: 9,
      group: 'Shoe',
      name: 'Sandals',
    },
    {
      id: 10,
      group: 'Shoe',
      name: 'Formal',
    },
  ],
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
  extraReducers(builder) {
    builder
      .addCase(listProducts.fulfilled, (state, action) => {
        const response = action.payload;
        if (response) {
          state.rows = action.payload;
        }
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        const rows = [...state.rows];
        const createdProduct = action.payload;
        rows.push(createdProduct);
        state.rows = rows;
      });
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

export const listProducts = createAsyncThunk('products/listProducts', async (initialData) => {
  const productResource = new ProductResource();
  const { data, status } = await productResource.list(initialData);
  if (status === 200) {
    return data;
  }
  return null;
});

export const createProduct = createAsyncThunk('products/createProduct', async (initialData) => {
  const productResource = new ProductResource();
  const response = await productResource.create(initialData);
  return response.data;
});
