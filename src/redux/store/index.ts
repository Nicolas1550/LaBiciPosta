import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
  },
});

// Tipado de la store y del dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
