import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ContactData {
    id: string;
    lastname: string;
    firstname: string;
    patronymic: string;
    phone: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

interface ContactState {
    data: ContactData | null;
    loading: boolean;
    error: {};
}

export const fetchContacts = createAsyncThunk<ContactData, void>(
    "contacts/fetchContact",
    async function () {
        const response = await fetch("http://135.181.35.61:2112/contacts/16", {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTYzMzg3MjIsImV4cCI6MTY1Njk0MzUyMn0.lCO-i1MtPnwY0uLZ1esSUz5m1ypI5CxlXpNYUqDIzn8",
            },
        });

        const data = await response.json();

        return data;
    }
);

const initialState: ContactState = {
    data: null,
    loading: false,
    error: {},
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = {};
                state.data = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            });
    },
});

export default contactSlice.reducer;
