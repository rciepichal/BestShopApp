import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../models';
import axios from 'axios';
import { stat } from 'fs';

const urlItemsCount = 'https://fakestoreapi.com/products?limit=';

type InitialState = {
  newestProducts: Product[];
  products: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  newestProducts: [],
  products: [],
  isLoading: true,
};

export const getProductsCount = createAsyncThunk(
  'product/getNewestProducts',
  async (num: number) => {
    const resp = await axios(`${urlItemsCount}${num}`);
    return resp.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newestProducts = action.payload;
      });
  },
});

export default productSlice.reducer;
