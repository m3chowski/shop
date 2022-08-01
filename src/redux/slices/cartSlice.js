import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increasedCartCount(state, action) {
      const findProduct = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    reduceCartCount(state, action) {
      const findProduct = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count--;
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { increasedCartCount, reduceCartCount, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
