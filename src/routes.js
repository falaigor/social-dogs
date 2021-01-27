import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import NotFound from './components/Error/NotFound';
import Footer from './components/Footer/';
import Header from './components/Header/';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Photo from './components/Photo';
import Home from './pages/Home/';
import Login from './pages/Login';
import User from './pages/User';
import UserProfile from './pages/UserProfile';
import { UserStorage } from './UserContext';

function Routes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />

        <Router>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="photo/:id" element={<Photo />} />
          <Route path="profile/:user" element={<UserProfile />} />
          <ProtectedRoute path="account/*" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Router>

        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default Routes;
