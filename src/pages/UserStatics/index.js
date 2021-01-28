import React, { lazy, Suspense, useEffect } from 'react';
import Head from '../../components/Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../services/api';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';

const UserStaticsGraphs = lazy(() => import('../UserStaticsGraphs'));

const UserStatics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Minhas Estástisticas" />
        <UserStaticsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStatics;
