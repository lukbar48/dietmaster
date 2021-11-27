import { IManageNavButton } from 'types/interfaces';
import { StyledButton } from './ManageNavButton.styles';

const ManageNavButton = ({ children, to }: IManageNavButton) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default ManageNavButton;
