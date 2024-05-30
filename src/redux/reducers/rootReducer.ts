
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import getUserDataReducer from './getUserDataReducer'; 
import userIdReducer from './userIdReducer';
import isActiveLinkReducer from './isAtiveLinkReducer'; 
import updateProductReducer from './updateProductReducer';
import getProductsReducer from './getAllProductsReducer';
import modalReducer from './modalReducer'; 
import myCartReducer from './cartReducer'
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  users: getUserDataReducer, 
  getAllProducts: getProductsReducer,
  isActiveLink: isActiveLinkReducer, 
  updateProduct: updateProductReducer,
  modal: modalReducer, 
  mycart: myCartReducer,
  data: dataReducer,
});
export default rootReducer;
