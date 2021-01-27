import React from 'react';
import './Home.module.css';

import Feed from '../../components/Feed';
import Head from '../../components/Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Página Inicial"
        description="Esta é a página inicial da Social Dogs"
      />
      <Feed />
    </section>
  );
};

export default Home;
