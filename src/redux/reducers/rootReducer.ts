// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userIdReducer from './userIdReducer';
import isLoggedInReducer from './isLoggedInReducer';

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
});

export default rootReducer;
