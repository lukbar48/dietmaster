import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IManageNavButton {
  children: ReactNode;
  to: string;
  exact?: boolean;
}

const StyledButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
  background-color: ${({ color, theme: { colors } }) => (color ? color : colors.grey4)};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.blue3};
  }
`;

const ManageNavButton = ({ children, to }: IManageNavButton) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default ManageNavButton;
