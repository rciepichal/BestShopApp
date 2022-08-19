import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer from './shared/features/allProducts/allProductsSlice';
import topPickReducer from './shared/features/topPick/topPickSlice';
import newestProductsReducer from './shared/features/newestProducts/newestProductsSlice';

export let store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    topPick: topPickReducer,
    newestProducts: newestProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
