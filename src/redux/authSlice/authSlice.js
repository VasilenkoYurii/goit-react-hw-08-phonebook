import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, logIn, logOut, refreshingUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, () => {
        toast.error('Something went wrong, please try again.', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, () => {
        toast.error('Something went wrong, please try again.', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshingUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
