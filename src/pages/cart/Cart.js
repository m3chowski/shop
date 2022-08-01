import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../components/cart-item";
import { clearCart } from "../../redux/slices/cartSlice";

import "./cart-page.css";

export const CartPage = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <div className="cart-page-clear">
        <Button onClick={() => dispatch(clearCart())}>clear cart</Button>
      </div>
      {cartItems.map((obj) => (
        <CartItem key={obj.id} {...obj} />
      ))}
      <div className="cart-page-nav">
        <Link to="/">
          <div>
            <Button>Back to main</Button>
          </div>
        </Link>
        <div>
          <p>Total price: {totalPrice.toFixed(2)} USD</p>
        </div>
        <div>
          <Button> Order</Button>
        </div>
      </div>
    </div>
  );
};
