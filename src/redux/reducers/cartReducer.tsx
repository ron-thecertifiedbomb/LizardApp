import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartData } from '../../components/cart/type';

interface CartState {
  cart: CartData[];
  totalPrice: number; // Add total price to the state
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'mycart',
  initialState,
  reducers: {
    myCartData(state, action: PayloadAction<CartData>) {
      const cartInfo = action.payload;
      const existingItem = state.cart.find(item => item._id === cartInfo._id);
      if (existingItem) {
        existingItem.quantity += cartInfo.quantity;
        existingItem.price += cartInfo.price * cartInfo.quantity;
      } else {
        state.cart.push(cartInfo);
      }
    },
    myCartTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
  },
});

export const { myCartData, myCartTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
