import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //signUp
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.isLogin = true;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(signUp.rejected, handleRejected)
      //logIn
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.isLogin = true;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
