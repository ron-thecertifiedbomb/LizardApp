import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../type';

interface ProductDataState {
  data: IProduct[] | null;
  singleProduct: IProduct | null;
}

const initialState: ProductDataState = {
  data: null,
  singleProduct: null,

};

const getProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProductsData(state, action: PayloadAction<IProduct[]>) {
      state.data = action.payload;
    },

    singleProductData(state, action: PayloadAction<IProduct>) {
      state.singleProduct = action.payload;
    },
  },
});

export const { allProductsData, singleProductData } = getProducts.actions;

export default getProducts.reducer;
