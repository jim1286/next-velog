import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user.slices";

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
