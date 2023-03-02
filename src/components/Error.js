import React from 'react';
import '../stylesheets/Error.css';

const Error = ({ errorMsg }) => {
  return (
    <div className='error'>{errorMsg}</div>
  );
}

export default Error;