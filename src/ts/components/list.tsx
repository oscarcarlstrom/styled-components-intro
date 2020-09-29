import React from 'react';
import ListItem from './list-item';

interface Props {
  items: string[];
  onDone: (index: number) => void;
}

const List = ({ items, onDone }: Props) => {
  const listItems = items.map((item, index) => (
    <ListItem key={`${item}-${index}`} removeItem={() => onDone(index)}>
      {item}
    </ListItem>
  ));
  return <ul>{listItems}</ul>;
};

export default List;
