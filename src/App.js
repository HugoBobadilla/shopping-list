import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [itemsList, setItemsList] = useState([]);

  const addItem = (item) => {
    setItemsList([item, ...itemsList]);
  }

  const setDone = (id) => {
    const itemsListUpdated = itemsList.map(item => {
      if(item.id === id) {
        item.isDone = !item.isDone
      }
      return item;
    });
    setItemsList(itemsListUpdated);
  }

  const removeItem = (id) => {
    const itemsListUpdated = itemsList.filter(item => item.id !== id);
    setItemsList(itemsListUpdated);
  }

  return (
    <div className='App'>
      <div className='title-container'>
        <h1>Shopping List</h1>
        <p>Don't ever forget what you need to buy again</p>
      </div>
      <div className='shopping-list-container'>
        <Form addItem={addItem} />
        <List 
          setDone={setDone} 
          removeItem={removeItem}
          items={itemsList}
        />
      </div>
    </div>
  );
}

export default App;
