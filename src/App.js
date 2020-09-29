import React from 'react';
import styled from 'styled-components';
import TodoJS from './js/todo';
import TodoTS from './ts/todo';

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <TodoJS />
      <TodoTS />
      hello
    </StyledApp>
  );
}

export default App;
