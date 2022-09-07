import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Categories } from "../../components/categories";
import { ItemList } from "../../components/items/item-list";
import { setCategory } from "../../redux/slices/categorySlice";
import "./home.css";

export const Home = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(category ? category : "all"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="home">
      <Categories />
      <ItemList />
    </div>
  );
};
