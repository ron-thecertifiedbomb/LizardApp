// store.ts
import { configureStore } from '@reduxjs/toolkit';
import isLoggedInReducer from '../reducers/isLoggedInReducer';
import userIdReducer from '../reducers/userIdReducer';

export const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    userId: userIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
