import {RootState} from '../store/store';

export const selectisActiveLink = (state: RootState) =>
  state.isActiveLink.isActiveLink;
export const SingleProductData = (state: RootState) =>
  state.getAllProducts.singleProduct;
export const selectModalState = (state: RootState) => state.modal;
export const selectCartTotalPrice = (state: RootState) =>
  state.mycart.totalPrice;
export const selectSetIsSelected = (state: RootState) =>
  state.mycart.isSelected;



export const selectUserId = (state: RootState) => state.userId.userId;
export const getAllProducts = (state: RootState) =>
  state.getAllProducts.products;

export const cartItems = (state: RootState) => state.mycart.cart;