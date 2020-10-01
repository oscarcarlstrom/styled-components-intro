import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  margin-right: ${({ theme }) => theme.spacing.sm};
  border: ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.borders.radius};
  flex-grow: 1;
`;

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInput {...props} />
);

export default Input;
