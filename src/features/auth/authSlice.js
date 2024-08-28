import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fakeLoginAPI from '../../util/fakeLoginAPI';


export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fakeLoginAPI(credentials);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        loading: false,
        isEmpresaSelected: false,
        listEmpresas: null,
        error: null,
        usuario: null
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.isEmpresaSelected = false;
            state.listEmpresas = null;
            state.error = null;
            state.usuario = null;
        }, selectEmpresa: (state) => {
            state.isEmpresaSelected = true;
        }
    }, extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.isAuthenticated;
                state.listEmpresas = action.payload.empresas;
                state.usuario = action.payload.usuario;
                state.loading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logout, selectEmpresa } = authSlice.actions;

export default authSlice.reducer;