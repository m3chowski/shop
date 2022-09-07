import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../../redux/slices/itemSlice";
import { ItemBlock } from "../item-block";
import MyLoader from "./scelet";

import "./item-list.css";

export const ItemList = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.items);
  const { items } = useSelector((state) => state.items);
  const { activeCategory, activeSort, searchValue } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchItems({ activeCategory, searchValue, activeSort }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activeSort, searchValue]);

  return (
    <div className="item-list">
      {loading
        ? [...new Array(20)].map((n, index) => <MyLoader key={index} />)
        : items.map((obj) => <ItemBlock key={obj.id} {...obj} />)}
    </div>
  );
};
