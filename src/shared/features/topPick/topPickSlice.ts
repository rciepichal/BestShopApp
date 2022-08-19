import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../models';

const url = 'https://fakestoreapi.com/products';

type InitialState = {
  topPick: Product;
  isLoading: boolean;
};
const initialState: InitialState = {
  topPick: {
    id: 0,
    title: 'Test',
    price: 0,
    description: 'Test',
    category: 'Test',
    image: 'Test',
    rating: {
      rate: 0,
      count: 0,
    },
  },
  isLoading: true,
};
export const getTopPick = createAsyncThunk('product/getTopPick', async () => {
  const resp = await axios(`${url}?limit=5`);
  const products: Product[] = resp.data;
  const topPick: Product = products.reduce((prev, curr) => {
    return prev.rating.count > curr.rating.count ? prev : curr;
  });
  return topPick;
});

const getTopPickSlice = createSlice({
  name: 'getTopPick',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopPick.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopPick.fulfilled, (state, action) => {
        state.isLoading = true;
        state.topPick = action.payload;
        state.isLoading = false;
      });
  },
});

export default getTopPickSlice.reducer;
