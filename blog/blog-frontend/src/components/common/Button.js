import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  padding:0.25rem 1rem;
  border:none;
  border-radius: 4px;
  outline:none;
  font-size:1rem;
  font-weight:bold;
  color:white; 
  cursor: pointer;

  background:${palette.gray[7]};  
  &:hover {
    background: ${palette.gray[6]};
  }

`;

const Button = props => <StyledButton {...props}/>;


export default Button;