import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { signUpRequest, logInRequest } from 'api/auth-service';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      const response = await signUpRequest(body);
      return response.data;
    } catch (error) {
      console.error(error.message);
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (body, { rejectWithValue }) => {
    try {
      const response = await logInRequest(body);
      return response.data;
    } catch (error) {
      console.error(error.message);
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
