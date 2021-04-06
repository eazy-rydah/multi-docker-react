import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Im some changed other page!
      <Link to="/">Go back Home</Link>
    </div>
  );
};
