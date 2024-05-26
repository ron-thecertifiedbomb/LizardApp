
import {RootState} from '../store/store';


export const selectisActiveLink = (state: RootState) =>
  state.isActiveLink.isActiveLink;
export const AllProductsData = (state: RootState) => state.allProducts.data;
export const SingleProductData = (state: RootState) =>
  state.allProducts.singleProduct;
export const selectModalState = (state: RootState) => state.modal;
export const selectCartData = (state: RootState) => state.mycart.cart;
export const selectCartTotalPrice = (state: RootState) => state.mycart.totalPrice;
export const selectSetIsSelected = (state: RootState) => state.mycart.isSelected;