import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../services/api';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import styles from './FeedPhotos.module.css';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinity }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinity(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

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
