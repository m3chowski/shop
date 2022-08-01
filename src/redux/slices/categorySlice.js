import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "all",
  activeSort: "title",
  searchValue: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.activeCategory = action.payload;
      state.searchValue = "";
    },
    setSearch(state, action) {
      state.activeCategory = "all";
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.activeSort = action.payload;
    },
  },
});

export const { setCategory, setSearch, setSort } = categorySlice.actions;
export default categorySlice.reducer;
