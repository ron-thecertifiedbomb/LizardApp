import { RootState } from "../../../store/store";


export const cartItems = (state: RootState) => state.cart.cartItems;

export const cartTotalPrice = (state: RootState) =>
    state.cart.totalPrice;


export const cartList = (state: RootState) => state.getCartList.getCartListInfo