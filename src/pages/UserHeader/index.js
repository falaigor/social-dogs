import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from '../UserHeaderNav';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/statics':
        setTitle('Suas Estatística');
        break;
      case '/account/post':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
