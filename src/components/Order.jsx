import React from "react";
import styles from "@styles/Order.module.scss";

const Order = () => {
  return (
    <div className={styles.OrderOrder}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
    </div>
  );
};

export default Order;
