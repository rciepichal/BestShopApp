import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../models';

const url = 'https://fakestoreapi.com/products';

type InitialState = {
  singleProduct?: Product;
  isLoading: boolean;
};
const initialState: InitialState = {
  isLoading: true,
};
export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (id?: string) => {
    if (typeof id === 'string') {
      const resp = await axios(`${url}/${id}`);
      const product: Product = resp.data;
      return product;
    }
  }
);

const getSingleProductSlice = createSlice({
  name: 'getSingleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = true;
        state.singleProduct = action.payload;
        state.isLoading = false;
      });
  },
});

export default getSingleProductSlice.reducer;
