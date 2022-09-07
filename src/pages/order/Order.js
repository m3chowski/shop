import React from "react";
import { OrderInformation } from "../../components/order/order-information";
import { OrderItems } from "../../components/order/order-items";

import "./order.css";

export const Order = () => {
  return (
    <div className="order-page">
      <OrderInformation />
      <OrderItems />
    </div>
  );
};
