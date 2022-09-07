import React from "react";
import { ButtonCategory } from "./button-category";
import { Sort } from "./sort";

import "./categories.css";

export const Categories = () => {
  const category = [
    "all",
    "jewelery",
    "men's clothing",
    "electronic",
    "women's clothing",
  ];

  return (
    <div className="categories">
      <Sort />
      {category.map((el, index) => (
        <ButtonCategory key={index} title={el} />
      ))}
    </div>
  );
};
