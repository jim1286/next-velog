import { configureStore } from "@reduxjs/toolkit";
import { todo } from "./features/todo.slices";

export const store = configureStore({
  reducer: {
    todoReducer: todo.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
