import React from "react";
import Image from "next/image";

import addToCard from "@icons/bt_add_to_cart.svg";
const productInfoImg = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <Image
        src={productInfoImg}
        alt="bike"
      />
      <div className={styles['Product-Info']}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button className={`${styles['primary-button']} ${styles['add-to-cart-button']}`}>
          <Image src={addToCard} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
