import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../../UserContext';

import logoDogs from '../../images/dogs.svg';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Social Dogs - Home">
          <img src={logoDogs} alt="Logo Social Dogs" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar Conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
