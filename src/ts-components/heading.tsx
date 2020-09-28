import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode | ReactNode[];
}

const StyledHeading = styled.h2`
  font-size: 3rem;
`;

const Heading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export default Heading;
