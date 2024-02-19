import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  delContact,
  editContact,
} from 'api/phoneBookService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (error) {
      Report.failure(
        'Whoops. Something went wrong...',
        'Try reload page',
        'Okay'
      );
      console.error(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addContactAction = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const response = await addContact(body);
      return response.data;
    } catch (error) {
      Notify.failure('Whoops. Something went wrong... <br/> Try again!!!');
      console.error(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const delContactById = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await delContact(id);
      Notify.success(`Delete contact: ${response.data.name}. Success!`);
      return response.data.id;
    } catch (error) {
      Notify.failure('Contact not found :(');
      console.error(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const editContactAction = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await editContact(data);
      return response.data;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
