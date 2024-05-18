// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import dataReducer from './dataReducer'; 
import userIdReducer from './userIdReducer';

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  data: dataReducer, 
});

export default rootReducer;
