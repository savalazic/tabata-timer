import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const getButtonColor = ({ type, theme }) => (type ? theme[type] : theme.default);

const StyledButton = styled.button`
  background-color: ${props => getButtonColor({ theme: props.theme, type: props.type })};
  color: #fff;
  padding: 20px 80px;
  border-radius: 40px;
  font-size: 25px;
  max-width: 240px;
  width: 100%;
  text-align: center;

  transition: background-color 300ms;

  &:hover,
  &:active {
    background-color: ${props => darken(0.1, getButtonColor({ theme: props.theme, type: props.type }))};
  }

  &:focus {
    background-color: ${props => darken(0.05, getButtonColor({ theme: props.theme, type: props.type }))};
  }
`;

const Button = ({ type, children, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

export { Button };
