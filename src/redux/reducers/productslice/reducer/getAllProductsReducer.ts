import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IProduct } from '../../../../types/Products/type';


interface ProductDataState {
  allproducts: IProduct[] | null;
  singleProduct: IProduct | null;
}

const initialState: ProductDataState = {
  allproducts: null,
  singleProduct: null,
};

const getProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts(state, action: PayloadAction<IProduct[]>) {
      state.allproducts = action.payload;
    },
    singleProductData(state, action: PayloadAction<string>) {
      const productId = action.payload;
      if (state.allproducts) {
        const product = state.allproducts.find(product => product._id === productId);
        state.singleProduct = product || null;
      } else {
        state.singleProduct = null;
      }
    },
  },
});

export const {getAllProducts, singleProductData} =
  getProducts.actions;

export default getProducts.reducer;
