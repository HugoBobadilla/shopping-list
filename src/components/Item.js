import React from 'react';
import '../stylesheets/Item.css';
import { TiDelete, TiEdit } from 'react-icons/ti';

const Item = ({ item, priority, isDone }) => {

  if(!isDone) {
    return (
      <div className='list-item-container'>
        <div>
          <p className='item-title'>{item}</p>
          <p className='item-priority'>Priority: <span>{priority}</span></p>
        </div>
        <div className="icons-container">
          <TiEdit className='icon' />
          <TiDelete className='icon' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='list-item-container done'>
        <div>
          <p className='item-title'>{item}</p>
          <p className='item-priority'>Priority: <span>{priority}</span></p>
        </div>
        <div className="icons-container">
          <TiDelete className='icon' />
        </div>
      </div>
    );
  }
}

export default Item;