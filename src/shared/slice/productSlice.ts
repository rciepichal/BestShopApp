import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../models';
import axios from 'axios';

const urlItemsCount = 'https://fakestoreapi.com/products?limit=';
const urlAllItems = 'https://fakestoreapi.com/products';

type InitialState = {
  newestProducts: Product[];
  topPick: Product;
  products: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  newestProducts: [],
  topPick: {
    id: 12,
    title: 'Test',
    price: 12,
    description: 'Test',
    category: 'Test',
    image: 'Test',
    rating: {
      rate: 12,
      count: 12,
    },
  },
  products: [],
  isLoading: true,
};

export const getNewestProducts = createAsyncThunk(
  'product/getNewestProducts',
  async (num: number) => {
    const resp = await axios(`${urlItemsCount}${num}`);
    return resp.data;
  }
);
export const getTopPick = createAsyncThunk('product/getTopPick', async () => {
  const resp = await axios(`${urlItemsCount}10`);
  const products: Product[] = resp.data;
  const topPick: Product = products.reduce((prev, curr) => {
    return prev.rating.count > curr.rating.count ? prev : curr;
  });
  return topPick;
});

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {
    const resp = await axios(urlAllItems);
    const products: Product[] = resp.data;
    return products;
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
        state.isLoading = false;
        state.newestProducts = action.payload;
      })
      .addCase(getTopPick.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopPick.fulfilled, (state, action) => {
        state.topPick = action.payload;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
