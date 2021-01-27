import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/Error/NotFound';

import Feed from '../../components/Feed';
import { UserContext } from '../../UserContext';
import UserHeader from '../UserHeader';
import UserPhotoPost from '../UserPhotoPost';
import UserStatics from '../UserStatics';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statics" element={<UserStatics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
