import React, { useContext, useState } from 'react';
import Image from 'next/image';

import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';

import addToCard from '@icons/bt_add_to_cart.svg';
import addedToCard from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);

  const handleCheck = (item) => {
    return state.cart.some((item) => item.id === product.id);
  };

  const handleClick = (item) => {
    handleCheck(item) ? removeFromCart(item) : addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} layout="responsive" src={product.images[0]} alt={product.title} width="100%" height="100%" />
      <div className={styles['product-info']}>
        <div>
          <p>{product.price}$</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={handleCheck() ? addedToCard : addToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
