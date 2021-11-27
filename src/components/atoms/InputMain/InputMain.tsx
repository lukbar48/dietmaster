import { IInput } from 'types/interfaces';
import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};
`;

const InputMain = ({...props}: IInput) => {
  return <Input {...props}></Input>;
};

export default InputMain;
