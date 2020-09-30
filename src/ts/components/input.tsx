import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  margin-right: ${({ theme }) => theme.spacing.sm};
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  flex-grow: 1;
  font-weight: inherit;
`;

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInput {...props} />
);

export default Input;
