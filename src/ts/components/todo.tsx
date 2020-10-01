import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import myTheme from '../../styles/theme';
import Heading from './heading';
import List from './list';
import NewItem from './new-item';

const StyledContainer = styled.div`
  width: 400px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Todo = () => {
  const [items, setItems] = useState([] as string[]);
  const addItem = (item: string) =>
    setItems(existingItems => [...existingItems, item]);
  const removeItem = (itemIndex: number) =>
    setItems(prevState => [
      ...prevState.slice(0, itemIndex),
      ...prevState.slice(itemIndex + 1),
    ]);

  return (
    <ThemeProvider theme={myTheme}>
      <StyledContainer>
        <Heading>To do</Heading>
        <NewItem onAdd={addItem} />
        <List items={items} onDone={removeItem} />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Todo;
