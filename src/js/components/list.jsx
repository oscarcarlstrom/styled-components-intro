import React from 'react';
import styled from 'styled-components';
import ListItem from './list-item';

const StyledList = styled.ul``;

const List = ({ items, onDone }) => {
  const listItems = items.map((item, index) => (
    <ListItem key={`${item}-${index}`} removeItem={() => onDone(index)}>
      {item}
    </ListItem>
  ));
  return <StyledList>{listItems}</StyledList>;
};

export default List;
