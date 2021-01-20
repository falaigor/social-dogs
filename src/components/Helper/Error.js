import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: 'var(--color-error)', margin: '1rem 0' }}>{error}</p>
  );
};

export default Error;
