import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headCells: [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Customer Name',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: true,
      label: 'Email',
    },
    {
      id: 'contact',
      numeric: false,
      disablePadding: true,
      label: 'Contact',
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
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      contact: '2234-2342-0000',
    },
    {
      id: 2,
      name: 'Tony Stark',
      email: 'tonystark@gmail.com',
      contact: '2234-4444-0000',
    },
    {
      id: 3,
      name: 'Bruce Banner',
      email: 'brucebanner@gmail.com',
      contact: '2234-7878-0000',
    },
    {
      id: 4,
      name: 'Peter Parker',
      email: 'peterparker@gmail.com',
      contact: '2234-2222-0000',
    },
    {
      id: 5,
      name: 'Bruce Wayne',
      email: 'brucewayne@gmail.com',
      contact: '2234-4662-0000',
    },
  ],
  selectedCustomer: {},
};

export const customersSlice = createSlice({
  name: 'customers',
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
      const index = rows.findIndex((row) => row.id === selectedCustomer.id);
      if (index >= 0) {
        rows.splice(index, 1);
        state.rows = rows;
      }
    },
  },
});

export const { createCustomer, selectCustomer, resetSelectedCustomer, updateCustomer, deleteCustomer } =
  customersSlice.actions;

export default customersSlice.reducer;
