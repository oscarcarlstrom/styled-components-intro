import React from 'react';
import { ThemeProvider } from 'styled-components';
import myTheme from '../theme';
import GlobalStyles from '../../styles/global-styles';
import Heading from './heading';

const Todo = () => (
  <ThemeProvider theme={myTheme}>
    <GlobalStyles />
    <Heading>TSX Todo</Heading>
  </ThemeProvider>
);

export default Todo;
