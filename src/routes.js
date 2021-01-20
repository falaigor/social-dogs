import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import Footer from './components/Footer/';
import Header from './components/Header/';
import Home from './pages/Home/';
import Login from './pages/Login';
import { UserStorage } from './UserContext';

function Routes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />

        <Router>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
        </Router>

        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default Routes;
