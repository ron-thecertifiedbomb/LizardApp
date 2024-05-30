import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addedToCart } from '../../reducers/cartslice/reducer/cartReducer';
import { Alert } from 'react-native';

export const cartListListenerMiddleware = createListenerMiddleware();

cartListListenerMiddleware.startListening({

  actionCreator: addedToCart,

  effect: async (action, listenerApi) => {

    listenerApi.cancelActiveListeners();

    try {
      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/addtocart/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(action.payload),
        }
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
  }
});

export default cartListListenerMiddleware;
