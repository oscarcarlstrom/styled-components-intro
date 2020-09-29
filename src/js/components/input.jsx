import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
  margin-right: ${({ theme }) => theme.spacing.horizontal};
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  flex-grow: 1;
  font-weight: inherit;
`;

const Input = ({ value, onChange }) => (
  <StyledInput
    type="text"
    aria-label="New todo"
    placeholder="Enter your next todo..."
    value={value}
    onChange={onChange}
  />
);

export default Input;
