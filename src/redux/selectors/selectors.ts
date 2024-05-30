import {RootState} from '../store/store';

export const selectisActiveLink = (state: RootState) =>
  state.isActiveLink.isActiveLink;
export const SingleProductData = (state: RootState) =>
  state.getAllProducts.singleProduct;

export const selectModalState = (state: RootState) => state.modal;



export const selectSetIsSelected = (state: RootState) =>
  state.cart.isSelected;


export const selectUserId = (state: RootState) => state.userId.userId;

export const getAllProducts = (state: RootState) =>
  state.getAllProducts.products;

