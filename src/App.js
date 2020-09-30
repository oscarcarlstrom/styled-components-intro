import React from 'react';
import styled from 'styled-components';
import TodoJS from './js/components/todo';
import TodoTS from './ts/components/todo';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 400%;
  font-weight: 100;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const StyledContainer = styled.div`
  width: 900px;
  max-width: 100%;
  margin: auto;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

function App() {
  return (
    <>
      <StyledH1>Example - JS vs TS</StyledH1>
      <StyledContainer>
        <TodoJS />
        <TodoTS />
      </StyledContainer>
    </>
  );
}

export default App;
