
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import getUserDataReducer from './getUserDataReducer'; 
import userIdReducer from './userIdReducer';
import isActiveLinkReducer from './isAtiveLinkReducer'; 
import updateProductReducer from './updateProductReducer';
import getProductsReducer from './getProductsReducer';
import modalReducer from './modalReducer'; 
import myCartReducer from './cartReducer'

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  users: getUserDataReducer, 
  allProducts: getProductsReducer,
  isActiveLink: isActiveLinkReducer, 
  updateProduct: updateProductReducer,
  modal: modalReducer, 
  mycart: myCartReducer
});
export default rootReducer;
