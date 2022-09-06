import React, { useContext } from 'react';
import Link from 'next/link';


import Image from 'next/image';

import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import AppContext from '@context/AppContext';

import styles from '@styles/Header.module.scss';


const Header = () => {
  const { state, toggleOrders, toggleMenu, toggleMenuMobile, changeToggle } = useContext(AppContext);
  const handleToggle = (toggle) => {
    changeToggle(toggle);
  };
  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} onClick={() => handleToggle('menu-mobile')} />

        <div className={styles['navbar-left']}>
          <Link href='/'>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={() => handleToggle('menu')}>
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => handleToggle('cart')}>
              <Image src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggleMenuMobile && <MobileMenu />}
        {toggleMenu && <Menu />}
        {toggleOrders && <MyOrder />}
      </nav>
    </>
  );
};

export default Header;
