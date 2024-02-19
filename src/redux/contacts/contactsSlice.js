import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactAction,
  delContactById,
  editContactAction,
} from './contacts-operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isEdit: false,
  idEdit: '',
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setIsEditAction: {
      reducer(state, { payload }) {
        state.isEdit = payload;
      },
    },
    setIdAction: {
      reducer(state, { payload }) {
        state.idEdit = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //addContact
      .addCase(addContactAction.pending, handlePending)
      .addCase(addContactAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContactAction.rejected, handleRejected)
      //deleteContactById
      .addCase(delContactById.pending, handlePending)
      .addCase(delContactById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addCase(delContactById.rejected, handleRejected)
      //editContact
      .addCase(editContactAction.pending, handlePending)
      .addCase(editContactAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.items = state.items.reduce((prevValue, item) => {
        //   if (item.id !== payload.id) {
        //     return prevValue;
        //   }
        //   return { ...item, ...payload };
        // });
        state.items = state.items.map(item => {
          if (item.id !== payload.id) {
            return item;
          }
          return { ...item, ...payload };
        });
        state.isEdit = false;
      })
      .addCase(editContactAction.rejected, handleRejected);
  },
});

export const { setIsEditAction, setIdAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
