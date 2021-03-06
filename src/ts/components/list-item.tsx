import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Button from './button';

interface Props {
  children?: ReactNode | ReactNode[];
  removeItem: () => void;
}

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  word-break: break-all;
  animation-duration: ${({ theme }) => theme.animations.duration};
  animation-name: ${({ theme }) => theme.animations.slideInUp};
`;

const StyledButton = styled(Button)`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const ListItem = ({ children, removeItem }: Props) => {
  return (
    <StyledListItem>
      <StyledButton onClick={removeItem} aria-label="Done!" />
      {children}
    </StyledListItem>
  );
};

export default ListItem;
