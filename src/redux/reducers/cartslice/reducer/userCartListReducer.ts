import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootObject} from '../../../../components/cart/type';


interface CartListDataState {
  getCartListItems: RootObject[] | null;
  cartData: RootObject[]; 
}

const initialState: CartListDataState = {
  getCartListItems: null,
  cartData: [], 
};

const getCartListReducer = createSlice({
  name: 'userCartItems',
  initialState,
  reducers: {
    getAllCartItems(state, action: PayloadAction<RootObject[]>) {
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
