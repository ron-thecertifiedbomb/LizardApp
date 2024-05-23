import { createSelector } from '@reduxjs/toolkit';
import {RootState} from '../store/store';

export const selectIsLoggedIn = (state: RootState) =>
  state.isLoggedIn.isLoggedIn;
export const selectUserId = (state: RootState) => state.userId.userId;
export const selectData = (state: RootState) => state.users.data;
export const selectFilteredData = (state: RootState) =>
  state.users.filteredData;
export const selectisActiveLink = (state: RootState) =>
  state.isActiveLink.isActiveLink;
export const AllProductsData = (state: RootState) => state.allProducts.data;
export const SingleProductData = (state: RootState) =>
  state.allProducts.singleProduct;
export const ProductId = (state: RootState) => state.allProducts._id;
export const selectModalState = (state: RootState) => state.modal;
export const selectCartData = (state: RootState) => state.mycart.cart;
export const selectCartTotalPrice = (state: RootState) => state.mycart.totalPrice;

