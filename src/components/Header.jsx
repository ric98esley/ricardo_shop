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
        <div className={styles.menu}>
          <Image src={menu} alt="menu" onClick={() => handleToggle('menu-mobile')} />
        </div>

        <div className={styles['navbar-left']}>
          <div className={styles['nav-logo']}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li role="menuitem" className={styles['navbar-email']} onClick={() => handleToggle('menu')} onKeyPress={() => handleToggle('menu')}>
              platzi@example.com
            </li>
            <li role="menuitem" className={styles['navbar-shopping-cart']} onClick={() => handleToggle('cart')} onKeyPress={() => handleToggle('cart')}>
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
