import React from 'react';
import styled from 'styled-components';
import { useZeroValue } from '@/components/Context/hooks';

const StyledButton = styled.button`
  background-color: red;
  padding: 10px;
  border: 1px solid #222;
`;

const Button = () => {
  const [, actions] = useZeroValue();
  const buttonOnClick = () => {
    actions.add();
  };
  return <StyledButton type="button" onClick={buttonOnClick}>+</StyledButton>;
};

export default Button;
