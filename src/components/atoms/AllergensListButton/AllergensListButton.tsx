import { ButtonType } from 'types/types';
import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: none;
  font-size: ${({ fontSize, theme: { fontSizes } }) => (fontSize ? fontSize : fontSizes.xl)};
  color: ${({ color, theme: { colors } }) => (color ? color : colors.blue3)};
`;

const AllergensListButton = ({ ...props }: ButtonType) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default AllergensListButton;
