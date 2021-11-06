import styled from 'styled-components';

interface IButton {
  color?: string;
  marginLeft?: string;
  padding?: string;
  borderRadius?: string;
}

export const Button = styled.button<IButton>`
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 'none')};
  padding: ${({ padding }) => (padding ? padding : '8px 20px')};
  background-color: ${({ color, theme: { colors } }) => (color ? color : colors.blue3)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '6px')};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
