import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fakeLoadEmpresaAPI from '../../util/fakeLoadEmpresaAPI';

export const load = createAsyncThunk(
    'empresa/load',
    async (empresa, { rejectWithValue }) => {
        try {
            const response = await fakeLoadEmpresaAPI(empresa);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const empresaSlice = createSlice({
    name: "empresa", initialState: {
        data: null,
        loading: false,
        error: null
    }, reducers: {}, extraReducers: (builder) => {
        builder.addCase(load.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(load.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(load.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

//export const {  } = empresaSlice.actions;

export default empresaSlice.reducer;