import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { increasedCartCount } from "../../redux/slices/cartSlice";
import "./item-block.css";

export const ItemBlock = ({ image, title, price, id }) => {
  const dispatch = useDispatch();
  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(increasedCartCount(item));
  };

  return (
    <div>
      <Link key={id} to={`/item/${id}`}>
        <div className="item-block">
          <img src={image} alt="img" />
          <h4>{title}</h4>
          <p>{price} USD</p>
        </div>
      </Link>
      <div className="item-block-button">
        <div>
          <Button onClick={() => onClickAddToCart()}>add cart</Button>
        </div>
      </div>
    </div>
  );
};
