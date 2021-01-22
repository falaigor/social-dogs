import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './Login.module.css';

import LoginForm from '../LoginForm';
import LoginCreate from '../LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost';
import LoginReset from '../LoginReset';
import { UserContext } from '../../UserContext';

function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} end />
          <Route path="create" element={<LoginCreate />} />
          <Route path="password" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
