import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import styles from './UserHeaderNav.module.css';

import { ReactComponent as MyPosts } from '../../images/feed.svg';
import { ReactComponent as MyStatics } from '../../images/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../images/adicionar.svg';
import { ReactComponent as Logout } from '../../images/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <MyPosts />
          {mobile && 'Minhas Postagens'}
        </NavLink>

        <NavLink to="/account/statics" activeClassName={styles.active}>
          <MyStatics />
          {mobile && 'Minhas estatisticas'}
        </NavLink>

        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
