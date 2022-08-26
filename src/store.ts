import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer from './shared/features/allProducts/allProductsSlice';
import topPickReducer from './shared/features/topPick/topPickSlice';
import newestProductsReducer from './shared/features/newestProducts/newestProductsSlice';
import singleProductReducer from './shared/features/singleProduct/singleProductSlice';
import cartSlice from './shared/features/cart/cartSlice';

export let store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    topPick: topPickReducer,
    newestProducts: newestProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
