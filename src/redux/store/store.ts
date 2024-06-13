import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';
import { cartListApiListenerMiddleware } from '../middleware/listener/cartApi';
import UserCartListApiListenerMiddleware from '../middleware/listener/getUserCartListApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  
  getDefaultMiddleware()
  .concat(loggerMiddleware, cartListApiListenerMiddleware.middleware,UserCartListApiListenerMiddleware.middleware ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
