import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { setCategory } from "../../redux/slices/categorySlice";
import "./categories.css";
import { Sort } from "../sort/Sort";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

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
  const onChangeCategory = (title) => {
    dispatch(setCategory(title));
  };

  const buttonCategory = (title, index) => {
    return (
      <Link to={`/${title}`}>
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
      </Link>
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
