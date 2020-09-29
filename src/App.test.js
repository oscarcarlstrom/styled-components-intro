import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Example - JS vs TS/i);
  expect(h1).toBeInTheDocument();
});
