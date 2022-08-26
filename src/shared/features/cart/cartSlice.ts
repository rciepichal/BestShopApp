import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isTemplateExpression } from 'typescript';
import { CartItemModel, Product } from '../../models';

type initialStateModel = {
  cartItems: CartItemModel[];
  totalAmount: number;
  totalPrice: number;
};

const initialState: initialStateModel = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItem: (state, action) => {
      const addedProduct: Product = action.payload;
      const itemIdx: number = state.cartItems.findIndex(
        (item) => item.id === addedProduct.id
      );
      itemIdx >= 0
        ? (state.cartItems[itemIdx].amount += 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.totalAmount = amount;
      state.totalPrice = total;
    },
    changeAmount: (state, { payload }) => {
      let tempCart = state.cartItems
        .map((item) => {
          if (item.id === payload.id) {
            if (payload.type === 'inc') {
              return { ...item, amount: item.amount + 1 };
            }
            if (payload.type === 'dec') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cartItems: tempCart };
    },
  },
});

export const { clearCart, addItem, calculateTotals, changeAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
