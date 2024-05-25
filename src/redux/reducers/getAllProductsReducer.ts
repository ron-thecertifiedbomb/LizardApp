import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../types/Products/type';

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
    singleProductData(state, action: PayloadAction<string>) {
      const productId = action.payload;
      if (state.data) {
        const product = state.data.find(product => product._id === productId);
        state.singleProduct = product || null;
      } else {
        state.singleProduct = null;
      }
    },
  },
});

export const {allProductsData, singleProductData} =
  getProducts.actions;

export default getProducts.reducer;
