import React from 'react';
import Item from './Item';
import '../stylesheets/List.css';

const List = ({ items, setDone, removeItem }) => {

  return (
    <div className='items-list'>
      <h1>My Shopping List</h1>
      {
        items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            item={item.title}
            priority={item.priority}
            isDone={item.isDone}
            setDone={(id) => setDone(item.id)}
            removeItem={(id) => removeItem(item.id)}
          />
        ))
      }
    </div>
  );
}

export default List;