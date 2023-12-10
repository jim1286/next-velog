import { auth } from './features/auth.slices';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        authReducer: auth.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
