import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) =>
      `${theme.fonts.family}, ${theme.fonts.fallbacks.join(', ')}`} 
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => <GlobalStyle />;

export default GlobalStyles;
