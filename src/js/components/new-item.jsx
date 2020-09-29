import React, { useState } from 'react';
import Button from './button';
import styled from 'styled-components';
import Input from './input';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const NewItem = ({ onAdd }) => {
  const [item, setItem] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    onAdd(item);
    setItem('');
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input value={item} onChange={event => setItem(event.target.value)} />
      <Button disabled={!item} type="submit" aria-label="Add" />
    </StyledForm>
  );
};

export default NewItem;
