import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../services/api';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import styles from './FeedPhotos.module.css';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 3, user });
      await request(url, options);
      console.log(user);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else {
    return null;
  }
};

export default FeedPhotos;
