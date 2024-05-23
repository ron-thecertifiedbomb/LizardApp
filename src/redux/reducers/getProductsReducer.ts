import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../type';

interface ProductDataState {
  data: IProduct[] | null;
  singleProduct: IProduct | null;
  _id: string;
}

const initialState: ProductDataState = {
  data: null,
  singleProduct: null,
  _id: '',
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
        state.singleProduct = null; // If state.data is null or undefined
      }
    },
    
    setProductId(state, action: PayloadAction<string>) {
      state._id = action.payload;
    },
  },
});

export const { allProductsData, singleProductData, setProductId } = getProducts.actions;

export default getProducts.reducer;
