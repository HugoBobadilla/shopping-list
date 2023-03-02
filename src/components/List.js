import React from 'react';
import Item from './Item';
import '../stylesheets/List.css';

const List = () => {
  return (
    <div className='items-list'>
      <h1>My Shopping List</h1>
      <Item
        item={'Beer'}
        priority={'High'}
      />
      <Item
        item={'Wine'}
        priority={'High'}
      />
    </div>
  );
}

export default List;