import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (params) => {
    const { activeCategory, activeSort, searchValue } = params;
    const { data } = await axios.get(
      `https://62c3eaa9abea8c085a6654bb.mockapi.io/fakeapi/items?${
        activeCategory !== "all" ? "category=" + activeCategory : ""
      }${searchValue !== "" ? "title=" + searchValue : ""}&sortBy=${activeSort}`
    );
    return data;
  }
);
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    isLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = true;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
  },
});

export const { isLoading } = itemsSlice.actions;
export default itemsSlice.reducer;
