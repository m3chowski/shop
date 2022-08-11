import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./order-information.css";

export const OrderInformation = () => {
  const delivery = ["delivery", "pickup"];
  const personalData = ["First name", "Last name", "Email", "Mobile number"];
  const deliveryInfo = [
    "Country",
    "Address",
    "Postal code",
    "District",
    "Province",
  ];
  const pickupPoint = ["first pickup", "second pickup"];
  const paymentMethod = ["card payment", "cash payment"];

  const [activeDelivery, setActiveDelivery] = useState("delivery");
  const [activePaymentMethod, setActivePaymentMethod] = useState("");
  return (
    <div className="order">
      <div className="order-delivery">
        <ButtonGroup fullWidth color="inherit">
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
      <div className="order-name">
        {personalData.map((title) => (
          <TextField label={title} />
        ))}
      </div>
      <div className="order-delivery-address">
        {activeDelivery !== "pickup" ? (
          <div className="order-name">
            {deliveryInfo.map((title) => (
              <TextField label={title} />
            ))}
          </div>
        ) : (
          <FormControl fullWidth>
            <InputLabel>Pickup point</InputLabel>
            <Select label="pickup point">
              {pickupPoint.map((title, index) => (
                <MenuItem value={index}>{title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <div className="order-payment-method">
        <h4>Payment method</h4>
        {
          <ButtonGroup fullWidth color="inherit">
            {paymentMethod.map((title) => (
              <Button
                onClick={() => setActivePaymentMethod(title)}
                sx={
                  activePaymentMethod === title
                    ? {
                        color: "white",
                      }
                    : { color: "#808080" }
                }
              >
                {title}
              </Button>
            ))}
          </ButtonGroup>
        }
      </div>
    </div>
  );
};
