import React from 'react';
import ListItem from './list-item';

const List = ({ items, onDone }) => {
  const listItems = items.map((item, index) => (
    <ListItem key={`${item}-${index}`} removeItem={() => onDone(index)}>
      {item}
    </ListItem>
  ));
  return <ul>{listItems}</ul>;
};

export default List;
