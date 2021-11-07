import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IManageNavButton {
  children: string;
  to: string;
}

const StyledButton = styled(NavLink).attrs({activeClassName: 'active-link'})`
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

  &.active-link {
    background-color: ${({ theme }) => theme.colors.blue1};
  }
`;

const ManageNavButton = ({ children, to }: IManageNavButton) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default ManageNavButton;
