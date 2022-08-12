import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import "./order-items.css";

export const OrderItems = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="order-main">
        {cartItems.map(({ title, image, count, price }) => (
          <div className="order-main-item">
            <div className="order-item">
              <img src={image} alt="img" />
              <span>{title}</span>
            </div>
            <div className="order-price">
              <span>
                {count} x {price} USD
              </span>
              <span> total price: {(price * count).toFixed(2)} </span>
              <span>USD</span>
            </div>
          </div>
        ))}
      </div>
      <div className="order-total-price">
        <span> Total price: {totalPrice.toFixed(2)} USD</span>
        <Button sx={{ color: "white", outline: "auto", background: "#808080" }}>
          Confirm order
        </Button>
      </div>
    </div>
  );
};
