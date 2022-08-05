import React, { useEffect } from "react";

import { Categories } from "../../components/categories";
import { ItemList } from "../../components/item-list";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./home.css";
import { setCategory } from "../../redux/slices/categorySlice";

export const Home = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategory(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="home">
      <Categories />
      <ItemList />
    </div>
  );
};
