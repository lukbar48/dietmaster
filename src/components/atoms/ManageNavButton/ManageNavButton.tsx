import { StyledButton } from './ManageNavButton.styles';
import { ReactNode } from 'react';

export interface ManageNavButtonType {
  children: ReactNode;
  to: string;
}

const ManageNavButton = ({ children, to }: ManageNavButtonType) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default ManageNavButton;
