import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../../../types/products/type';
import {CartData} from '../../../../components/cart/type';

interface CartListDataState {
  getCartListITems: CartData[] | null;
}

const initialState: CartListDataState = {
  getCartListITems: null,
};

const getCartListReducer = createSlice({
  name: 'userCartItems',
  initialState,
  reducers: {
    getAllCartItems(state, action: PayloadAction<CartData[]>) {
      state.getCartListITems = action.payload;
    },
  },
});

export const { getAllCartItems } = getCartListReducer.actions;

export default getCartListReducer.reducer;
