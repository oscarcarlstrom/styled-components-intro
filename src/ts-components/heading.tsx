import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode | ReactNode[];
}

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.heading};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
`;

const Heading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export default Heading;
