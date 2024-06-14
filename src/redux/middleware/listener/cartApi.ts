import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addedToCart } from '../../reducers/cartslice/reducer/cartReducer';
import { getAllCartItems } from '../../reducers/cartslice/reducer/userCartListReducer';
import { setToClose, setToOpen } from '../../reducers/modalslice/reducer/modalReducer';


const cartListApiListenerMiddleware = createListenerMiddleware();

cartListApiListenerMiddleware.startListening({
  actionCreator: addedToCart,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    
    try {
      const payload = action.payload;
      const cartItems = JSON.stringify(payload);
      
      console.log('Payload via Middleware', cartItems);
      listenerApi.dispatch(setToOpen({type: "Loading", title: "Loading"}));


      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/cart/addtocart/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add item/s');
      }

      const data = await response.json();
      listenerApi.dispatch(setToOpen({type: "Loading", title: 'Added to Cart Successfully'}));
      
    
      const userId = payload.ownerId; 
      const refetchResponse = await fetch(
        `https://nextjs-server-rho.vercel.app/api/products/cart/getallcartitems/route?_id=${userId}`
        );
        
        if (!refetchResponse.ok) {
          throw new Error('Failed to fetch data');
          }
          
          console.log('Cart list successfully added:', data);
      const refetchData = await refetchResponse.json();
      listenerApi.dispatch(setToClose());
      console.log('Data Successfully Fetched:', refetchData);
      
      listenerApi.dispatch(getAllCartItems(refetchData));
      // Dispatch setToOpen action to show modal

    } catch (error: any) {
      console.error('Server error:', error);
      console.log('Error', error.message);
    }
  },
});

export default cartListApiListenerMiddleware;
