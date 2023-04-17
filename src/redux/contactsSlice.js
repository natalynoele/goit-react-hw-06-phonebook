import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CONTACTS_INITIAL_STATE } from './constants';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: CONTACTS_INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
       state.data.unshift(action.payload);      
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const contacts = state.data.filter(
          contact => contact.id !== action.payload
        );
        return { ...state, data: contacts };
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, deleteContact } = contactSlice.actions;
