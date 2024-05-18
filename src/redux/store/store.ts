// store.ts
import { configureStore } from '@reduxjs/toolkit';
import isLoggedInReducer from '../reducers/isLoggedInReducer';
import userIdReducer from '../reducers/userIdReducer';
import dataReducer from '../reducers/dataReducer'; 
import isAtiveLinkReducer from '../reducers/isAtiveLink.Reducer';

export const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    userId: userIdReducer,
    data: dataReducer,
    isActiveLink:  isAtiveLinkReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
