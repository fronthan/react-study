import { createProxyServer } from 'http-proxy';
import React from 'react';
import styled, { css } from 'styled-components';
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

  ${props =>
    props.fullWidth && 
      css`
        width:100%;
        padding-top:0.75rem;
        padding-bottom:0.75rem;
        font-size:1.125rem;
    `}

  ${props =>
    props.lime && 
      css`
        background: ${palette.Lime[5]};
        &:hover {
          background:${palette.Lime[4]};
        }
      `}
`;

const Button = props => <StyledButton {...props}/>;


export default Button;