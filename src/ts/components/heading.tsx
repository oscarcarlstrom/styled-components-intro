import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode | ReactNode[];
}

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.heading};
  display: flex;
  align-items: baseline;
  font-weight: inherit;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:before {
    content: 'TS';
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimaryBg};
    margin-right: ${({ theme }) => theme.spacing.sm};
    height: 2em;
    width: 2em;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const Heading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export default Heading;
