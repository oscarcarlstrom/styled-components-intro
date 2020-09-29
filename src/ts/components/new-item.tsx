import React, { useState } from 'react';
import Button from './button';
import styled from 'styled-components';
import Input from './input';

interface Props {
  onAdd: (item: string) => void;
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const NewItem = ({ onAdd }: Props) => {
  const [item, setItem] = useState('');
  return (
    <StyledForm
      onSubmit={event => {
        event.preventDefault();
        onAdd(item);
        setItem('');
      }}
    >
      <Input
        type="text"
        aria-label="New todo"
        placeholder="Enter your next todo..."
        value={item}
        onChange={event => setItem(event.target.value)}
      />
      <Button disabled={!item} type="submit" aria-label="Add" />
    </StyledForm>
  );
};

export default NewItem;
