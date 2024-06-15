
import { RootState } from '../../../store/store';

export const allProducts = (state: RootState) =>
    state.products.allproducts;


export const singleProductItem = (state: RootState) =>
    state.products.singleProduct;
