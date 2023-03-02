import React from 'react';
import Item from './Item';
import '../stylesheets/List.css';

const List = ({ items }) => {
  
  return (
    <div className='items-list'>
      <h1>My Shopping List</h1>
      {
        items.map(item => (
          <Item
            key={item.id}
            item={item.title}
            priority={item.priority}
            isDone={item.isDone}
          />
        ))
      }
    </div>
  );
}

export default List;