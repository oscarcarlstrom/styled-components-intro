import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimaryBg};
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border-color: transparent;
  box-shadow: ${({ theme }) => theme.boxShadow};

  /*Noter enkel : ikke  ::*/
  &:after {
    content: ${({ type }) =>
      type === 'submit' ? '"\\FF0B"' : '"\\2713"'}; /*Må escape \ med \ -> \\*/
    font-size: 2rem;
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;
