import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../../../types/products/type';
import {CartData} from '../../../../components/cart/type';

interface CartListDataState {
  getCartListInfo: CartData[] | null;
}

const initialState: CartListDataState = {
  getCartListInfo: null,
};

const getCartListReducer = createSlice({
  name: 'cartListItems',
  initialState,
  reducers: {
    getAllCartItems(state, action: PayloadAction<CartData[]>) {
      state.getCartListInfo = action.payload;
    },
  },
});

export const {getAllCartItems} = getCartListReducer.actions;

export default getCartListReducer.reducer;
