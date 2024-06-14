import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartData } from '../../../../components/cart/type';



interface CartState {
  length: number;

  cartItems: CartData[];
  totalPrice: number; 
  isSelected: false,
}

const initialState: CartState = {

  cartItems: [],
  totalPrice: 0,
  isSelected: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addedToCart(state, action: PayloadAction<CartData>) {

      const cartItem = action.payload;

      const existingItem = state.cartItems.find(item => item.productId === cartItem.productId);
      if (existingItem) {
        existingItem.quantityOrdered += 1; 
        existingItem.totalOrderPrice += cartItem.price; 
      } else {
        state.cartItems.push({ ...cartItem, quantityOrdered: 1, totalOrderPrice: cartItem.price, isSelected: false });
      }

    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === itemId);
      if (existingItem) {
        existingItem.quantityOrdered += 1;
        existingItem.totalOrderPrice += existingItem.price;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === itemId);
      if (existingItem && existingItem.quantityOrdered > 1) {
        existingItem.quantityOrdered -= 1;
        existingItem.totalOrderPrice -= existingItem.price;
      }
    },
    setIsSelected(state, action: PayloadAction<{ itemId: string; isSelected: boolean }>) {
      const { itemId, isSelected } = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === itemId);
      if (existingItem) {
        existingItem.isSelected = isSelected;
      }
    },
    setAllItemsSelected(state, action: PayloadAction<boolean>) {
      const isSelected = action.payload;
      state.cartItems.forEach(item => {
        item.isSelected = isSelected;
      });
    },
  },
});

export const { addedToCart, incrementQuantity, decrementQuantity, setIsSelected, setAllItemsSelected } = cartSlice.actions;

export default cartSlice.reducer;
