import React from "react";
import { OrderInformation } from "../../components/order-information";
import { OrderItems } from "../../components/order-items/Order-Items";

import "./order.css";

export const Order = () => {
  return (
    <div className="order-page">
      <OrderInformation />
      <OrderItems />
    </div>
  );
};
