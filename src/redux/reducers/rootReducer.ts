// rootReducer.ts
import { Reducer, combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import dataReducer from './dataReducer'; 
import userIdReducer from './userIdReducer';
import isActiveLinkReducer from './isAtiveLinkReducer'; 
import updateProductReducer from './updateProductReducer';
import { UpdateProductFieldAction, UpdateProductState } from '../../../type';

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  data: dataReducer, 
  isActiveLink: isActiveLinkReducer, 
  updateProduct: updateProductReducer as Reducer<UpdateProductState, UpdateProductFieldAction>, 
});

export default rootReducer;