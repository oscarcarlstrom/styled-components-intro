import React from 'react';
import styled from 'styled-components';
import Heading from 'ts-components/heading';
import TodoJS from './js-components/todo';

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <TodoJS />
      <Heading>TS heading</Heading>
      hello
    </StyledApp>
  );
}

export default App;
