
import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInReducer from './isLoggedInReducer'; 
import getUserDataReducer from './getUserDataReducer'; 
import userIdReducer from './userIdReducer';
import isActiveLinkReducer from './isAtiveLinkReducer'; 
import updateProductReducer from './updateProductReducer';
import getAllProductsReducer from './productslice/reducer/getAllProductsReducer';
import modalReducer from './modalReducer'; 
import cartSliceReducer from './cartslice/reducer/cartReducer'


const rootReducer = combineReducers({

  userId: userIdReducer,
  isLoggedIn: isLoggedInReducer,
  users: getUserDataReducer, 
  products: getAllProductsReducer,
  isActiveLink: isActiveLinkReducer, 
  updateProduct: updateProductReducer,
  modal: modalReducer, 
  cart: cartSliceReducer,
 

});
export default rootReducer;
