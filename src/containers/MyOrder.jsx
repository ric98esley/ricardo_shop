import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import OrderItem from "@components/OrderItem";

import AppContext from "@context/AppContext";

import arrow from "@icons/flechita.svg";

import styles from "@styles/MyOrder.module.scss";

const MyOrder = () => {
  const { state, changeToggle } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumator, currenteValue) => accumator + currenteValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <div>
          <Image src={arrow} alt="arrow" onClick={() => changeToggle("cart")}/>
        </div>
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
      </div>
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <div  className={styles['primary-button']}>
          <Link href="/checkout/">Checkout</Link>
        </div>
    </aside>
  );
};

export default MyOrder;
