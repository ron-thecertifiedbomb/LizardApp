// store.ts
import { configureStore } from '@reduxjs/toolkit';
import isLoggedInReducer from '../reducers/isLoggedInReducer';
import userIdReducer from '../reducers/userIdReducer';
import dataReducer from '../reducers/dataReducer'; // Import the data reducer

export const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    userId: userIdReducer,
    data: dataReducer, // Include the data reducer in the root reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
