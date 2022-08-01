import React from "react";
import { Input } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/categorySlice";

export const Search = () => {
  const { searchValue } = useSelector((state) => state.category);
  const dispatch = useDispatch();
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
