import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';
import UserCartListApiListenerMiddleware from '../middleware/listener/getUserCartListApi';
import cartListApiListenerMiddleware from '../middleware/listener/cartApi';
import DeleteCartListApiListenerMiddleware from '../middleware/listener/deleteCartUpdateApi';
import Reactotron from '../../../ReactotronConfig';

export const store = configureStore({
  
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      
      loggerMiddleware,
      cartListApiListenerMiddleware.middleware,
      UserCartListApiListenerMiddleware.middleware,
      DeleteCartListApiListenerMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
