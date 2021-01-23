import React from 'react';
import styled from 'styled-components';
import { useZeroValue } from '@/components/Context/hooks';

const StyledButton = styled.button`
  background-color: yellow;
  margin: 10px;
  padding: 10px;
  border: 1px solid #222;
`;

const Button = () => {
  const [, { add }] = useZeroValue();
  const buttonOnClick = () => {
    add();
  };
  return <StyledButton type="button" onClick={buttonOnClick}>++</StyledButton>;
};

export default Button;
