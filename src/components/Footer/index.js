import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../../images/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Social Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
