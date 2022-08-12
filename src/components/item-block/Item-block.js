import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { increasedCartCount } from "../../redux/slices/cartSlice";

import "./item-block.css";

export const ItemBlock = ({ image, title, price, id }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(increasedCartCount(item));
    setAddedToCart(true);
  };

  return (
    <div>
      <div>
        <Link key={id} to={`/item/${id}`} className="item-block">
          <img src={image} alt="img" />
          <h4>{title}</h4>
          <p>{price} USD</p>
        </Link>
      </div>
      <div className="item-block-button">
        <div>
          {addedToCart ? (
            <Link to="cart">
              <Button>go to cart</Button>
            </Link>
          ) : (
            <Button onClick={() => onClickAddToCart()}>add cart</Button>
          )}
        </div>
      </div>
    </div>
  );
};
