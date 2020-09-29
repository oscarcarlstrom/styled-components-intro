import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.heading};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
`;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;
