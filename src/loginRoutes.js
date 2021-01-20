import React, { useContext } from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import LoginCreate from './pages/LoginCreate';
import LoginPasswordLost from './pages/LoginPasswordLost';
import LoginReset from './pages/LoginReset';
import { UserContext } from './UserContext';

function LoginRoutes() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="password" element={<LoginPasswordLost />} />
      <Route path="reset" element={<LoginReset />} />
    </Router>
  );
}

export default LoginRoutes;
