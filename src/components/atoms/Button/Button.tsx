import { ButtonType } from 'types/types';
import { StyledButton } from './Button.styles';

const Button = ({ ...props }: ButtonType) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
