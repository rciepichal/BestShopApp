import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import paginate from '../../hooks/paginate';
import { Product } from '../../models';

const url = 'https://fakestoreapi.com/products';

type InitialState = {
  allProducts: Product[][];
  isLoading: boolean;
};
const initialState: InitialState = {
  allProducts: [],
  isLoading: true,
};
export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {
    const resp = await axios(url);
    const data: Product[] = resp.data;
    const products = paginate(data);
    return products;
  }
);

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = true;
        state.allProducts = action.payload;
        state.isLoading = false;
      });
  },
});

export default allProductsSlice.reducer;
