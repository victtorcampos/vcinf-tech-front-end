import { configureStore } from '@reduxjs/toolkit';

// Importe seus reducers aqui
import authReducer from './features/auth/authSlice';
import empresaReducer from './features/section/empresaSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        empresa: empresaReducer,
    },
});
