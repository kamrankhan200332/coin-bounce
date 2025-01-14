import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <p className={`${styles.footer} flex items-center justify-center mt-5 font-bold text-md`}>&copy; Coin-Bounce 2024</p>
  );
}

export default Footer;
