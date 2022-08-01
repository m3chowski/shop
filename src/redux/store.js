import { configureStore } from "@reduxjs/toolkit";
import items from "./slices/itemSlice";
import category from "./slices/categorySlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    items,
    category,
    cart,
  },
});
