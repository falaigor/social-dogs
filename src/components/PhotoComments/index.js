import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './PhotoComments.module.css';

import { UserContext } from '../../UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          single={props.single}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
