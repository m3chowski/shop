import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { setSort } from "../../redux/slices/categorySlice";
import "./sort.css";

export const Sort = () => {
  const { activeSort } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className="sort">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort to</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeSort}
          label="Sort to"
          onChange={handleClick}
        >
          <MenuItem value={"title"}>Recommended</MenuItem>
          <MenuItem value={"price&order=desc"}>Price high ot low </MenuItem>
          <MenuItem value={"price&order=asc"}>Price low to high </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
