import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../types/Products/type';

interface ProductDataState {
  products: IProduct[] | null;
  singleProduct: IProduct | null;
}

const initialState: ProductDataState = {
  products: null,
  singleProduct: null,
};

const getProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    singleProductData(state, action: PayloadAction<string>) {
      const productId = action.payload;
      if (state.products) {
        const product = state.products.find(product => product._id === productId);
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
