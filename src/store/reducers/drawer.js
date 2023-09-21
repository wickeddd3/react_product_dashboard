import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  component: null,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawer: (state, action) => {
      state.component = action.payload;
      state.show = true;
    },
    closeDrawer: (state) => {
      (state.component = null), (state.show = false);
    },
  },
});

export const { setDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
