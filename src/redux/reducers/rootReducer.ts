
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import getUserDataReducer from './getUserDataReducer'; 
import userIdReducer from './userIdReducer';
import isActiveLinkReducer from './isAtiveLinkReducer'; 
import updateProductReducer from './updateProductReducer';
import getProductsReducer from './getProductsReducer';


const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  users: getUserDataReducer, 
  allProducts: getProductsReducer,
  singleProductData: getProductsReducer,
  isActiveLink: isActiveLinkReducer, 
  updateProduct: updateProductReducer
});

export default rootReducer;