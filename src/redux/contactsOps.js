import axios from "axios";
import { createAsyncThunk, } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://65f9e0873909a9a65b19950f.mockapi.io";
export const fetchContacts = createAsyncThunk("contacts/fetchAll",
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts'); 
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);  
    }
});
export const deleteContact = createAsyncThunk("contacts/deleteContact",
async (contactId,thunkAPI) => {
try {
    const response = await axios.get(`/contacts/${contactId}`); 
return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    
        
        
    
    
    
});