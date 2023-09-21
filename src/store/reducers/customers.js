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
  ],
  rows: [
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      contact: '2234-2342-0000',
    },
    {
      name: 'Tony Stark',
      email: 'tonystark@gmail.com',
      contact: '2234-4444-0000',
    },
    {
      name: 'Bruce Banner',
      email: 'brucebanner@gmail.com',
      contact: '2234-7878-0000',
    },
    {
      name: 'Peter Parker',
      email: 'peterparker@gmail.com',
      contact: '2234-2222-0000',
    },
    {
      name: 'Bruce Wayne',
      email: 'brucewayne@gmail.com',
      contact: '2234-4662-0000',
    },
  ],
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    createCustomer: (state, action) => {
      const rows = [...state.rows];
      rows.push(action.payload);
      state.rows = rows;
    },
  },
});

export const { createCustomer } = customersSlice.actions;

export default customersSlice.reducer;
