import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cart } from "./cart";
import { Search } from "./search";

import "./header.css";

export const Header = memo(() => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <h4>StoreName</h4>
        </div>
      </Link>
      {pathname !== "/cart" && pathname !== "/cart/order" ? (
        <>
          <Search />
          <Cart />
        </>
      ) : (
        <></>
      )}
    </div>
  );
});
