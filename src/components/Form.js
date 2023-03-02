import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/Form.css';
import Error from './Error';

const Form = ({ addItem }) => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.length === 0) {
      setErrorMsg('Field must not be empty');
      setTimeout(() => {
        setErrorMsg('');
      }, 4000);
    } else {
      const newItem = {
        id: uuidv4(),
        title: input,
        priority: priority,
        isDone: false
      }
      addItem(newItem);
      setInput('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='input-container'>
        <input 
          type='text' 
          className='form-input'
          onChange={handleInput}
          value={input}
        />
        <button type='submit' className='btn-submit'>Add</button>
      </div>
      <div className='input-container'>
        <label htmlFor="high">
          <input 
            type='radio' 
            name='priority' 
            id='high' 
            value='High' 
            checked={priority === "High"}
            onChange={handlePriorityChange}
          /> High
        </label>
        <label htmlFor="medium">
          <input 
            type='radio' 
            name='priority' 
            id='medium' 
            value='Medium'
            checked={priority === "Medium"}
            onChange={handlePriorityChange}
          /> Medium
        </label>
        <label htmlFor="low">
          <input 
            type='radio' 
            name='priority' 
            id='low' 
            value='Low'
            checked={priority === "Low"}
            onChange={handlePriorityChange}
          /> Low
        </label>
      </div>
      <div className="error-container">
        {errorMsg && <Error errorMsg={errorMsg} />}
      </div>
    </form>
  );
}

export default Form;