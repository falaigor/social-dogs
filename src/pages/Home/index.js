import React from 'react';
import './Home.module.css';

import Feed from '../../components/Feed';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
};

export default Home;
