import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import Footer from './components/Footer/';
import Header from './components/Header/';
import Home from './pages/Home/';
import Login from './pages/Login';
import LoginCreate from './pages/LoginCreate';
import LoginPasswordLost from './pages/LoginPasswordLost';
import LoginReset from './pages/LoginReset';

function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Router>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="login/create" element={<LoginCreate />} />
        <Route path="login/password" element={<LoginPasswordLost />} />
        <Route path="login/reset" element={<LoginReset />} />
      </Router>

      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
