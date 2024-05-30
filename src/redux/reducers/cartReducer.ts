import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartData } from '../../components/cart/type';

interface CartState {
  cart: CartData[];
  totalPrice: number; 
  isSelected: false,
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  isSelected: false
};

const cartSlice = createSlice({
  name: 'mycart',
  initialState,
  reducers: {
    addedToCart(state, action: PayloadAction<CartData>) {
      const cartInfo = action.payload;
      const existingItem = state.cart.find(item => item._id === cartInfo._id);
      if (existingItem) {
        existingItem.quantityOrdered += 1; 
        existingItem.totalOrderPrice += cartInfo.price; 
      } else {
        state.cart.push({ ...cartInfo, quantityOrdered: 1, totalOrderPrice: cartInfo.price, isSelected: false });
      }
    },
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
    setIsSelected(state, action: PayloadAction<{ itemId: string; isSelected: boolean }>) {
      const { itemId, isSelected } = action.payload;
      const existingItem = state.cart.find(item => item._id === itemId);
      if (existingItem) {
        existingItem.isSelected = isSelected;
      }
    },
    setAllItemsSelected(state, action: PayloadAction<boolean>) {
      const isSelected = action.payload;
      state.cart.forEach(item => {
        item.isSelected = isSelected;
      });
    },
  },
});

export const { addedToCart, incrementQuantity, decrementQuantity, setIsSelected, setAllItemsSelected } = cartSlice.actions;

export default cartSlice.reducer;
