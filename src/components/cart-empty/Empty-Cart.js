import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./empty-cart.css";

export const EmptyCart = () => {
  return (
    <div className="emptycart">
      <h1>Cart is empty</h1>
      <Link to="/">
        <Button>Back to shopping</Button>
      </Link>
    </div>
  );
};
