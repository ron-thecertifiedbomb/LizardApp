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
        existingItem.quantityOrdered += 1; // Increment Quantity Ordered by 1
        existingItem.totalOrderPrice += cartInfo.price; // Add item price to totalOrderPrice
      } else {
        state.cart.push({ ...cartInfo, quantityOrdered: 1 });
      }
    },
    // calculateTotalOrderPrice(state) {
    //   state.totalPrice = state.cart.reduce((total, item) => total + item.totalOrderPrice, 0);
    // },
    incrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.cart.find(item => item._id === itemId);
      if (existingItem) {
        existingItem.quantityOrdered += 1;
        existingItem.totalOrderPrice += existingItem.price;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.cart.find(item => item._id === itemId);
      if (existingItem && existingItem.quantityOrdered > 1) {
        existingItem.quantityOrdered -= 1;
        existingItem.totalOrderPrice -= existingItem.price;
      }
    },
  },
});


export const { myCartData, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
