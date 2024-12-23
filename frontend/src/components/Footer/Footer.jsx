import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <p className={`${styles.footer} flex items-center justify-center`}>&copy; Coin-Bounce 2024</p>
  );
}

export default Footer;
