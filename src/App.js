import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global-styles';
import myTheme from './styles/theme';
import TodoJS from './js/components/todo';
import TodoTS from './ts/components/todo';

const Styledh1 = styled.h1`
  font-size: 400%;
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  @media ${({ theme }) => theme.breakPoints.lgUp} {
    text-align: center;
  }
`;

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.containerWidth};
  max-width: 100%;
  @media ${({ theme }) => theme.breakPoints.lgUp} {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.breakPoints.lgDown} {
    margin: 0 -${({ theme }) => theme.spacing.pagePadding};
  }
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Styledh1>Example - JS vs TS</Styledh1>
      <StyledContainer>
        <TodoJS />
        <TodoTS />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
