import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../models';
import axios from 'axios';
import paginate from '../hooks/paginate';

const url = 'https://fakestoreapi.com/products';

type InitialState = {
  newestProducts: Product[];
  topPick: Product;
  products: Product[][];
  singleProduct: Product;
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
  singleProduct: {
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
  isLoading: true,
};

export const getNewestProducts = createAsyncThunk(
  'product/getNewestProducts',
  async (num: number) => {
    const resp = await axios(`${url}?limit=${num}`);
    return resp.data;
  }
);
export const getTopPick = createAsyncThunk('product/getTopPick', async () => {
  const resp = await axios(`${url}?limit=5`);
  const products: Product[] = resp.data;
  const topPick: Product = products.reduce((prev, curr) => {
    return prev.rating.count > curr.rating.count ? prev : curr;
  });
  return topPick;
});

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {
    const resp = await axios(url);
    const data: Product[] = resp.data;
    const products = paginate(data);
    return products;
  }
);

export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (id: number) => {
    const resp = await axios(`${url}/${id}`);
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
        console.log('GetNewestProducts');
      })
      .addCase(getNewestProducts.fulfilled, (state, action) => {
        state.newestProducts = action.payload;
        state.isLoading = false;
      });
    builder
      .addCase(getTopPick.pending, (state) => {
        state.isLoading = true;
        console.log('GetTopPick');
      })
      .addCase(getTopPick.fulfilled, (state, action) => {
        state.isLoading = true;
        console.log(`GetTopPick pending: ${state.isLoading}`);
        state.topPick = action.payload;
        state.isLoading = false;
      });
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        console.log(`GetAllProducts pending: ${state.isLoading}`);
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = true;
        console.log(`GetAllProducts fulfill: ${state.isLoading}`);
        state.products = action.payload;
        state.isLoading = false;
        console.log(`GetAllProducts fulfill after payload: ${state.isLoading}`);
      });
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

export default productSlice.reducer;