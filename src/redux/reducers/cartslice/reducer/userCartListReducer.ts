import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartData} from '../../../../components/cart/type';
import {cartItems} from '../selectors/cartSelector';

interface CartListDataState {
  getCartListItems: CartData[] | null;
  cartData: CartData[]; // Initialize as an empty array
}

const initialState: CartListDataState = {
  getCartListItems: null,
  cartData: [], // Initialize cart as an empty array
};

const getCartListReducer = createSlice({
  name: 'userCartItems',
  initialState,
  reducers: {
    getAllCartItems(state, action: PayloadAction<CartData[]>) {
      state.getCartListItems = action.payload;
      console.log('getAllCartItems', state.getCartListItems);
      const list = state.getCartListItems?.cartItems;
      if (list) {
        list.map((item: any) => ({...item}));
      }
      (state.cartData = list), console.log('Cart List', list);
    },

    deleteItem(state, action: PayloadAction<{productId: string}>) {
      const productIdToDelete = action.payload;
      console.log('ProductID', productIdToDelete);
      state.cartData = state.cartData.filter(
        item => item.productId !== productIdToDelete.productId,
      );
      return state;
    },
  },
});

export const {getAllCartItems, deleteItem} = getCartListReducer.actions;

export default getCartListReducer.reducer;
