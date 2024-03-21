import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [],
    loading: false,
    error: null
 },
 extraReducers:(builder) => builder
 .addCase(fetchContacts.pending,(state) =>{
state.loading = true;
 })
 .addCase(fetchContacts.fulfilled,(state,action) =>{
    state.loading = false;
    state.items = action.payload;
 })
 .addCase(fetchContacts.rejected,(state,action) =>{
    console.log(action);
    state.error = true;
 }),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
       
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;