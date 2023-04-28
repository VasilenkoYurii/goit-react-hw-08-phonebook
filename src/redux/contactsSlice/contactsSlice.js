import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operetions';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const updateContact = (contactsArray, id, name, number) => {
  return contactsArray.map(contact => {
    if (contact.id === id) {
      return {
        id,
        name: name,
        number: number,
      };
    }
    return contact;
  });
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        handlePending(state);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success('Contact successfully added!', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
        toast.error('Something went wrong, please try again.', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(deleteContact.pending, state => {
        handlePending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success('Contact successfully deleted!', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
        toast.error('Something went wrong, please try again.', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const { id, name, number } = action.payload;
        const updatedContacts = updateContact(state.items, id, name, number);
        state.items = updatedContacts;
        toast.success('Contact successfully changed!', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(editContact.rejected, (state, action) => {
        handleRejected(state, action);
        toast.error('Something went wrong, please try again.', {
          style: {
            width: '300px',
            height: '40px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
