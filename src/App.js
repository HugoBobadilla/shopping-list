import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [itemsList, setItemsList] = useState([]);

  const addItem = (item) => {
    setItemsList([item, ...itemsList]);
  }

  return (
    <div className='App'>
      <div className='title-container'>
        <h1>Shopping List</h1>
        <p>Don't ever forget what you need to buy again</p>
      </div>
      <div className='shopping-list-container'>
        <Form addItem={addItem} />
        <List items={itemsList} />
      </div>
    </div>
  );
}

export default App;
