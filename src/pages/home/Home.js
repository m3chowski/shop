import React from "react";
import { Categories } from "../../components/categories";
import { ItemList } from "../../components/item-list";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Categories />
      <ItemList />
    </div>
  );
};
