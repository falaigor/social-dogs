import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Feed from '../../components/Feed';
import UserHeader from '../UserHeader';
import UserPhotoPost from '../UserPhotoPost';
import UserStatics from '../UserStatics';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} end />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statics" element={<UserStatics />} />
      </Routes>
    </section>
  );
};

export default User;
