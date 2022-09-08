import Head from 'next/head';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import ProductList from "@containers/ProductList";



export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
