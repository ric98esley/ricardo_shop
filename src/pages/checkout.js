import React, { useContext } from 'react';
import Head from 'next/head';
import Order from '@components/Order';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

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
            {state.cart.map((item) => (
              <OrderItem product={item} key={`orderItem-${item.id}`} />
            ))}{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
