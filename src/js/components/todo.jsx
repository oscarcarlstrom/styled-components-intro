import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import myTheme from '../theme';
import GlobalStyles from '../../styles/global-styles';
import Heading from './heading';
import List from './list';
import NewItem from './new-item';

const StyledContainer = styled.div`
  width: 400px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Todo = () => {
  const [items, setItems] = useState([]);
  const addItem = item => setItems(existingItems => [...existingItems, item]);
  const removeItem = itemIndex =>
    setItems(prevState => [
      ...prevState.slice(0, itemIndex),
      ...prevState.slice(itemIndex + 1),
    ]);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <StyledContainer>
        <Heading>To do</Heading>
        <NewItem onAdd={addItem} />
        <List items={items} onDone={removeItem} />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Todo;
