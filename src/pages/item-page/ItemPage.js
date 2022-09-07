import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { increasedCartCount } from "../../redux/slices/cartSlice";
import ItemScelet from "./Item-Scelet";

import "./item-page.css";

export const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);

  const { title, price, description, image } = item;

  useEffect(() => {
    axios
      .get(
        `https://62c3eaa9abea8c085a6654bb.mockapi.io/fakeapi/items/${id}
    `
      )
      .then((res) => setItem(res.data));
  }, [id]);

  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(increasedCartCount(item));
  };

  return item.length !== 0 ? (
    <div className="item-page">
      <div className="item-page-img">
        <img src={image} alt="Nu tipa kartinka tut doljna bit no net ee" />
      </div>
      <div className="item-page-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <span>{price} USD</span>
          <span>
            <Button sx={{ color: "#808080" }} onClick={onClickAddToCart}>
              add to cart
            </Button>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <ItemScelet />
  );
};
