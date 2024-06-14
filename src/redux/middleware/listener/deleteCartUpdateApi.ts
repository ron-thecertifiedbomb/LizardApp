import {createListenerMiddleware} from '@reduxjs/toolkit';
import {deleteItem} from '../../reducers/cartslice/reducer/userCartListReducer';

const DeleteCartListApiListenerMiddleware = createListenerMiddleware();

DeleteCartListApiListenerMiddleware.startListening({
  actionCreator: deleteItem,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    try {
      const payload = action.payload;
      const itemToDelete = JSON.stringify(payload);

      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/cart/addtocart/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemToDelete),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to delete item/s');
      }

      const data = await response.json();
      console.log('Item successfully deleted:');
    } catch (error: any) {
      console.error('Server error:', error);
      console.log('Error', error.message);
    }
  },
});

export default DeleteCartListApiListenerMiddleware;
