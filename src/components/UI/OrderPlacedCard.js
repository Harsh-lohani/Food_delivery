import React from "react";
import classes from "./OrderPlacedCard.module.css";

const OrderPlacedCard = () => {
  return (
    <div className={classes.card}>
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your order.</p>
    </div>
  );
};

export default OrderPlacedCard;
