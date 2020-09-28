import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 3rem;
`;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;
