import React from 'react';
import '../stylesheets/Item.css';
import { TiDelete } from 'react-icons/ti';

const Item = ({ id, item, priority, isDone, setDone, removeItem }) => {

  return (
    <div className={isDone ? 'list-item-container done' : 'list-item-container'}>
      <div>
        <p className='item-title' onClick={(id) => setDone(id)}>{item}</p>
        <p className='item-priority'>Priority: <span>{priority}</span></p>
      </div>
      <div className="icons-container">
        <TiDelete className='icon' onClick={(id) => removeItem(id)} />
      </div>
    </div>
  );
}

export default Item;