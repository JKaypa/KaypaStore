import { Product, userInfo } from "@/pages/api/productdata";
import { createSlice } from "@reduxjs/toolkit";

export interface shopperState {
  cart: Product[];
  userInfo: null | userInfo;
}

const initialState: shopperState = {
  cart: [],
  userInfo: null,
};

export const shopperslice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
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
    reset: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteProduct, minusQuantity, reset } = shopperslice.actions;
export default shopperslice.reducer;
