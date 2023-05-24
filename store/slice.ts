import { Product, userInfo } from "@/pages/api/productdata";
import { createSlice } from "@reduxjs/toolkit";

export interface shopperState {
  cart: Product[];
  detail: {};
  userInfo: null | userInfo;
}

const initialState: shopperState = {
  cart: [],
  detail: {},
  userInfo: null,
};

export const shopperslice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    detail: (state, action) => {
      state.detail = action.payload;
    },
    addToCart: (state, action) => {
      const product = state.cart.find((prod: Product) => prod._id === action.payload._id);

      if (product) ++product.quantity;
      else state.cart.push(action.payload);
    },
    minusQuantity: (state, action) => {
      const product = state.cart.find((prod: Product) => prod._id === action.payload._id);
      if (product) {
        product.quantity > 1 ? --product.quantity : (product.quantity = 1);
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((prod: Product) => prod._id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { detail, addToCart, deleteProduct, minusQuantity, resetCart, addUser, removeUser } = shopperslice.actions;
export default shopperslice.reducer;
