import { ButtonType } from 'types/types';
import styled from 'styled-components';

export const StyledButton = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 'none')};
  padding: ${({ padding }) => (padding ? padding : '8px 20px')};
  background-color: ${({ backgroundColor, theme: { colors } }) => (backgroundColor ? backgroundColor : colors.blue3)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '6px')};
  border: none;
  font-size: ${({ fontSize, theme: { fontSizes } }) => (fontSize ? fontSize : fontSizes.l)};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
