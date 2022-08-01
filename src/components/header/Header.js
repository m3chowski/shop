import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Cart } from "../cart";
import { Search } from "../search";
import "./header.css";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <h4>StoreName</h4>
        </div>
      </Link>
      {pathname !== "/cart" && (
        <>
          <Search />
          <Cart />
        </>
      )}
    </div>
  );
};
