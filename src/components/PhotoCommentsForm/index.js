import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch';

import { ReactComponent as SendBtn } from '../../images/enviar.svg';
import { COMMENT_POST } from '../../services/api';

import styles from './PhotoCommentsForm.module.css';
import Error from '../Helper/Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <textarea
        id="comment"
        name="comment"
        className={styles.textearea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>

      <button className={styles.button}>
        <SendBtn />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
