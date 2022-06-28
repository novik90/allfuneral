import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./companySlice";
import contactReducer from "./contactsSlice";

export const store = configureStore({
    reducer: {
        companies: companyReducer,
        contact: contactReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
