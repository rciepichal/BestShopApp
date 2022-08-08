import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../models';
import axios from 'axios';

const urlNewestItems = 'https://fakestoreapi.com/products?limit=2';

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

export const getNewestProducts = createAsyncThunk(
  'product/getNewestProducts',
  async () => {
    const resp = await axios(urlNewestItems);
    return resp.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewestProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewestProducts.fulfilled, (state, action) => {
        state.isLoading = true;
        state.newestProducts = action.payload;
      });
  },
});

export default productSlice.reducer;
