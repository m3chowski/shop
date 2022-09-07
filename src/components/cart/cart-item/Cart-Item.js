import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import {
  increasedCartCount,
  reduceCartCount,
  removeItem,
} from "../../../redux/slices/cartSlice";

import "./cart-items.css";

export const CartItem = ({ title, image, id, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(increasedCartCount({ id }));
  };
  const onClickMinus = () => {
    dispatch(reduceCartCount({ id }));
  };
  const onClickDeleteItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={image} alt="img" />
      </div>
      <div className="cart-item-title">
        <p>{title}</p>
      </div>
      <div className="cart-item-count">
        <Button onClick={onClickMinus}>-</Button>
        <p>{count !== 0 ? count : onClickDeleteItem()}</p>
        <Button onClick={onClickPlus}>+</Button>
      </div>
      <div className="cart-item-price">
        <p>{(price * count).toFixed(2)} USD</p>
      </div>
      <div className="cart-item-delete">
        <Button onClick={onClickDeleteItem}>Delete</Button>
      </div>
    </div>
  );
};
