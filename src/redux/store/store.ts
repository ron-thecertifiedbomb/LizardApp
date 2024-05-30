import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middleware/logger';
import { cartListListenerMiddleware } from '../middleware/listener/cartApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  
  getDefaultMiddleware()
  .concat(loggerMiddleware, cartListListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
