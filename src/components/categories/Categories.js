import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { setCategory } from "../../redux/slices/categorySlice";
import "./categories.css";
import { Sort } from "../sort/Sort";

export const Categories = () => {
  const category = [
    "all",
    "jewelery",
    "men's clothing",
    "electronic",
    "women's clothing",
  ];
  const { activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };

  const buttonCategory = (title, index) => {
    return (
      <Button
        sx={
          activeCategory === title
            ? {
                color: "#808080",
              }
            : { color: "white" }
        }
        key={index}
        onClick={() => onChangeCategory(title)}
      >
        {title}
      </Button>
    );
  };

  return (
    <div className="categories">
      <Sort />
      {category.map((el, index) => {
        return buttonCategory(el, index);
      })}
    </div>
  );
};
