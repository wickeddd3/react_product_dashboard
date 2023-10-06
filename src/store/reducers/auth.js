import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LoginResource from '../../resource/LoginResource';

const loginResource = new LoginResource();

const initialState = {
  info: {
    name: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      if (accessToken) {
        window.localStorage.setItem('react_product_dashboard.accessToken', accessToken);
        state.info = {
          name: user?.name,
          email: user?.email,
        };
      }
    });
  },
});

// export const { } = authSlice.actions;

export default authSlice.reducer;

export const login = createAsyncThunk('auth/login', async (initialData) => {
  const response = await loginResource.login(initialData);
  return response.data;
});
