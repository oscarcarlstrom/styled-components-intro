import React from 'react';
import styled from 'styled-components';
import Heading from 'ts-components/heading';

const StyledApp = styled.div`
  background-color: gold;
  padding: 24px;
`;

function App() {
  return (
    <StyledApp>
      <Heading>TS heading</Heading>
      hello
    </StyledApp>
  );
}

export default App;
