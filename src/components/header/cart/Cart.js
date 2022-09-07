import React from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { totalPrice, cartItems } = useSelector((state) => state.cart);

  return (
    <Link to="cart">
      <Box className="cart">
        <Button>
          <span>{cartItems.length}</span>
          <BsFillCartFill className="cart-icon" />
          <p>{totalPrice.toFixed(2)} </p>
        </Button>
      </Box>
    </Link>
  );
};
