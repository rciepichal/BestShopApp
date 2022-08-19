import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../models';

const url = 'https://fakestoreapi.com/products';

type InitialState = {
  newestProducts: Product[];
  isLoading: boolean;
};
const initialState: InitialState = {
  newestProducts: [],
  isLoading: true,
};
export const getNewestProducts = createAsyncThunk(
  'product/getNewestProducts',
  async (num: number) => {
    const resp = await axios(`${url}?limit=${num}`);
    return resp.data;
  }
);

const getNewestProductsSlice = createSlice({
  name: 'getNewestProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewestProducts.pending, (state) => {
        state.isLoading = true;
        console.log('GetNewestProducts');
      })
      .addCase(getNewestProducts.fulfilled, (state, action) => {
        state.isLoading = true;
        state.newestProducts = action.payload;
        state.isLoading = false;
      });
  },
});

export default getNewestProductsSlice.reducer;
