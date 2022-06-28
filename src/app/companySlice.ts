import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CompanyContract {
    issue_date: string;
    no: string;
}

export interface CompanyPhotos {
    filepath: string;
    name: string;
    thumbpath: string;
}

export interface CompanyData {
    businessEntity: string;
    contactId: string;
    contract: CompanyContract;
    createdAt: string;
    id: string;
    name: string;
    photos: CompanyPhotos[];
    shortName: string;
    status: string;
    type: string[];
    updatedAt: string;
}

interface CompanyState {
    data: CompanyData | null;
    loading: boolean;
    error: {} | null;
}

const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTYzMzg3MjIsImV4cCI6MTY1Njk0MzUyMn0.lCO-i1MtPnwY0uLZ1esSUz5m1ypI5CxlXpNYUqDIzn8";

export const fetchCompany = createAsyncThunk<CompanyData, void>(
    "company/fetchCompany",
    async function () {
        const response = await fetch("http://135.181.35.61:2112/companies/12", {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });

        const data = await response.json();

        return data;
    }
);

export const postPhoto = createAsyncThunk(
    "company/postPhoto",
    async function (path: Blob) {
        const formData = new FormData();
        formData.append("file", path);
        const response = await fetch(
            "http://135.181.35.61:2112/companies/12/image",
            {
                method: "POST",
                headers: {
                    Authorization: token,
                },
                body: formData,
            }
        );
        const data = await response.json();
        console.log(path);
        addPhoto(path);
        return data;
    }
);

const initialState: CompanyState = {
    data: null,
    loading: false,
    error: null,
};

export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        addPhoto(state, action) {
            // проверка на дубликат загруженных фото
            state.data?.photos.push({
                thumbpath: action.payload,
                name: action.payload,
                filepath: action.payload,
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
            })
            .addCase(fetchCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            });
        builder
            .addCase(postPhoto.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postPhoto.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
            });
    },
});

export const { addPhoto } = companySlice.actions;

export default companySlice.reducer;
