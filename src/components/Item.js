import React from 'react';
import '../stylesheets/Item.css';

const Item = ({ item, priority }) => {
  return (
    <div className='list-item-container'>
        <p className='item-title'>{item}</p>
        <p className='item-priority'>Priority: <span>{priority}</span></p>
    </div>
  );
}

export default Item;