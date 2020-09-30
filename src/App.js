import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import myTheme from './styles/theme';
import TodoJS from './js/components/todo';
import TodoTS from './ts/components/todo';

const StyledH1 = styled.h1`
  font-size: 400%;
  font-weight: 100;
  margin: 0.5em 0;
  @media ${({ theme }) => theme.breakPoints.lgUp} {
    text-align: center;
  }
`;

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.screenSizes.large};
  max-width: 100%;
  @media ${({ theme }) => theme.breakPoints.lgUp} {
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.breakPoints.lgDown} {
    margin: 0 -${({ theme }) => theme.spacing.pagePadding};
  }
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <StyledH1>Example - JS vs TS</StyledH1>
      <StyledContainer>
        <TodoJS />
        <TodoTS />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
