import React, { useContext } from 'react';
import Image from 'next/image';

import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';

import addToCard from '@icons/bt_add_to_cart.svg';
import addedToCard from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);

  const handleCheck = () => {
    return state.cart.some((item) => item.id === product.id);
  };

  const handleClick = (item) => {
    handleCheck(item) ? removeFromCart(item) : addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <div>
        <Image loader={() => product.images[0]} unoptimized={true} layout="responsive" src={product.images[0]} alt={product.title} width={'100%'} height={'100%'} />
      </div>
      <div className={styles['product-info']}>
        <div>
          <p>{product.price}$</p>
          <p>{product.title}</p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role*/}
        <figure onClick={() => handleClick(product)} onKeyPress={() => handleClick(product)} role={'button'}>
          <div>
            <Image src={handleCheck() ? addedToCard : addToCard} alt="" />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
