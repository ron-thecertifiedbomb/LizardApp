import {createListenerMiddleware} from '@reduxjs/toolkit';
import {addedToCart} from '../../reducers/cartslice/reducer/cartReducer';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUserId} from '../../reducers/userslice/selectors/selector';

export const cartListApiListenerMiddleware = createListenerMiddleware();

cartListApiListenerMiddleware.startListening({
  actionCreator: addedToCart,

  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    try {
      const payload = action.payload;

      const cartItems = JSON.stringify(payload)

      console.log('Payload via Middleware', cartItems);

      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/cart/addtocart/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItems),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to add item/s');
      }

      const data = await response.json();
      console.log('Cart list successfully added:', data);
    } catch (error: any) {
      console.error('Server error:', error);
      console.log('Error', error.message);
    }
  },
});

export default cartListApiListenerMiddleware;
