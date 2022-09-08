import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from '@styles/SendEmail.scss';

import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";


const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles['SendEmail-container']}>
        <Image src={logo} alt="logo" className="logo" />

        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className={styles['email-image']}>
          <Image src={email} alt="email" />
        </div>

        <button className={`${styles['primary-button']} ${styles['login-button']}`}>Login</button>

        <p className={styles.resend}>
          <span>Didn&apost  receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
