import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { setCategory } from "../../redux/slices/categorySlice";

export const ButtonCategory = ({ title }) => {
  const { activeCategory } = useSelector((state) => state.category);
  const onChangeCategory = (title) => {
    dispatch(setCategory(title));
  };
  const dispatch = useDispatch();
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
        onClick={() => onChangeCategory(title)}
      >
        {title}
      </Button>
    </Link>
  );
};
