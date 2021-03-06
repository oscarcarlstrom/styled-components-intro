import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) =>
      `${theme.fonts.family}, ${theme.fonts.fallbacks.join(', ')}`};
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    padding: 0 ${({ theme }) => theme.spacing.pagePadding};
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  button, input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    /* Lint /*/
    /* -webkit-appearance: none; */
    appearance: none;
  }
`;

const GlobalStyles = () => <GlobalStyle />;

export default GlobalStyles;
