import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logoDogs from '../../images/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Social Dogs - Home">
          <img src={logoDogs} alt="Logo Social Dogs" />
        </Link>
        <Link className={styles.login} to="/login" className={styles.login}>
          Login / Criar Conta
        </Link>
      </nav>
    </header>
  );
};

export default Header;
