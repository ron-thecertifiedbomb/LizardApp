// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import dataReducer from './dataReducer'; 
import userIdReducer from './userIdReducer';
import isAtiveLinkReducer from './isAtiveLink.Reducer';

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  data: dataReducer, 
  isActiveLink: isAtiveLinkReducer
});

export default rootReducer;
