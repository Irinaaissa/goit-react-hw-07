import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchContacts, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log(action);
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact .pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        console.log(action);
        state.error = true;
        state.loading = false;
      })
      ,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            // id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // deleteContact(state, action) {
      // const index = state.items.findIndex(
        // (contact) => contact.id === action.payload
      // );
      // state.items.splice(index, 1);
    // },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact,  } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
