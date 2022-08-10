import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import "./order-information.css";

export const OrderInformation = () => {
  const [activeDelivery, setActiveDelivery] = useState("delivery");

  const delivery = ["delivery", "pickup"];

  return (
    <div className="order">
      <div>
        <ButtonGroup color="inherit">
          {delivery.map((item) => (
            <Button
              onClick={() => setActiveDelivery(item)}
              sx={
                activeDelivery === item
                  ? {
                      color: "white",
                    }
                  : { color: "#808080" }
              }
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div></div>
    </div>
  );
};
