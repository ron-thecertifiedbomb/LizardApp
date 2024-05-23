import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartData {
  _id: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartData[];
}

const initialState: CartState = {
  cart: [],
};

const getCartData = createSlice({
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
  },
});

export const { myCartData } = getCartData.actions;
export default getCartData.reducer;
