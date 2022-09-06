import React from 'react';
import Head from 'next/head';
import Order from '@components/Order';
import OrderItem from '@components/OrderItem';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <Order />
            <OrderItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
