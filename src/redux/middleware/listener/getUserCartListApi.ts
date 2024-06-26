import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setUserId } from '../../reducers/userIdReducer';
import { getAllCartItems } from '../../reducers/cartslice/reducer/userCartListReducer';

const UserCartListApiListenerMiddleware = createListenerMiddleware();

UserCartListApiListenerMiddleware.startListening({
  actionCreator: setUserId,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    try {
      const userId = action.payload;
      const response = await fetch(
        `https://nextjs-server-rho.vercel.app/api/products/cart/getallcartitems/route?_id=${userId}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log('Data Successfully Fetched:');
      listenerApi.dispatch(getAllCartItems(data));
    } catch (error: any) {
      console.error('Server error:', error);
      console.log('Error', error.message);
    }
  },
});


export default UserCartListApiListenerMiddleware;
