import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { setSearch } from "../../../redux/slices/categorySlice";

import "./search.css";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.category);

  const onChangeSearch = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <div className="search">
      <BsSearch className="search-icon" />
      <Input
        value={searchValue}
        onChange={(event) => onChangeSearch(event.target.value)}
        id="standard-basic"
        placeholder="    search"
      />
    </div>
  );
};
