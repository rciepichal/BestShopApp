import { configureStore } from '@reduxjs/toolkit';
import productReducer from './shared/slice/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
