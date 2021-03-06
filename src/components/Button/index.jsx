import React from 'react';
import styled from 'styled-components';
import { useZeroValue } from '@/components/Context/hooks';

const StyledButton = styled.button`
  background-color: red;
  margin: 10px;
  padding: 10px;
  border: 1px solid #222;
`;

const Button = () => {
  const [, { increment }] = useZeroValue();
  const buttonOnClick = () => {
    increment();
  };
  return <StyledButton type="button" onClick={buttonOnClick}>+</StyledButton>;
};

export default Button;
