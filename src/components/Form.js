import React from 'react';
import '../stylesheets/Form.css';

const Form = () => {
  return (
    <form className='form'>
      <input type='text' className='form-input' />
      <button type='submit' className='btn-submit'>Add</button>
    </form>
  );
}

export default Form;