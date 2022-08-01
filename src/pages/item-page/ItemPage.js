import axios from "axios";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./item-page.css";
import { useDispatch, useSelector } from "react-redux";
import { increasedCartCount } from "../../redux/slices/cartSlice";
import ItemScelet from "./item-scelet";
import { isLoading } from "../../redux/slices/itemSlice";

export const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.items);
  const [item, setItem] = useState([]);
  const { title, price, description, image } = item;

  useEffect(() => {
    dispatch(isLoading(true));
    axios
      .get(
        `https://62c3eaa9abea8c085a6654bb.mockapi.io/fakeapi/items/${id}
    `
      )
      .then((res) => setItem(res.data))
      .then(dispatch(isLoading(false)));
  }, []);

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
      {loading ? (
        <ItemScelet />
      ) : (
        <div className="item-page">
          <div className="item-page-img">
            <img src={image} />
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
      )}
    </div>
  );
};
